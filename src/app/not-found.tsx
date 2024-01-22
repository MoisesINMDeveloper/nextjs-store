import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="title">404</h1>
      <Image src="/images/404.png" alt="404" width={300} height={300} />
      <h2 className="subtitle">¡ Uy, parece que el enlace se escondió !</h2>
      <p className="message">Pero nuestra tienda está abierta las 24/7 </p>
      <Link className="Link" href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}
