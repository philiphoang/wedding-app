import DestinationSection from "./components/DestinationSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

export default function Home() {
	return (
		<main>
			<Hero/>			
			<InfoSection />
			<DestinationSection />
			<Footer/>
		</main>
	);
}
