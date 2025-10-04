import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wedding-blueDark text-black mt-16">
      {/* Divider line */}
      <hr className="border-wedding-beige/50" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-1 gap-12 text-center md:text-left">
        
        {/* Middle: Menu (horizontal) */}
        <div>
            <div className="mt-10 flex flex-wrap justify-between md:justify-between gap-6 gap-y-4 text-3xl">
                <Link href="/" className="no-underline hover:text-wedding-beige transition flex items-center gap-2">
                Home <span className="text-wedding-beige">→</span>
                </Link>
                <Link href="/rsvp" className="no-underline hover:text-wedding-beige transition flex items-center gap-2">
                RSVP <span className="text-wedding-beige">→</span>
                </Link>
                <Link href="/schedule" className="no-underline hover:text-wedding-beige transition flex items-center gap-2">
                Schedule <span className="text-wedding-beige">→</span>
                </Link>
                <Link href="/gallery" className="no-underline hover:text-wedding-beige transition flex items-center gap-2">
                Gallery <span className="text-wedding-beige">→</span>
                </Link>
            </div>
        </div>

     
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
          <p className="text-2xl">
            <a
              href="mailto:philip.t.hoang@outlook.com"
              className="no-underline hover:text-wedding-beige transition"
            >
              philip.t.hoang@outlook.com
            </a>
          </p>
          <p className="text-2xl">
            <a
              href="mailto:haunh.ftu@gmail.com"
              className="no-underline hover:text-wedding-beige transition"
            >
              haunh.ftu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
