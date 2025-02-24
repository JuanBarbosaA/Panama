import Image from "next/image"
export default function ContactMap(){
    return(
        <section>
            <Image alt="Map image" src={"/contact-map.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}