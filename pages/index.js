import Head from 'next/head'
import Image from 'next/image'
import { About, Navbar } from '../components'



export default function Home() {
  return (
    <div className="md:container md:mx-auto flex">
      <About />
      <About/>
    </div>
  )
}
