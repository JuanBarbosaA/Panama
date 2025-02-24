import Image from "next/image"
export default function ServiciosFotografia(){
    return(
        <section>
            <Image alt="Fotografia image" src={"/servicios-fotografia.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}