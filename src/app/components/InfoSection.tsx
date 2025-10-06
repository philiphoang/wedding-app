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
            className="object-cover object-top"
          />
        </div>

        {/* Right: Ceremony Details */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Wedding Ceremony
              <span className="block text-xl md:text-3xl text-gray-600 mt-1">Lễ cưới</span>
            </h2>
          </div>

          <div className="space-y-4 text-lg">
            <div>
              <strong>Location:</strong> Son Tay, Hanoi, Vietnam
              <div className="text-sm text-gray-600"><strong>Địa điểm:</strong> Sơn Tây, Hà Nội, Việt Nam</div>
            </div>
            <div>
              <strong>Date:</strong> 29 March, 2026
              <div className="text-sm text-gray-600"><strong>Ngày:</strong> 29 Tháng 3, 2026</div>
            </div>
            <div>
              <strong>Time:</strong> To be announced here
              <div className="text-sm text-gray-600"><strong>Giờ:</strong> Sẽ được thông báo ở đây sau</div>
            </div>
          </div>
            <RSVPButton />
        </div>
      </div>
    </section>
  );
}
