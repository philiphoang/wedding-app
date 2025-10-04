"use client";

import { useState } from "react";
import { db } from "@/lib/firebase"; // your firebase.js config
import { collection, addDoc } from "firebase/firestore";

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
      <h1 className="text-4xl font-bold mb-6">RSVP / Phản hồi</h1>
      <p className="mb-8 text-lg text-gray-600">
        Please let us know if you’ll be joining our special day <br />
        Vui lòng cho chúng tôi biết nếu bạn sẽ tham dự ngày đặc biệt của chúng tôi
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
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

          {/* Contact (email or phone) */}
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

          {/* Attendance */}
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

          {/* Submit */}
          <button
            type="submit"
            className="w-50 border border-black py-3 text-lg hover:bg-black hover:text-white transition"
          >
            Submit RSVP / Gửi phản hồi
          </button>
        </form>
      ) : (
        <p className="text-xl text-green-600 font-semibold">
          🎉 Thank you for your RSVP! <br />
          🎉 Cảm ơn bạn đã phản hồi!
        </p>
      )}
    </section>
  );
}
