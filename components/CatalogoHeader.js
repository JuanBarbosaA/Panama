"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CatalogoHeader() {
  const router = useRouter();

  return (
    <section className="relative w-full h-auto">
      {/* Imagen de fondo */}
      <Image
        alt="Header image"
        src="/servicios-header.jpg"
        width={1500}
        height={500}  // Ajusta según necesites
        className="w-full h-auto"
        priority
      />

      {/* DIV contenedor que posicione los items absolutos */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Ejemplo de 3 elementos, cada uno posicionado y dimensionado con % */}
        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "61%",    // Se ubica 20% desde el top del contenedor
            left: "27.3%",   // Se ubica 15% desde el left del contenedor
            width: "8%",  // 10% del ancho del contenedor
            height: "25%", // 20% de la altura del contenedor
          }}
          onClick={() => router.push("/")}
        >
        </div>

        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "61%",
            left: "35.45%",
            width: "10%",
            height: "25%",
          }}
          onClick={() => router.push("/catalogo")}
        >
          {/* Ítem 2 */}
        </div>

        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "61%",
            left: "45.7%",
            width: "11.5%",
            height: "25%",
          }}
          onClick={() => router.push("/catalogo")}
        >
          {/* Ítem 3 */}
          
        </div>
        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "61%",
            left: "57.6%",
            width: "11.5%",
            height: "25%",
          }}
          onClick={() => router.push("/catalogo")}
        >
          {/* Ítem 3 */}
          
        </div>
        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "61%",
            left: "69.5%",
            width: "11.5%",
            height: "25%",
          }}
          onClick={() => router.push("/contacto")}
        >
          {/* Ítem 3 */}
          
        </div>
        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "101%",
            left: "45.7%",
            width: "11.5%",
            height: "25%",
          }}
          onClick={() => router.push("/servicios")}
        >
          {/* Ítem 3 */}
          
        </div>
        <div
          className="absolute cursor-pointer bg-transparent "
          style={{
            top: "139.5%",
            left: "45.7%",
            width: "11.5%",
            height: "25%",
          }}
          onClick={() => router.push("/catalogo")}
        >
          {/* Ítem 3 */}
          
        </div>
      </div>
    </section>
  );
}
