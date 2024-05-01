"use client";
import React, { useState } from "react";

import { Table, TableBody, TableCell, TableRow } from "@tremor/react";

const breakfast_menu = [
  {
    label: "BREAK FAST",
    menus: [
      {
        name: "TOAST",
        description: "Country white, dark wheat, Kalamata olive, Raisin Walnut",
        price: "5",
      },
      {
        name: "BACON & EGG PRESS",
        description: "Pendle Hill bacon double egg spinach chilli jam",
        price: "12",
        sub_price: "",
      },
      {
        name: "AVOCADO SMASH",
        description:
          "Yarra Feta citrus, roasted peanut, coriander, poached egg",
        price: "13",
        sub_price: "",
      },
      {
        name: "THIS IS ME BREKKIE",
        description:
          "Crispy bacon, poached egg, potato rosti, avocado, butter mushrooms, sourdough",
        price: "22",
        sub_price: "",
      },
      {
        name: "PARMESAN SCRAMBLED EGGS",
        description: "Truffle oil eggs shaved parmesan, dark sourdough",
        price: "16",
        sub_price: "",
      },
      {
        name: "CORN FRITTERS",
        description:
          "Crispy bacon, avocado, baby spinach, turmeric yoghurt, chilli jam",
        price: "21",
        sub_price: "",
      },
      {
        name: "EGGS ON TOAST",
        description: "Fried, scrambled, Poached",
        price: "10",
        sub_price: "",
      },
      {
        name: "EXTRAS",
        description:
          "Pendle Hill Bacon, sauntéed spinach, butter mushrooms, potato rosti, two eggs, avocado",
        price: "4",
        sub_price: "",
      },
    ],
  },
];

const lunch_menu = [
  {
    label: "SMALL THINGS",
    menus: [
      {
        name: "CRISPY PORK BELLY RICE PAPER ROLL",
        description: "Vermicelli Cucumber Pickled Carrot Peanut Sauce (2pc)",
        price: "8",
        sub_price: "",
      },
      {
        name: "LEMONGRASS BEEF RICE PAPER ROLLS W CUCUMBER",
        description: "Minted Iceberg Pickled Carrot Peanut Sauce (2pc)",
        price: "7.5",
      },
      {
        name: "SEASONAL VEGETABLES & PUFF TOFU AVOCADO RICE PAPER ROLL (VG) (2PC)",
        description: "",
        price: "7.5",
      },
      {
        name: "HERBY CHICKEN SESAME RICE PAPER ROLL W CUCUMBER PICICLED CARROT MAYO (2PC)",
        description: "",
        price: "7.5",
      },
      {
        name: "HA DOAN’ S CHICKEN SPRING ROLLS NUOC CHAM (3PC)",
        description: "",
        price: "8",
      },
      {
        name: "ROASTED DUCK RICE PAPER ROLL CUCUMBER VERMICELLI (2PC)",
        description: "",
        price: "9",
      },
    ],
  },
  {
    label: "VERMICELLI/SALADS",
    menus: [
      {
        name: "LOTUS STORY SALAD SHAVED CABBAGE",
        description:
          "Pickled Radish Peanuts Crispy Onion Aromatic Herbs Nuoc Cham – Crispy Tofu (GF) – Poached Chicken",
        price: "15",
      },
      {
        name: "GRILLED BEEF AND SPRING ROLL VERMICELLI MINTED",
        description: "Iceberg Picicled Carrots Peanuts Scallions",
        price: "15",
      },
      {
        name: "HERBY CHICON SUGARCANE PRAWN VERMICELLI MINTED",
        description: "Iceberg Picjcled Carrot Peanuts Scallions",
        price: "15",
      },
      {
        name: "CRISPY TOFU & SEASONAL AVOCADO",
        description: "Bean Sprouts Peanuts Sweet Soy Sesame Dressing (Vg)",
        price: "15",
      },
      {
        name: "HANOI TURMERIC FISH AND AVOCADO MINTED",
        description: "Iceberg Picjcled Carrots Peanuts Scallions",
        price: "17",
      },
      {
        name: "ROASTED PORK BELLY VERMICELLI AROMATIC HERBS SCALLIONS PEANUTS",
        description: "",
        price: "17",
      },
      {
        name: "FRESH BAKED BAGUETTES",
        description:
          "All Served With Fresh Mix Leaves Pickled Carrots Home Made Butter Peanut Sauce (P) Or House Soy (S) Original/Multigrain Bread, Chilli Or Coriander Optional",
        price: "11",
      },
      // 他のメニュー項目を追加
    ],
  },
  {
    label: "NOODLES",
    menus: [
      {
        name: "HA DOAN’S 28 HOUR “PHO” BROTH – SLICED GRAIN FED BEEF I POACHED CHICKEN NOODLES AROMATIC HERBS (GF)",
        description: "",
        price: "15 / 17",
      },
      {
        name: "COMBINATION – BRISKET, SLICED BEEF, BEEF BALLS",
        description: "",
        price: "19",
      },
      {
        name: "LOTUS STORY CHICKEN LAKSA RICE VERMICELLI & EGG NOODLE PUFF TOFU HINT AND FRIED SHALLOTS",
        description: "",
        price: "15",
      },
      {
        name: "SPICY XO NOODLES CHICKEN, FRIED EGG, SEASONAL VEG CABBAGE HOUSE SOY EGG NOODLE HOUSE CHILLI OIL",
        description: "",
        price: "18",
      },
      {
        name: "SESAME BEEF HOFUN, GAI LAN, CHIVES, BEANSPOUTS, HOUSE DARK SOY",
        description: "",
        price: "20",
      },
      {
        name: "LOTUS STORY SINGAPORE NOODLES HOUSE CURRY PASTE",
        description: "Seasonal Vegetables Thin Rice Noodles Puff Tofu/Chicken",
        price: "17",
      },
    ],
  },
  {
    label: "Rice",
    menus: [
      {
        name: "HA DOAN’S 28 HOUR “PHO” BROTH – SLICED GRAIN FED BEEF I POACHED CHICKEN NOODLES AROMATIC HERBS (GF)",
        description: "",
        price: "15 / 17",
      },
      {
        name: "COMBINATION – BRISKET, SLICED BEEF, BEEF BALLS",
        description: "",
        price: "19",
      },
      {
        name: "LOTUS STORY CHICKEN LAKSA RICE VERMICELLI & EGG NOODLE PUFF TOFU HINT AND FRIED SHALLOTS",
        description: "",
        price: "15",
      },
      {
        name: "SPICY XO NOODLES CHICKEN, FRIED EGG, SEASONAL VEG CABBAGE HOUSE SOY EGG NOODLE HOUSE CHILLI OIL",
        description: "",
        price: "18",
      },
      {
        name: "SESAME BEEF HOFUN, GAI LAN, CHIVES, BEANSPOUTS, HOUSE DARK SOY",
        description: "",
        price: "20",
      },
      {
        name: "LOTUS STORY SINGAPORE NOODLES HOUSE CURRY PASTE",
        description: "Seasonal Vegetables Thin Rice Noodles Puff Tofu/Chicken",
        price: "17",
      },
    ],
  },
];

const coffee_menu = [
  {
    label: "COFFEE",
    menus: [
      {
        name: "COFFEE",
        description: "Extras: Shot / Syrup / Decaf / Soy",
        price: "4 / 4.5",
        sub_price: "0.5",
      },
      {
        name: "TEA",
        description: "English Breakfast / Peppermint / Earl Grey / Jap Green",
        price: "4",
      },
      {
        name: "HOME MADE LEMONADE W MINT",
        price: "6",
      },
      {
        name: "VIET ICED COFFEE",
        price: "6",
      },
      {
        name: "SOFT DRINK",
        price: "4.5",
      },
      {
        name: "BEERS: ASAHI / HEINEKEN",
        price: "8",
      },
      {
        name: "WINE GLASS",
        description: "HOUSE WHITE / RED",
        price: "8 / 10",
      },
      {
        name: "WINE BOTTLE",
        description: "HOUSE WHITE / RED",
        price: "38 / 48",
      },
    ],
  },
];

export function MenuTable() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "BREAKFAST",
      Menu: breakfast_menu,
    },
    {
      label: "LUNCH",
      Menu: lunch_menu,
    },
    {
      label: "COFFEE & DRINKS",
      Menu: coffee_menu,
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={index === activeTab ? "tab active" : "tab"}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-xl mt-5 text-center">MONDAY – FRIDAY</h2>
      <h2 className="text-xl mb-5 text-center">07:00 AM – 03:00 PM</h2>
      <h2 className="text-xl text-center">
        We are open dinner for Special Event
      </h2>
      <div>
        {tabs[activeTab].Menu.map((menuGroup, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="text-center text-xl font-extrabold mt-5">
              {menuGroup.label}
            </h4>
            <Table className="mt-5 bordered-table">
              <TableBody>
                {menuGroup.menus.map((menuItem, itemIndex) => (
                  <TableRow key={itemIndex}>
                    <TableCell>
                      <h2 className="font-bold">{menuItem.name}</h2>
                      <p className="text-gray-500">{menuItem.description}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold">{menuItem.price}</p>
                      <p className="text-gray-500">{menuItem.sub_price}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}
