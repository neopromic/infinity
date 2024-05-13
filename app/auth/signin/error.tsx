"use client";

import { Button } from "@/components/ui/button";
import { GitForkIcon } from "lucide-react";
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
    <div className="flex flex-col items-center  justify-center px-4 py-6 space-y-2">
      <h2 className="font-bold tracking-tighter w-full text-center">
        Ops... Algo parece estar errado!
      </h2>
      <p className="text-muted-foreground text-center">
        Parece que algo não está funcionando corretamente, tente novamente!
      </p>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            reset();
          }}
          variant={"secondary"}
        >
          Tentar novamente!
        </Button>
        <Button className="gap-2">
          <GitForkIcon size={"16px"} />
          Abrir issue
        </Button>
      </div>
    </div>
  );
}
