import Image from "next/image"
export default function Header(){
    return(
        <section>
            <Image alt="Header image" src={"/image0.jpg"} width={1500} height={1500}></Image>
        </section>
    )
}