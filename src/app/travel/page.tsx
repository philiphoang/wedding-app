import HotelCard from "../components/HotelCard";
import Image from "next/image";

export default function TravelPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl text-center text-gray-800">
        Travel & Stay 
      </h1>
      <h2 className="block text-xl md:text-3xl text-gray-600 mt-1">Di chuyển & Lưu trú</h2>
      {/* Wedding Destination */}
      <div className="bg-white shadow-lg p-8 md:p-6">
        <div>
            <p className="text-lg leading-relaxed mb-4">
              Our wedding will take place in <strong>Son Tay, Hanoi, Vietnam</strong>.<br/> 
            <span className="text-sm text-gray-600">

            Lễ cưới của chúng tôi sẽ diễn ra tại <strong>Sơn Tây, Hà Nội, Việt Nam</strong>.
            </span>
            </p> 
        </div>
      </div>
      <div className="relative w-full h-64 md:h-[28rem] mb-12 overflow-hidden shadow-lg">
        <Image
          src="/images/thaovien.jpg"
          alt="Nhà Hàng Baly, Sơn Tây"
          fill
          className="object-cover"
        />
      </div>
      {/* Hotel / Accommodation */}
      <HotelCard />
    </section>
  );
}
