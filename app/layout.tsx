import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navbar'
// NavBar
// import NavBar from './components/Navbar'
// NavBar
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'روائس القمم لاستقدام العمالة',
  description: 'روائس القمم لاستقدام العمالة'
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <NavBar/> 
      <body className={inter.className}>{children}</body>
    </html>
  )
}
