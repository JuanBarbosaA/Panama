import Image from "next/image"
export default function CatalogoHero(){
    return(
        <section>
            <Image alt="Hero image" src={"/catalogo-hero.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}