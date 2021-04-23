import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>King Stream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* nav */}
      <Nav />
      
      
      {/* results */}
      <Results />



    </div>
  );
}
