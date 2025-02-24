import Image from "next/image"
export default function ServiciosHero(){
    return(
        <section>
            <Image alt="Hero image" src={"/servicios-hero.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}