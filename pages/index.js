import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Welcome from '../Components/welcome'



export default function Home() {
  return (
    <div>
      <Banner />
      <Welcome />
      <Features />
    </div>
  )
}
