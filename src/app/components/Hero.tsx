import Image from "next/image";
import { Alex_Brush, Montserrat } from "next/font/google";

const alexBrus = Alex_Brush({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full">
      {/* Text Section */}
      <div className="text-center py-12 px-4 bg-gradient-to-b from-wedding-cream to-transparent">
        <h1
          className={`${alexBrus.className} text-wedding-blueDark text-4xl md:text-7xl mb-4`}
        >
          Philip Thao Hoang <br/>&amp;<br/> Hau Hai Nguyen
        </h1>
        <p
          className={`${montserrat.className} text-gray-700 text-lg md:text-2xl`}
        >
          29 March 2026 - Sơn Tây, Hà Nội
        </p>
      </div>

      {/* Image Section */}
      <div className="flex w-full max-h-[45vh] overflow-hidden justify-center">
        <Image
          src="/images/IMG_2181.JPG"
          alt="Wedding Hero"
          width={1920}
          height={1080}
          priority
          className="w-full max-w-[80%] align-center h-auto object-cover"
        />
      </div>
    </section>
  );
}