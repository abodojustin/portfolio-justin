// src/app/components/ThemeProvider.tsx (Version Corrigée)
"use client";

import * as React from "react";
// We import the ‘ThemeProviderProps’ type directly from the main package,
// rather than from a subfolder.
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}