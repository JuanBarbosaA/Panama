import CatalogoAsesoria from "@/components/CatalogoAsesoria";
import CatalogoAudio from "@/components/CatalogoAudio";
import CatalogoCabinas from "@/components/CatalogoCabinas";
import CatalogoHeader from "@/components/CatalogoHeader";
import CatalogoHero from "@/components/CatalogoHero";
import CatalogoIluminacion from "@/components/CatalogoIluminacion";
import CatalogoVideo from "@/components/CatalogoVideo";
import Footer from "@/components/Footer";

export default function Page(){
    return(
        <div>
            <CatalogoHeader/>
            <CatalogoHero/>
            <CatalogoAudio/>
            <CatalogoVideo/>
            <CatalogoIluminacion/>
            <CatalogoCabinas/>
            <CatalogoAsesoria/>
            <Footer/>
        </div>
    )
}