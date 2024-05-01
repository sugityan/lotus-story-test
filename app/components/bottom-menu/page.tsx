"use client";
import Link from "next/link";

export default function BottomMenu() {
  return (
    <footer className="w-full bg-gray-100 text-black ">
      <div className="container mx-auto flex justify-around items-center">
        {/* ロゴ */}
        <div className="flex flex-col items-center">
          <img src="/Lotus-favico.png" alt="Logo" className="w-32 h-32 mt-8" />
          <img
            src="/livethelotusstory.png"
            alt="Logo"
            className="w-32 h-32 mb-8"
          />
        </div>
        {/* レスポンシブなレイアウト */}
        <div className="hidden md:flex md:w-1/2">
          {/* Store Information */}
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-center md:text-left">
                <div>
                  <h2 className="font-bold mb-2 bg-black text-white px-4">
                    SUPPORT
                  </h2>
                  <ul className="list-disc pl-4">
                    <li>
                      <span className="font-bold">
                        Lotus Story Sydney Olympic Park:
                      </span>{" "}
                      2 Dawn Fraser Ave, Sydney Olympic Park, NSW, Australia,
                      2127.
                    </li>
                    <li>
                      <span className="font-bold">Phone number:</span> 0432 027
                      822
                    </li>
                    <li>
                      <span className="font-bold">Lotus Story Ultimo:</span> 1-3
                      Smail Street, Ultimo, NSW, Australia, 2007.
                    </li>
                    <li>
                      <span className="font-bold">Phone number:</span>
                      0431 106 675
                    </li>
                    <li>
                      <span className="font-bold">Email:</span>
                      broadway@lotusstory.com.au
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Empty Space */}
          <div className="w-1/12"></div>
          {/* Link Menu */}
          <div className="w-1/2">
            <div>
              <h3 className="font-bold mb-2 bg-black text-white px-4">
                Quick Links
              </h3>
              <ul className="list-disc pl-4">
                <li>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p>Contact Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/reservation">
                    <p>Web Ordering</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ロゴ */}
        <div className="flex items-center">
          <img
            src="/black-map-of-australia.png"
            alt="Logo"
            className="w-60 h-60 mt-8"
          />
        </div>
        {/* モバイルレイアウト */}
        <div className="md:hidden w-full">
          {/* 店舗情報 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Store Information</h3>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold mb-2">SUPPORT</h2>
                <p>
                  Lotus Story Sydney Olympic Park: 2 Dawn Fraser Ave, Sydney
                  Olympic Park, NSW, Australia, 2127.
                </p>
                <p>Phone number: 0432 027 822</p>
                <p>
                  Lotus Story Ultimo: 1-3 Smail Street, Ultimo, NSW, Australia,
                  2007.
                </p>
                <p>Phone number: 0431 106 675</p>
                <p>Email: broadway@lotusstory.com.au</p>
              </div>
            </div>
          </div>
          {/* リンクメニュー */}
          <div>
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/home">
                    <p>home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p>about</p>
                  </Link>
                </li>
                {/* 他のリンクを追加 */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black text-[#FFFFFF80] text-center py-6">
        <p>Copyright 2024 © Maintained by Lotus Story Restaurant</p>
      </div>
    </footer>
  );
}
