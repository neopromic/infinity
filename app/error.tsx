"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Ops... Algo parece estar errado!</h2>
      <Button onClick={() => { reset(); }} variant={"secondary"}>Tentar novamente!</Button>
    </div>
  );
}
