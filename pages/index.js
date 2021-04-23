import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from '../utils/requests'

export default function Home({results}) {

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
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genere = context.query.genere;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genere]?.url || requests.fetchTrending.url
    }`
  ).then(res=>res.json());

  return {
    props:{
      results: request.results
    }
  }
}
