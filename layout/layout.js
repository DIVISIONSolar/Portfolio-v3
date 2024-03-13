import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({
  children,
  title = '',
                               }) {
  title = `Josh S.`
  return (
      <>
          <Head>
              <meta charSet="UTF-8"/>
              <title>{title}</title>
              <meta name="description" content="A developer and tech enthusiast from the United States." />
              <meta name="keywords" content="HTML,CSS,JavaScript,Tailwind,TailwindCSS,Bootstrap" />
              <meta name="author" content="Josh Severo" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content={`Josh S.`} />
              <meta property="og:description" content="A developer and tech enthusiast from the United States." />
              <meta property="og:image" content="https://joshsevero.dev/logo.webp" />
              <meta name="theme-color" content="#F43F5E" />
              <meta name="twitter:card" content="summary_large_image" />
              {/* <meta name="twitter:site" content="@ThatGuy5275" /> */}
              <meta name="twitter:title" content={`Josh S.`} />
              <meta name="twitter:description" content="A developer and tech enthusiast from the United States."/>
              <meta name="twitter:image" content="https://joshsevero.dev/logo.webp"/>
          </Head>
          <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
              <Footer />
          </div>
      </>
  )
}