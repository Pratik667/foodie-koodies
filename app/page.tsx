import Image from 'next/image';
import Head from './header';
import Footer from './footer';
import Homepage from './home';

export default function Home() {
  return (   
      <body>
        <Head/>
        <main className="container mx-auto px-4">
          <Homepage/>
        </main>
        <Footer/>
      </body>    
  )
}
