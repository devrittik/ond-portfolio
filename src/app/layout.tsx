import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { theme } from "@/data/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.intro,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeStyles = {
    "--portfolio-background": theme.background,
    "--portfolio-surface": theme.surface,
    "--portfolio-elevated": theme.elevated,
    "--portfolio-foreground": theme.foreground,
    "--portfolio-muted": theme.muted,
    "--portfolio-accent": theme.accent,
    "--portfolio-accent-contrast": theme.accentContrast,
    "--portfolio-border": theme.border,
  } as CSSProperties;

  return (
    <html lang="en">
      <body style={themeStyles}>{children}</body>
    </html>
  );
}