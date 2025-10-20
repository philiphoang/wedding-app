import { Alex_Brush } from "next/font/google";
import Image from "next/image";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });

export default function WishlistPage() {
    return (
        <section className="min-h-screen bg-wedding-cream text-wedding-blueDark py-16 px-6 md:px-12 flex flex-col items-center ">
            <div className="max-w-3xl text-center">
                <h1
                    className={`${alexBrush.className} text-5xl md:text-6xl mb-4`}
                >
                    Our Wishlist
                </h1>

                <p className={` text-lg md:text-xl text-gray-700 mb-10`}>
                    Your presence is the most meaningful gift to us.
                    However, if you wish to contribute to our future together,
                    we would deeply appreciate your support.
                </p>

                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center border border-gray-200 mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        Gift via Bank Transfer
                    </h2>
                    <p className="text-gray-700 mb-6">
                        If you'd like to bless us with a monetary gift,
                        you can send it directly to the following account:
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 inline-block text-left mx-auto">
                        <p><strong>Account Name:</strong> Philip Thao Hoang</p>
                        <p><strong>Bank:</strong> TBA</p>
                    </div>

                    <p className="text-gray-600 text-sm italic">
                        Thank you so much for your love and generosity ❤️
                    </p>
                </div>

                <div className="relative w-full h-96 md:h-[400px] overflow-hidden shadow-lg  ">
                    <Image
                        src="/images/tet/tet_2.JPG"
                        alt="Nhà Hàng Baly, Sơn Tây"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}