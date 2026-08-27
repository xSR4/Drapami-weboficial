"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsParams = Record<
  string,
  string | number | boolean | null | undefined
>;

export function trackGAEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) return;

  sendGAEvent("event", eventName, {
    page_path: window.location.pathname,
    ...params,
  });
}
