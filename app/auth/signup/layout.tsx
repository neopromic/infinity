import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign-up into infinity',
  description: 'Sign-up into infinity-project to try our services.',
  verification: {
    google: 'BdQcQyV9Tsqw5LtifWX2erZRG-4I0qx5226M2KnhLfA',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>
}
