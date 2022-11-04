// app/layout.tsx
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}