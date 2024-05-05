"use client";
import React from "react";
import { shop_info } from "../../src/shopInfo";

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
    <div className="lotus-stores-container flex justify-between">
      {shop_info.map((shopInfoItem, index) => (
        <ShopInfo key={index} {...shopInfoItem} />
      ))}
    </div>
  );
}
