import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
        <section>
            <Image src={"/image.jpg"} alt="Hero section image" width={1500} height={1500}></Image>
        </section>
    )
}