"use client";
import React from "react";
import { EmailForm } from "../components/email/email";

export default function ContactPage() {
  return (
    <div className="flex flex-wrap m-10">
      <div className="w-full my-5">
        <h2>CONTACT US</h2>
      </div>
      <div className="w-full md:w-1/2">
        {/* Above shop info */}
        <div className="border-b">
          <div className="bg-black text-white p-2">
            <h2>LOTUS STORY | THE BEST VIETNAMESE RESTAURANT IN NSW</h2>
          </div>
          <div>
            <ul className="list-disc pl-4 mt-5">
              <li>
                <a href="https://maps.app.goo.gl/7tUDF1kzU3yAfD846">
                  <span className="font-bold">
                    Lotus Story Sydney Olympic Park:
                  </span>{" "}
                  2 Dawn Fraser Ave, Sydney Olympic Park, NSW, Australia, 2127.
                </a>
              </li>
            </ul>
            <p className="pl-10 mt-5">
              <span className="font-bold">Phone number:</span> 0432 027 822
            </p>
            <ul className="list-disc pl-4 mt-5">
              <li>
                <a href="https://maps.app.goo.gl/rtYdrzjxqnxAw7k96">
                  <span className="font-bold">Lotus Story Ultimo:</span> 1-3
                  Smail Street, Ultimo, NSW, Australia, 2007.
                </a>
              </li>
            </ul>
            <p className="pl-10 mt-5">
              <span className="font-bold">Phone number:</span>
              0431 106 675
            </p>
            <p className="my-5">
              <span className="font-bold">Email:</span>{" "}
              Broadway@lotusstory.com.au
            </p>
          </div>
        </div>
        {/* Below shop info */}
        <EmailForm orders={[]} isConfirm={false} />
      </div>
      <div className="w-full md:w-1/2 sm:mt-10 md:mt-0">
        <div className="contact-margin" />
        {/* 地図情報 */}
        <div className="mx-4">
          <div className="bg-black text-white p-2">
            <h2>LOTUS STORY | THE BEST VIETNAMESE RESTAURANT IN NSW</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106037.90631798937!2d150.92736484335936!3d-33.8462443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a4c9d2a89f6b%3A0xb9e5ecbaad1ed53!2sLotus%20Story%20Restaurant!5e0!3m2!1sen!2sjp!4v1712464472134!5m2!1sen!2sjp"
            width="100%" // 幅を100%に設定
            height="300" // 固定値のまま
            frameBorder="0"
            style={{ border: 0 }}
            // allowFullScreen=""
            aria-hidden="false"
            // tabIndex="0"
          ></iframe>
        </div>
        <div className="mx-4 mt-10">
          <div className="bg-black text-white p-2">
            <h2>LOTUS STORY | THE BEST VIETNAMESE RESTAURANT IN NSW</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5222.648871712024!2d151.19186162125496!3d-33.88253258472471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2901110d29%3A0xf76ccd0f0d3717ad!2sLotus%20Story%20Broadway!5e0!3m2!1sen!2sjp!4v1712467241824!5m2!1sen!2sjp"
            width="100%" // 幅を100%に設定
            height="300" // 固定値のまま
            frameBorder="0"
            style={{ border: 0 }}
            // allowFullScreen=""
            aria-hidden="false"
            // tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
