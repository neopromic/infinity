"use client";

import { AuthProvider } from "@/utils/context/authContext";

/**
 * This return a list of providers client-side
 * @param children
 * @returns Providers Client-Side
 */
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};
