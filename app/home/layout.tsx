import PrivateRouter from "@/components/ui/layouts/PrivateRouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRouter>
      <section>{children}</section>
    </PrivateRouter>
  );
}
