import Link from "next/link";

export default function RSVPButton() {
	return (
		<div className="flex justify-center mt-8">
			<Link
				href="/rsvp"
				className="text-center inline-block px-10 py-5 text-2xl font-semibold border-2 hover:bg-blue-500 hover:text-white shadow-lg no-underline"
			>
				<div>Will you be there?</div>
				<div className="text-base">Bạn sẽ tham dự chứ?</div>
			</Link>
		</div>
	);
}
