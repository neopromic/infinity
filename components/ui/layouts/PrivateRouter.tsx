"use client";

import { useFirebaseAuth } from "@/utils/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TypographyH1 } from "../typography/Heading1";
import { Skeleton } from "../skeleton";
import Image from "next/image";

export default function PrivateRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useFirebaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth/signin");
    }
  }, [user, router]);

  if (user === undefined) {
    return <Skeleton className="w-32" />;
  }

  if (!user) {
    return (
      <section className="container">
        <Image
          src="/undraw_safe.svg"
          width={0}
          height={0}
          className="w-fit h-fit"
          alt="This is an safe are, you need are logged-in!"
        />
        <TypographyH1>Ops! Algo parece estar errado!</TypographyH1>
        <p className="text-muted-foreground mt-2 w-full text-center">
          Redirecionando para página
          <span className="font-bold textt-white"> /auth/signin.</span>
        </p>
      </section>
    );
  }

  return children;
}
