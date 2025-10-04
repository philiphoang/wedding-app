import Image from "next/image";

export default function DestinationSection() {
  return (
    <section className="bg-bg py-22 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Destination Details */}
        <div className="text-center space-y-6">
          {/* English */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Destination</h2>
            <h3 className="text-2xl italic mb-3">Reception Venue</h3>
            <div className="space-y-2 text-lg">
              <div><strong>📍 Location:</strong> Nhà Hàng Baly, Son Tay, Hanoi, Vietnam</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 w-1/2 mx-auto"></div>

          {/* Vietnamese */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Địa điểm</h2>
            <h3 className="text-2xl italic mb-3">Nhà hàng tiệc cưới</h3>
            <div className="space-y-2 text-lg">
              <div><strong>📍 Địa điểm:</strong> Nhà Hàng Baly, Sơn Tây, Hà Nội, Việt Nam</div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-96 md:h-[800px] overflow-hidden shadow-lg">
          <Image
            src="/images/IMG_2196.JPG" 
            alt="Nhà Hàng Baly, Sơn Tây"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
