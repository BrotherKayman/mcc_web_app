import styles from "./page.module.css";
import Herosection from "./herosection/herosection";
import EnquiryForm from "@/enquiryForm/enquiryForm";
import Awardbanner from "./banner/awardbanner";
import Jobs from "./jobs/page";
import Hero from "./hero";
import Header from "./header";
import ServiceSection from "./serviceSection/page";
import Reviews from "./reviews/page";
import Footer from "./footer/page";

//import PageSpeedChecker from "./pageSpeedChecker/page";

export default function Home() {
  return (
    <>
    
    <Herosection/>
<Header/>
<ServiceSection/>
<Awardbanner />
<Reviews />
<Footer />
    
    
    
    <Jobs />
    
    
    {/*<PageSpeedChecker/>*/}

    {/*<TimerDisplay />*/}

    <EnquiryForm/>
</>
  );
}
