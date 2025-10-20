import Image from "next/image";

const photoSrc = "/images/engagement/engagement_6.JPG";

export default function TeaCeremonyPage() {
	return (
		<section className="py-20 px-6 md:px-12 min-h-screen">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-heading mb-4">
						Vietnamese Tea Ceremony
					</h2>
					<p className="text-lg md:text-xl text-gray-700">
						28 March 2025
						<br />
						Family Residence, <em> Sơn Tây, Hà Nội, Việt Nam</em>
					</p>
				</div>
				{photoSrc && (
					<div className="w-full h-64 md:h-[28rem] mb-12 relative overflow-hidden shadow-lg">
						<Image
							src={photoSrc}
							alt="Tea Ceremony"
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<p className="text-lg md:text-xl leading-relaxed text-gray-800">
						The Vietnamese tea ceremony (<strong>Lễ Vu Quy</strong>) is a
						beautiful tradition where the couple expresses gratitude and respect
						to their families. By serving tea, they honor their parents,
						grandparents, and ancestors while receiving blessings for their new
						journey together.
					</p>
				</div>
			</div>
		</section>
	);
}
