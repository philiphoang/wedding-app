import HotelCard from "../components/HotelCard";

export default function TravelPage() {
  return (
    <section className="py-16 px-6 md:px-12 text-gray-800 space-y-12 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl text-center text-gray-800">
        Travel & Stay 
      </h1>
      <h2 className="text-3xl md:text-4xl italic text-center">Di chuyển & Lưu trú</h2>
      {/* Wedding Destination */}
      <div className="bg-white shadow-lg p-8 md:p-6">
        <div>
            <h2 className="text-3xl md:text-4xl">Wedding Destination</h2>
            <h3 className="text-2xl italic mb-3">Địa điểm cưới</h3>
          <p className="text-lg leading-relaxed mb-4">
            Our wedding will take place in <strong>Son Tay, Hanoi, Vietnam</strong>.<br/>  
            Lễ cưới của chúng tôi sẽ diễn ra tại <strong>Sơn Tây, Hà Nội, Việt Nam</strong>.
          </p>
        </div>

      </div>

      {/* Hotel / Accommodation */}
      <HotelCard />
    </section>
  );
}
