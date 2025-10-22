import Image from "next/image";
import RSVPButton from "./RSVPButton";

export default function CeremonySection() {
	return (
		<section className="bg-bg py-12 px-6 md:px-12 text-gray-800">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Right on desktop, but first on mobile */}
				<div className="order-1 md:order-2 text-center space-y-8">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold">
							Wedding Ceremony
							<span className="block text-xl md:text-3xl text-gray-600 mt-1">
								Lễ cưới
							</span>
						</h2>
					</div>
					<div className="space-y-4 text-lg">
						<div>
							<strong>Location:</strong> Son Tay, Hanoi, Vietnam
							<div className="text-sm text-gray-600">
								<strong>Địa điểm:</strong> Sơn Tây, Hà Nội, Việt Nam
							</div>
						</div>
						<div>
							<strong>Date:</strong> 29 March, 2026
							<div className="text-sm text-gray-600">
								<strong>Ngày:</strong> 29 Tháng 3, 2026
							</div>
						</div>
						<div>
							<strong>Time:</strong> To be announced here
							<div className="text-sm text-gray-600">
								<strong>Giờ:</strong> Sẽ được thông báo ở đây sau
							</div>
						</div>
					</div>
					<RSVPButton />
				</div>
				{/* Image: below on mobile, left on desktop */}
				<div className="order-2 md:order-1 relative w-full h-80 sm:h-96 md:h-[800px] overflow-hidden shadow-lg">
					<Image
						src="/images/engagement/engagement_5.JPG"
						alt="Wedding Ceremony"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
