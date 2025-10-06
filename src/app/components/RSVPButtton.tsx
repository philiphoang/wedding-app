import Link from "next/link";

export default function RSVPButton() {
  return (
    <div className="flex justify-center mt-24">
      <Link
        href="/rsvp"
        className="inline-block px-10 py-5 text-2xl font-semibold border-2 hover:bg-blue-500 hover:text-white shadow-lg no-underline">
        <div>
          <div className="group-hover:text-white">I will be there | <span className=" italic">Mình sẽ đến</span></div>
        </div>
      </Link>
    </div>
  );
}
