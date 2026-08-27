"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackGAEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  eventName: string;
  eventParams?: AnalyticsParams;
};

export function TrackedExternalLink({
  href,
  eventName,
  eventParams = {},
  onClick,
  children,
  ...props
}: TrackedExternalLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackGAEvent(eventName, {
      link_url: href,
      ...eventParams,
    });

    onClick?.(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
