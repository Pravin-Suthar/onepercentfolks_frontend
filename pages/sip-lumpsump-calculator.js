import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layouts/layout';

export default function FirstPost() {
  return (
    /* Psueuod code
    
    SIP 
    inputs: 
    SIP
    Flag ( step up / step_down)
    change every year %
    Interest
    Year

    for (i=0; i<year; i++){
      if (step_up){
        SIP = SIP + SIP*change
      } else {
        SIP = SIP - SIP*change
      }
      total = total + SIP
    }
    
    inputs: 
    Lumpsum
    years

    Interest*/


    
    <Layout>
    <Head>
        <title>Lump Sum calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Lump Sum calculator</h1>
      <h2>
        <Link href="/home">Back to home</Link>
      </h2>
      </Layout>
  );
}