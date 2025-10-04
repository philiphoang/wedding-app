import Countdown from "./components/Countdown";
import DestinationSection from "./components/DestinationSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

export default function Home() {
	return (
		<main>
			<Hero/>			
			{/* <Countdown /> */}
			<InfoSection />
			<DestinationSection />
			<Footer/>
		</main>
	);
}
