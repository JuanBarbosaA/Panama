import ContactForm from "@/components/Contact-form";
import ContactHeader from "@/components/Contact-header";
import ContactHero from "@/components/Contact-hero";
import ContactMap from "@/components/Contact-map";
import ContactSocial from "@/components/Contact-social";
import Footer from "@/components/Footer";

export default function page(){
    return(
        <div>
            <ContactHeader/>
            <ContactHero/>
            <ContactForm/>
            <ContactMap/>
            <ContactSocial/>    
            <Footer/>
        </div>
    )
}