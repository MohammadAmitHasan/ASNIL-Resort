import Banner from 'Components/Banner'
import ContactUs from 'Components/ContactUs'
import Features from 'Components/Features'
import FoodOffers from 'Components/FoodOffers'
import RoomsCount from 'Components/RoomsCount'
import Welcome from 'Components/welcome'
import HomeLayout from 'Layouts/HomeLayout'

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <Banner />
        <Welcome />
        <RoomsCount />
        <FoodOffers />
        <Features />
        <ContactUs />
      </HomeLayout>
    </div>
  )
}
