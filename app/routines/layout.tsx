export default function Layout({
      children,
    }: {
      children: React.ReactNode,
    }) {
      return (
        <section>
          <nav></nav>
          {children}
        </section>
      );
    }