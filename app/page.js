import Footer from "@/components/Footer"
import Header from "../components/Header"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import InfoBanner from "@/components/InfoBanner"
import OurClients from "@/components/OurClients"
import Testimonies from "@/components/Testimonies"
import Scope from "@/components/Scope"
import Gallery from "@/components/Gallery"
import Form from "@/components/Form"
import Map from "@/components/Map"
export default function Home(){
  return(
    <>
      <Header/>
      <Hero/>
      <ServicesSection/>
      <InfoBanner/>
      <OurClients/>
      <Testimonies/>
      <Scope/>
      <Gallery/>
      <Form/>
      <Map/>
      <Footer/>
    </>
  )
}