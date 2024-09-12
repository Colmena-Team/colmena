import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colmena v0.0.1</title>
        <meta
          name="La nueva red social colaborativa"
          content="Creado por Silvio Aguilar Software Eng"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-green-400 text-white font-bold p-4 text-xl">Hola Next! olaa</h1>
    </div>
  );
}
