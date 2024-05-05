import Link from "next/link";

export default function BottomMenu() {
  return (
    <footer className="w-full bg-gray-100 text-black">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8">
          {/* ロゴ */}
          <div className="flex flex-col items-center">
            <img
              src="/Lotus-favico.png"
              alt="Logo"
              className="w-32 h-32 mt-8"
            />
            <img
              src="/livethelotusstory.png"
              alt="Logo"
              className="w-32 h-32 mb-8"
            />
          </div>
          {/* レスポンシブなレイアウト */}
          <div className="w-full md:w-1/2 md:flex md:justify-between">
            {/* <div className="w-full md:w-1/2"> */}
            {/* Store Information */}
            <div className="mb-8">
              <h2 className="font-bold text-lg mb-2">SUPPORT</h2>
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
            {/* Link Menu */}
            <div>
              <h3 className="font-bold text-lg mb-2">Quick Links</h3>
              <nav>
                <ul>
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
              </nav>
            </div>
          </div>
          {/* ロゴ */}
          <div className="flex items-center">
            <img
              src="/black-map-of-australia.png"
              alt="Logo"
              className="w-32 h-32 mt-8"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-[#FFFFFF80] text-center py-6">
        <p>Copyright 2024 © Maintained by Lotus Story Restaurant</p>
      </div>
    </footer>
  );
}
