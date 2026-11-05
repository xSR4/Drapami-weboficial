export type Experience = {
  id: string;
  childName: string;
  ageLabel?: string;
  location: string;
  title: string;
  description: string;
  familyQuote?: string;
  photo: string;
  photoAlt: string;
  youtubeUrl: string;
};

export const experiences: Experience[] = [
  {
    id: "experiencia-adele",
    childName: "Adele",
    ageLabel: "4 años",
    location: "San Juan de Lurigancho",
    title: "Una pequeña sonrisa, una gran experiencia 💕",
    description:
      "Cada peque merece sentirse acompañado durante su visita al dentista. En Dra. Pami, la paciencia, el cariño y el juego forman parte de nuestra atención.",
    familyQuote:
      "Agradecemos la paciencia y el cariño de la Dra. Pami al atender a nuestro peque.",
    photo: "/experiencias/ExperienciaAdele.webp",
    photoAlt: "Adele junto a su familia y la Dra. Pami",
    youtubeUrl: "https://www.youtube.com/shorts/1EA9NtIka6k",
  },

  {
  id: "experiencia-nataly",
  childName: "Nataly",
  ageLabel: "Mamá embarazada",
  location: "San Juan de Lurigancho",
  title: "El cuidado de su sonrisa empieza antes de nacer 💕",
  description:
    "Nataly visitó a la Dra. Pami para aprender cómo cuidar la salud bucal de su peque desde el embarazo y después de su nacimiento. Una primera consulta para resolver dudas y prepararse con amor para su llegada.",
  familyQuote:
   "Quiero resolver todas mis dudas sobre el cuidado de mi sonrisa durante el embarazo.",
  photo: "/experiencias/ExperienciaNataly.webp",
  photoAlt: "Nataly, mamá embarazada, en su visita a Dra. Pami",
  youtubeUrl: "https://www.youtube.com/shorts/1EA9NtIka6k",
},

{
  id: "experiencia-juliete",
  childName: "Juliette",
  ageLabel: "4 años",
  location: "San Juan de Lurigancho",
  title: "De llegar con miedo a despedirse con una gran sonrisa 💕",
  description:
    "Juliette llegó nerviosa a su cita. Con juegos, cariño y paciencia, la Dra. Pami la ayudó a ganar confianza para su revisión y limpieza dental. ¡Al finalizar, recibió un premio por su gran esfuerzo!",
  familyQuote:
   "Tiempo para adaptarse, juegos para conectar y mucho cariño en cada paso.",
  photo: "/experiencias/ExperienciaJuliete.webp",
  photoAlt: "Juliete durante su visita a Dra. Pami",
  youtubeUrl: "https://www.youtube.com/shorts/shQHF20rXGA",
},

];

export function getYouTubeId(value: string): string | null {
  try {
    const url = new URL(value);

    if (url.protocol !== "https:") return null;

    const host = url.hostname.toLowerCase();
    let id: string | null = null;

    if (host === "youtu.be") {
      id = url.pathname.split("/")[1];
    }

    if (
      ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(host)
    ) {
      if (url.pathname === "/watch") {
        id = url.searchParams.get("v");
      } else if (/^\/(shorts|embed)\//.test(url.pathname)) {
        id = url.pathname.split("/")[2];
      }
    }

    return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}