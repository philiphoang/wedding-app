import React from "react";

const rooms = [
	{
		name: "KHU XÓM NHỎ (Small Hamlet)",
		type: "1 double bed (2m x 2.2m), 40m²",
		capacity: "2 adults + 2 children under 6 years old",
		originalPrice: "2,000,000 VND (ca. 800 NOK)",
		discountedPrice: "1,600,000 VND (ca. 640 NOK)",
	},
	{
		name: "KHU XÓM ĐỒI (Hill Hamlet)",
		type: "2 single beds (1.2m x 2m), 35m²",
		capacity: "2 adults + 2 children under 6 years old",
		originalPrice: "2,000,000 VND (ca. 800 NOK)",
		discountedPrice: "1,600,000 VND (ca. 640 NOK)",
	},
	{
		name: "KHU PHỐ NHỎ (Small Town)",
		type: "3 single beds (1.2m x 2m), 75m²",
		capacity: "3 adults + 2 children under 6 years old",
		originalPrice: "2,700,000 VND (ca. 1080 NOK)",
		discountedPrice: "2,160,000 VND (ca. 860 NOK)",
	},
	{
		name: "KHU XÓM VƯỜN HỒNG (Rose Garden)",
		type: "2 single beds (1.2m x 2m), 50m²",
		capacity: "2 adults + 2 children under 6 years old",
		originalPrice: "2,500,000 VND (ca. 1000 NOK)",
		discountedPrice: "2,000,000 VND (ca. 800 NOK)",
	},
	{
		name: "KHU XÓM NHÀ NỔI TRÊN HỒ (Villa)",
		type: "2 bedrooms (1 double bed + 2 single beds), 1 living room",
		capacity: "4 adults + 4 children under 6 years old",
		originalPrice: "6,000,000 VND (ca. 2400 NOK)",
		discountedPrice: "4,800,000 VND (ca. 1920 NOK)",
	},
];

export default function HotelCard() {
	return (
		<div className="bg-white shadow-lg p-6 mb-8 rounded-3xl  border border-gray-200 ">
			<h2 className="text-2xl font-semibold mb-4">Accommodations / Lưu trú</h2>
			<p className="text-lg mb-4">
				Recommended hotel: <strong>Thảo viên Resort</strong>, Trung Sơn Trầm, Sơn Tây, Hà Nội
			</p>

			<div className="overflow-x-auto">
				<table className="w-full text-left border border-gray-200">
					<thead>
						<tr className="bg-gray-100">
							<th className="px-4 py-2">Room / Phòng</th>
							<th className="px-4 py-2">Type / Loại</th>
							<th className="px-4 py-2">Capacity / Sức chứa</th>
							<th className="px-4 py-2">Original Price / Giá gốc</th>
							<th className="px-4 py-2">Discounted Price / Giá giảm 20%</th>
						</tr>
					</thead>
					<tbody>
						{rooms.map((room, i) => (
							<tr key={i} className="border-t border-gray-200">
								<td className="px-4 py-2">{room.name}</td>
								<td className="px-4 py-2">{room.type}</td>
								<td className="px-4 py-2">{room.capacity}</td>
								<td className="px-4 py-2">{room.originalPrice}</td>
								<td className="px-4 py-2">{room.discountedPrice}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-6 text-sm text-gray-600 space-y-2">
				<p>📌 Surcharge Conditions:</p>
				<ul className="list-disc list-inside">
					<li>Children 6–12 years old: 350,000 VND / guest / night</li>
					<li>Children 12 years old and above: 500,000 VND / guest / night</li>
					<li>Extra bed: 700,000 VND / guest / night</li>
				</ul>

				<p className="mt-2">🏨 Room rates include:</p>
				<ul className="list-disc list-inside">
					<li>Buffet breakfast at the restaurant</li>
					<li>Complimentary swimming tickets <br />(outdoor pool, hot mineral pool, <br />indoor hot saltwater pool, sauna, herbal mineral jacuzzi,<br /> green tea & oriental herbal baths, ginger-salt foot bath, towels, shower gel)</li>
					<li>Free tea & coffee in room for guests</li>
					<li>Free 2 bottles of mineral water in room</li>
					<li>Access to gym (small gym, limited equipment)</li>
				</ul>
			</div>

			<div className="mt-4">
				<a
					href="https://www.thaovienresort.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-5 py-2 bg-gray-800 text-white shadow hover:bg-gray-700 transition"
				>
					Visit Thảo viên Resort Website
				</a>
			</div>
		</div>
	);
}
