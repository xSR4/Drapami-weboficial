
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormMessage 
} from "@/components/ui/form";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, Instagram, Facebook } from "lucide-react";
import { useFirestore, useAuth, setDocumentNonBlocking, initiateAnonymousSignIn, useUser } from "@/firebase";
import { doc, collection } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/app/actions/contact";

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  phoneNumber: z.string().min(7, "Teléfono inválido").optional().or(z.literal('')),
  subject: z.string().min(2, "El asunto es requerido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function Footer() {
  const { firestore } = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!user && !isUserLoading && auth) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  const handleResetForm = () => {
    form.reset({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  async function onSubmit(values: FormValues) {
    if (!firestore) return;

    setIsSubmitting(true);

    try {
      // 1. Guardar en Firestore para respaldo
      const submissionsRef = collection(firestore, "contactFormSubmissions");
      const newDocRef = doc(submissionsRef);
      
      const submissionData = {
        id: newDocRef.id,
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        subject: values.subject,
        message: values.message,
        submissionDateTime: new Date().toISOString(),
        isRead: false,
      };

      setDocumentNonBlocking(newDocRef, submissionData, { merge: true });

      // 2. Enviar correo electrónico vía Resend
      const emailResult = await sendContactEmail({
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber || undefined,
        subject: values.subject,
        message: values.message,
      });

      if (!emailResult.success) {
        console.error("Error al enviar email:", emailResult.error);
        toast({
          title: "Aviso",
          description: "La consulta se guardó, pero hubo un problema al enviar el correo de notificación.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "¡Consulta enviada!",
          description: "Tu mensaje ha sido recibido exitosamente.",
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al procesar la consulta:", error);
      toast({
        title: "Error",
        description: "No pudimos procesar tu mensaje. Por favor, inténtalo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="bg-white pt-20">
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#2D3142]">Contáctanos</h2>
            <p className="text-muted-foreground mb-8">
              Estamos aquí para resolver cualquier duda sobre la salud bucal de tus pequeños. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-pami-blue/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-pami-blue" />
                </div>
                <span className="font-medium">+51 991 112 048</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pami-turquoise/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-pami-turquoise" />
                </div>
                <span className="font-medium">r.alva@pucp.edu.pe</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pami-pink/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-pami-pink" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Calle el habito 866 - SJL</span>
                  <span className="text-[10px] text-muted-foreground">Ref: Altura estación Santa Rosa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pami-bgSoft/50 p-8 rounded-[2rem] border border-pami-blue/5">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in-up">
                <div className="bg-pami-blue/10 p-4 rounded-full mb-6">
                  <CheckCircle2 className="h-12 w-12 text-pami-blue" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3142] mb-2">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground max-w-xs mx-auto mb-8">
                  Gracias por contactarnos. Dra. Pami ha recibido tu consulta y se pondrá en contacto contigo a la brevedad.
                </p>
                <Button 
                  onClick={handleResetForm}
                  variant="outline"
                  className="rounded-xl border-pami-blue text-pami-blue hover:bg-pami-blue/10"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nombre completo" className="rounded-xl bg-white border-none shadow-sm h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Correo electrónico" type="email" className="rounded-xl bg-white border-none shadow-sm h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Teléfono / WhatsApp" className="rounded-xl bg-white border-none shadow-sm h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Asunto" className="rounded-xl bg-white border-none shadow-sm h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea placeholder="Cuéntanos cómo podemos ayudar a tu pequeño..." className="rounded-xl bg-white border-none shadow-sm min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pami-blue hover:bg-pami-blue/90 text-white rounded-xl h-12 font-bold shadow-lg shadow-pami-blue/20"
                  >
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enviar Consulta"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative h-22 w-48 flex items-center">
            <Image
              src="/logopami.png"
              alt="Dra. Pami Logo"
              width={192}
              height={88}
              className="h-22 w-auto object-contain"
              unoptimized
            />
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/dra.pami?igsh=MWxrMTJwN2U3MjI4dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pami-blue transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/share/1Cz6CsWuSV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pami-blue transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@dra.pami?_r=1&_t=ZS-967F5hOGtO9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black transition-colors">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v.01c-.02 2.33.04 4.66-.03 6.99-.13 2.57-1.41 5.06-3.65 6.32-1.9 1.08-4.38 1.25-6.38.44-2.1-.84-3.71-2.73-4.18-4.94-.46-2.19.12-4.63 1.54-6.37 1.4-1.72 3.63-2.71 5.84-2.58v4.03c-1.14-.14-2.33.15-3.21.91-.9.76-1.39 1.96-1.31 3.12.04 1.12.55 2.2 1.44 2.88.94.72 2.21.93 3.35.54 1.08-.37 1.93-1.28 2.22-2.39.12-.48.14-.98.14-1.47V.02z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dra. Pami. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
