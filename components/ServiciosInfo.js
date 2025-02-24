import Image from "next/image"
export default function ServiciosInfo(){
    return(
        <section>
            <Image alt="Información image" src={"/servicios-info.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}