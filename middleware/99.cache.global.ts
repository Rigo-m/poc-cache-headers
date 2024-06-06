import { setHeader } from "h3";

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) {
    if (to.name === "index") {
      const event = useRequestEvent();
      setHeader(event!, "Cache-Control", "public, max-age=0, must-revalidate");
      setHeader(
        event!,
        "Netlify-CDN-Cache-Control",
        "public, s-maxage=4600, stale-while-revalidate=12000",
      );
    }
  }
});
