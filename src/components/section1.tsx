import Image from 'next/image';
import '@/css/section1.css'; // Use absolute imports if configured
// import type { AppProps } from 'next/app';
export function Section1() {
    return (
    <section className='section'>
      <section className="page1">
        <div className="home">
            <div className="circle">
                <div className="skull">
                    <Image className="anwesha" src="./pics/WhatsApp Image 2022-09-05 at 11 1 (Traced).svg" alt=""/>

                    <Image className="skullhead" src="./pics/skull.png" alt=""/>
                    <Image className="right eye" src="./pics/Vector 1906.svg" alt=""/>
                    <Image className="left eye" src="./pics/Vector 1906.svg" alt=""/>
                </div>
               

                <div className="button">
                    <Image src="/pics/Subtract.png" alt=""/>
                    <button>REGISTER</button>
                </div>
                <div className="welcometext">
                    <h1 className="welcome">Welcome To Your Nightmare</h1>
                </div>
            </div>
        </div>  
       </section>
    </section>
    );
  }
  