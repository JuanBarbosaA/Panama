import Image from "next/image"

export default function InfoBanner(){
    return(
        <section>
            <Image alt="Info banner image" src={"/image3.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}