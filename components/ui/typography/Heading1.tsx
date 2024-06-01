/**
 * This components is used for Heading default like in HeroSections, etc
 * @param text is the text that this component recives.
 * @returns a component of Heading
 */
export function TypographyH1({ children }: { children: String }) {
  return (
    <h1 className="scroll-m-20 font-bold tracking-tight text-center leading-tight mt-8 text-3xl md:text-5xl lg:leading-[1.1]">
      {children}
    </h1>
  );
}
