// src/app/tea-ceremony/page.tsx
import Image from "next/image";

const photoSrc = "/images/IMG_2182.JPG";

const timeEvents = [
  { time: "08:00", event: "Guests arrive" },
  { time: "08:30", event: "Groom’s family procession & welcome" },
  { time: "09:00", event: "Tea serving to parents & elders" },
  { time: "10:00", event: "Family blessings & gift exchange" },
  { time: "10:30", event: "Closing & refreshments" },
]

export default function TeaCeremonyPage() {
  return (
    <section className="py-20 px-6 md:px-12 bg-wedding-cream text-wedding-blueDark min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            Vietnamese Tea Ceremony
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <span className="font-semibold">📅 Date:</span> 29 March 2025
            <br />
            <span className="font-semibold">📍 Location:</span> Family Residence,
            <em> Sơn Tây, Hà Nội, Việt Nam</em>
          </p>
        </div>

        {/* Image */}
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

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            The Vietnamese tea ceremony (<strong>Lễ Vu Quy</strong>) is a
            beautiful tradition where the couple expresses gratitude and respect
            to their families. By serving tea, they honor their parents,
            grandparents, and ancestors while receiving blessings for their new
            journey together.
          </p>
        </div>

        {/* Timeline Schedule */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Ceremony Schedule
          </h3>
          <div className="relative border-l-2 border-wedding-blueDark/20 max-w-xl mx-auto">
            {timeEvents.map((item, i) => (
              <div key={i} className="mb-8 ml-6">
                <div className="absolute w-4 h-4 bg-wedding-blueDark rounded-full -left-2 border-2 border-white"></div>
                <time className="block text-sm font-semibold text-wedding-blueDark">
                  {item.time}
                </time>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
