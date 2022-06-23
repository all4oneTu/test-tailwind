import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={}>

    <SessionProvider session={session}>
      <div className="h-screen overflow-y-scroll bg-slate-200">
        <Header/>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
    </ApolloProvider>
  )
  
}

export default MyApp
