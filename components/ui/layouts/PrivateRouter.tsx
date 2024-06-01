"use client";

import { useFirebaseAuth } from "@/utils/context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TypographyH1 } from "../typography/Heading1";
import { Skeleton } from "../skeleton";

export default function PrivateRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useFirebaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (user === undefined) {
    // Mostrar estado de carregamento enquanto verificamos o usuÃ¡rio
    return <Skeleton className="w-[100px]" />;
  }

  if (!user) {
    // Mostrar mensagem de erro se a navegaÃ§Ã£o falhar por algum motivo
    return <TypographyH1>Ops! Algo parece estar errado!</TypographyH1>;
  }

  return children
}