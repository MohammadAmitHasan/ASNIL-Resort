import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Welcome from '../Components/welcome'
import HomeLayout from '../Layouts/HomeLayout'



export default function Home() {
  return (
    <div>
      <HomeLayout>
        <Banner />
        <Welcome />
        <Features />
      </HomeLayout>
    </div>
  )
}
