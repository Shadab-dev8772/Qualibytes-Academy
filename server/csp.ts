import helmet from "helmet";
import type { Express } from "express";

export function setupCSP(app: Express) {
  const isProd = process.env.NODE_ENV === "production";

  // ❌ Never apply CSP in development (Vite needs inline scripts)
  if (!isProd) return;

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "blob:"],
          connectSrc: ["'self'", "https://script.google.com"],
          fontSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          frameAncestors: ["'none'"],
          frameSrc: ["'self'", "https://drive.google.com"],
        },
      },
    })
  );
}
