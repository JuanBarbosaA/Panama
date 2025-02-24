import Image from "next/image"
export default function ContactHero(){
    return(
        <section>
            <Image alt="Hero image" src={"/contact-hero.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}