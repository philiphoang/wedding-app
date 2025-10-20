"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Alex_Brush } from "next/font/google";
import Image from "next/image";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function RSVPPage() {
	const [formData, setFormData] = useState({ name: "", contact: "", attending: "yes" });
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await addDoc(collection(db, "rsvps"), {
				...formData,
				createdAt: new Date(),
			});

			setSubmitted(true);
			setFormData({ name: "", contact: "", attending: "yes" }); // reset form
		} catch (error) {
			console.error("Error submitting RSVP:", error);
		}
	};

	return (
		<section className="max-w-2xl mx-auto py-16 px-6 text-center">
			<h1 className={`${alexBrush.className} text-5xl md:text-6xl mb-4`}>RSVP</h1>
			<p className="mb-8 text-lg text-gray-600">
				Please let us know if you’ll be joining our special day <br />
				Vui lòng cho chúng tôi biết nếu bạn sẽ tham dự ngày đặc biệt của chúng tôi
			</p>

			{!submitted ? (
				<>
					<form onSubmit={handleSubmit} className="space-y-6 mx-auto mb-10 bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center border border-gray-200 mb-10">
						<div>
							<input
								type="text"
								placeholder="Your Full Name / Họ và tên"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full border border-gray-300 p-3 text-lg"
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="Email or Phone Number / Email hoặc Số điện thoại"
								required
								value={formData.contact}
								onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
								className="w-full border border-gray-300 p-3 text-lg"
							/>
						</div>
						<div>
							<select
								value={formData.attending}
								onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
								className="w-full border border-gray-300 p-3 text-lg"
							>
								<option value="yes">✅ I will be there / Tôi sẽ tham dự</option>
								<option value="no">❌ Sorry, I cannot attend / Xin lỗi, tôi không thể tham dự</option>
							</select>
						</div>
						<button
							type="submit"
							className="inline-block px-10 py-5 text-2xl bg-white border-2 hover:bg-blue-500 hover:text-white shadow-lg no-underline"
						>
							Submit RSVP / Gửi phản hồi
						</button>
					</form>
					<div className="relative w-full h-96 md:h-[400px] overflow-hidden shadow-lg  ">
						<Image
							src="/images/tet/tet_10.JPG"
							alt="Nhà Hàng Baly, Sơn Tây"
							fill
							className="object-cover"
						/>
					</div>
				</>
			) : (
				<p className="text-xl text-green-600">
					🎉 Thank you for your RSVP! <br />
					🎉 Cảm ơn bạn đã phản hồi!
				</p>
			)}
		</section>
	);
}
