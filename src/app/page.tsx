import { Section1 as Xyz} from "@/components/section1"
import {Merch} from "@/components/merch"
import {Sectionaftermovie} from "@/components/sectionaftermovie"

  // import { Sectiontheme } from "@/components/theme"
  // import Carousel  from "@/components/carosal"
export default function Home() {
  return (
    <>
    <section >
      <Xyz></Xyz> 
       <Merch></Merch>
      {/* <Carousel></Carousel> */}
      <Sectionaftermovie/>
      {/* <Sectiontheme/> */}
      {/* <Carousel/> */}
    </section>
    </>
  )
}
