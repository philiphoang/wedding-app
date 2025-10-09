import Image from "next/image";
import { Alex_Brush, Bitter } from "next/font/google";

const alexBrus = Alex_Brush({ weight: "400", subsets: ["latin"] });
const bitter = Bitter({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full">
      {/* Text Section */}
      <div className="text-center py-12 px-4 bg-gradient-to-b from-wedding-cream to-transparent">
        <h1 className={`${alexBrus.className} text-4xl md:text-7xl mb-4`}>
          Philip Thao Hoang <br /> &amp; <br /> Hau Hai Nguyen
        </h1>
        <p className={`${bitter.className} text-gray-700 text-lg md:text-2xl`}>
          29 March 2026 — Sơn Tây, Hà Nội
        </p>
      </div>

      {/* Full-bleed Image Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[30vh] md:h-[45vh] overflow-hidden">
        <Image
          src="/images/IMG_2197.JPG"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
