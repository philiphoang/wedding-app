"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Guest = {
  name: string;
  contact: string;
  attending: string;
};

export default function ParticipantsPage() {
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    const fetchGuests = async () => {
      const snapshot = await getDocs(collection(db, "rsvps"));
      setGuests(snapshot.docs.map((doc) => doc.data() as Guest));
    };
    fetchGuests();
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Guest List / Danh sách khách mời
      </h1>

      {guests.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No RSVPs yet. <br /> Chưa có phản hồi nào.
        </p>
      ) : (
        <div className="space-y-4">
          {guests.map((guest, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-200 py-3 text-lg"
            >
              <span className="font-medium">{guest.name}</span>
              <span className="text-gray-500">{guest.contact}</span>
              <span
                className={
                  guest.attending === "yes" ? "text-green-600" : "text-red-600"
                }
              >
                {guest.attending === "yes"
                  ? "Attending 🎉 / Tham dự 🎉"
                  : "Not Attending ❌ / Không tham dự ❌"}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
