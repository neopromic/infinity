import PrivateRouter from '@/components/ui/layouts/PrivateRouter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página Inicial | Encontre rotinas',
  verification: {
    google: 'BdQcQyV9Tsqw5LtifWX2erZRG-4I0qx5226M2KnhLfA',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRouter>
      <section>{children}</section>
    </PrivateRouter>
  )
}
