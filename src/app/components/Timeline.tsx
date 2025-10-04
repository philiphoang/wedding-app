export default function Timeline() {
  const events = [
    { date: "28 Jul 2023", title: "First date"},
    { date: "17 Aug 2023", title: "Relationship Established" },
    { date: "30 May 2025", title: "We got engaged" },
    { date: "28 March 2026", title: "Wedding Ceremony" },
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-12">
          About us
        </h2>

        {/* Events container with vertical line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-pink-300 h-full transform -translate-x-1/2"></div>

          <div className="flex flex-col space-y-16">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center text-black ${
                  index % 2 !== 0 ? "md:justify-end" : ""
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md">
                      <span className="block text-pink-500 font-semibold">
                        {event.date}
                      </span>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>
                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12"></div>
                    <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md">
                      <span className="block text-pink-500 font-semibold">
                        {event.date}
                      </span>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>
                  </>
                )}

                {/* Dot on the center line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
