import type { AppProps } from 'next/app'
import RootLayout from '../app/layout'
import  '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
