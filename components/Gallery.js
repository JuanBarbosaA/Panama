import Image from "next/image"
export default function Gallery(){
    return(
        <section>
            <Image alt="Gallery image" src={"/image7.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}