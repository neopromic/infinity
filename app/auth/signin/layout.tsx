import Header from "@/components/ui/layouts/apresentation/Header";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Sign in into infinity",
  description: "Sign-in into infinity-project to try our services."
}

export default function Layout({
      children,
    }: {
      children: React.ReactNode,
    }) {
      return (
        <section>
          <Header />
          {children}
        </section>
      );
    }