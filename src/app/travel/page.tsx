import { Alex_Brush } from "next/font/google";
import HotelCard from "../components/HotelCard";
import Image from "next/image";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function TravelPage() {
	return (
		<section className="max-w-5xl mx-auto py-16 px-6 text-center">
			<h1 className={`${alexBrush.className} text-5xl md:text-6xl mb-4`}>
				Travel & Stay
			</h1>
			<div className="bg-whitep-8">
				<div>
					<p className="text-lg md:text-xl text-gray-700 mb-10">
						Our wedding will take place in <strong>Son Tay, Hanoi, Vietnam</strong>.<br />
						<span className="text-sm text-gray-600">

							Lễ cưới của chúng tôi sẽ diễn ra tại <strong>Sơn Tây, Hà Nội, Việt Nam</strong>.
						</span>
					</p>
				</div>
			</div>

			<div className="relative w-full h-96 overflow-hidden mb-10">
				<Image
					src="/images/resort/thaovien_2.jpg"
					alt="Nhà Hàng Baly, Sơn Tây"
					fill
				/>
			</div>
			<HotelCard />
		</section>
	);
}
