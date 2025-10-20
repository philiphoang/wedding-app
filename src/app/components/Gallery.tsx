"use client";

import Image from "next/image";
import { Alex_Brush } from "next/font/google";
const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });

interface GalleryProps {
	photos: string[];
}

export default function Gallery({ photos }: GalleryProps) {
	return (
		<section className="py-16 px-4 md:px-12 bg-white text-gray-800 items-center">
			<div className="max-w-6xl mx-auto text-center">
				<h1 className={`${alexBrush.className} text-5xl md:text-6xl mb-4`}>
					Gallery
				</h1>
				<div className="grid grid-cols-2 gap-4">
					{photos.map((src, index) => (
						<div
							key={index}
							className="relative w-full aspect-[3/4] overflow-hidden shadow-md"
						>
							<Image
								src={src}
								alt={`Wedding photo ${index + 1}`}
								fill
								className="object-cover"
								sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 33vw"
								quality={80}
								priority={index < 3}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
