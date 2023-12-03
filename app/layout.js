import { Inter } from 'next/font/google'
import Navbar from "./components/navigation"
import Footer from "./components/footer"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = { /*Informacion de un HTML */
  title: 'First Next App',
  description: 'First nextjs app',
}

export default function RootLayout({ children }) {
  return (
    /* Se puede usar una etiqueta head para linkear a un archivo de css */
    <html lang="en">
      <body className={inter.className}> <Navbar/> {children} <Footer/> </body>
    </html>
  )
}
