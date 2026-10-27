"use client";

import { cn } from "@/lib/utils";
import { Avatar as RadixAvatar } from "radix-ui";

type AvatarProps = React.ComponentProps<typeof RadixAvatar.Root> & {
  className?: string;
  src: string;
  fallback?: string;
};

export default (props: AvatarProps) => {
  return (
    <RadixAvatar.Root
      className={cn(
        "inline-block rounded-full overflow-hidden size-10",
        props.className
      )}
    >
      <RadixAvatar.Image src={props.src} />
      <RadixAvatar.Fallback>{props.fallback ?? "i"}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
