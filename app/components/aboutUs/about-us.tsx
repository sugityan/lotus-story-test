"use client";
import React from "react";

const shop_info = [
  {
    name: "LOTUS STORY SYDNEY OLYMPIC PARK",
    hours: "Mon - Fri: 7:00 AM - 3:00 PM. Sat - Sun: Closed.",
    location: "2 Dawn Fraser Ave, Sydney Olympic Park, NSW Australia, 2127.",
    phone: "0432 027 822",
  },
  {
    name: "LOTUS STORY ULTIMO",
    hours: "Mon - Fri: 7:00 AM - 3:00 PM. Sat - Sun: Closed.",
    location: "Location: 1-3 Smail Street Ultimo, NSW, Australia, 2007.",
    phone: "0431 106 675",
  },
];

interface ShopInfoProps {
  name: string;
  hours: string;
  location: string;
  phone: string;
}

function ShopInfo({ name, hours, location, phone }: ShopInfoProps) {
  return (
    <div className="lotus-store">
      <h2 className="text-center font-bold">{name}</h2>
      <ul className="list-disc ml-4">
        <li>
          <p className="font-bold">Business Hours:</p>
          <p>{hours}</p>
        </li>
        <li>
          <p className="font-bold">Location:</p>
          <p>{location}</p>
        </li>
        <li>
          <p className="font-bold">Call Us:</p>
          <p>{phone}</p>
        </li>
      </ul>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="lotus-stores-container my-10 flex justify-between">
      {shop_info.map((shopInfoItem, index) => (
        <ShopInfo key={index} {...shopInfoItem} />
      ))}
    </div>
  );
}
