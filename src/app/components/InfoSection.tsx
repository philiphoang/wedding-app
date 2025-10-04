import Image from "next/image";
import RSVPButton from "./RSVPButtton";

export default function CeremonySection() {
  return (
    <section className="bg-bg py-22 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image */}
        <div className="relative w-full h-96 md:h-[800px] overflow-hidden shadow-lg">
          <Image
            src="/images/IMG_2195.JPG"
            alt="Wedding Ceremony"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Ceremony Details */}
        <div className="text-center space-y-6">
          {/* English */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Wedding</h2>
            <h3 className="text-2xl italic mb-3">Ceremony</h3>
            <div className="space-y-2 text-lg">
              <div><strong>📍 Location:</strong> Son Tay, Hanoi, Vietnam</div>
              <div><strong>📅 Date:</strong> 29 March, 2026</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 w-1/2 mx-auto"></div>

          {/* Vietnamese */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Lễ cưới</h2>
            <h3 className="text-2xl italic mb-3">Hôn lễ</h3>
            <div className="space-y-2 text-lg">
              <div><strong>📍 Địa điểm:</strong> Sơn Tây, Hà Nội, Việt Nam</div>
              <div><strong>📅 Ngày:</strong> 29 Tháng 3, 2026</div>
            </div>
          </div>
            <RSVPButton />
        </div>
      </div>
    </section>
  );
}
