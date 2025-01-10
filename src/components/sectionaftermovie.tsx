import Image from 'next/image';
import '@/css/sectionaftermovie.css'; // Use absolute imports if configured
// import type { AppProps } from 'next/app';
export function Sectionaftermovie() {
    return (  <section className="aftermovie"> 
        <div className="aftermovietext">
            <h1 className="aftermovietexth1">Anwesha 2024: The Aftermovie</h1>
            <p>Last Year&apos;s Magic in 3 Minutes</p>
      
        </div>
        <div className="image_aftermovie">
            <Image src="./pics/Frame 239511.png" alt=""/>
        </div>
         </section>
         );
  }
  