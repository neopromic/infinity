/**
 * This components is used for Heading default like in HeroSections, etc
 * @param text is the text that this component recives.
 * @returns a component of Heading
 */
export function TypographyH1({ children }: { children: string }) {
  return (
    <h1 className="scroll-m-20 mt-8 font-bold text-3xl text-center md:text-5xl leading-tight lg:leading-[1.1] tracking-tight">
      {children}
    </h1>
  );
}
