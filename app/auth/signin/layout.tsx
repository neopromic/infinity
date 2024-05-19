import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in into infinity",
  description: "Sign-in into infinity-project to try our services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
