import Footer from "@/components/Footer";
import ServiciosHero from "@/components/Servicios-hero";
import ServiciosAlquiler from "@/components/ServiciosAlquiler";
import ServiciosConsecutiva from "@/components/ServiciosConsecutiva";
import ServiciosEligenos from "@/components/ServiciosEligenos";
import ServiciosFilmacion from "@/components/ServiciosFilmacion";
import ServiciosFotografia from "@/components/ServiciosFotografia";
import ServiciosHeader from "@/components/ServiciosHeader";
import ServiciosInfo from "@/components/ServiciosInfo";
import ServiciosInterpretes from "@/components/ServiciosInterpretes";
import ServiciosLivestreaming from "@/components/ServiciosLivestreaming";
import ServiciosTraduccion from "@/components/ServiciosTraduccion";

export default function page(){
    return(
        <div>
            <ServiciosHeader/>
            <ServiciosHero/>
            <ServiciosInfo/>
            <ServiciosConsecutiva/>
            <ServiciosLivestreaming/>
            <ServiciosInterpretes/>
            <ServiciosTraduccion/>
            <ServiciosAlquiler/>
            <ServiciosFilmacion/>
            <ServiciosFotografia/>
            <ServiciosEligenos/>
            <Footer/>
        </div>
    )
}