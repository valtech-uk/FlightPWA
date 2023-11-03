import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { createClient } from "contentful";

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'title'});
  
  return {
    props: {
      data: res.items
    }
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>easyJet FligtPWA POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">MUI (Material UI) Button</Button>
      <Link href={"/about"}>About (nextjs Link)</Link>
      <h1>Content from content full ({data[0]?.fields?.title})</h1>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
