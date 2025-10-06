import Image from "next/image";

export default function DestinationSection() {
  return (
    <section className="bg-bg py-22 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Destination Details */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Destination
              <span className="block text-xl md:text-3xl text-gray-600 mt-1">Địa điểm</span>
            </h2>
          </div>
          <div className="space-y-2 text-lg">
            <div>
              <strong>📍 Location:</strong> Nhà Hàng Baly, Son Tay, Hanoi, Vietnam
              <div className="text-sm text-gray-600"><strong>📍 Địa điểm:</strong> Nhà Hàng Baly, Sơn Tây, Hà Nội, Việt Nam</div>
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
