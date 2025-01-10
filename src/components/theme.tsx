// import Image from 'next/image';
import '@/css/theme.css'; // Use absolute imports if configured
// import type { AppProps } from 'next/app';
export function Sectiontheme() {
    return (
        <section className="years_theme">
        <div className="text_years_theme">
            <h1>This Year's Theme</h1>
            <p>Echoes Of the Abyss</p>
        </div>
        <div className="years-content">
            <div className="year-content_image">
                <img src="./pics/Mascot 2.png" alt=""/>
            </div>
            <div className="paragram-years-text">
                <p>Meet <span className="grinnytext">Grimmy</span>, a cute little skeleton on a journey through a world full of wonders. With a heart full of curiosity, Grimmy explores places where dreams come alive and imagination has no limits. Each step brings a new discovery, revealing beauty in the unexpected and magic in the unknown.

                    Join Grimmy on this fun adventure and let your imagination soar beyond the ordinary!</p>
                    <div className="button">
                        <img src="./pics/Subtract.png" alt="" />
                        <button>REGISTER</button>
                    </div>
            </div>
           
        </div>

      
         </section>
    );
  }
  