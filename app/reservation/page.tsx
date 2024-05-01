"use client";
import React, { useState } from "react";
import MenuModal from "../components/menuModal/menu-modal";
// import ConfirmationModal from "../components/confirmationModal/page";
import { EmailForm } from "../components/email/email";

const breakfast_menu = [
  {
    label: "BREAK FAST",
    menus: [
      {
        name: "TOAST",
        description: "Country white, dark wheat, Kalamata olive, Raisin Walnut",
        price: "5",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/toast.jpeg",
      },
      {
        name: "BACON & EGG PRESS",
        description: "Pendle Hill bacon double egg spinach chilli jam",
        price: "12",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "",
      },
      {
        name: "AVOCADO SMASH",
        description:
          "Yarra Feta citrus, roasted peanut, coriander, poached egg",
        price: "13",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/avoTomatoToast.jpeg",
      },
      {
        name: "THIS IS ME BREKKIE",
        description:
          "Crispy bacon, poached egg, potato rosti, avocado, butter mushrooms, sourdough",
        price: "22",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/thisIsBreakie.jpeg",
      },
      {
        name: "PARMESAN SCRAMBLED EGGS",
        description: "Truffle oil eggs shaved parmesan, dark sourdough",
        price: "16",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "",
      },
      {
        name: "CORN FRITTERS",
        description:
          "Crispy bacon, avocado, baby spinach, turmeric yoghurt, chilli jam",
        price: "21",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "",
      },
      {
        name: "EGGS ON TOAST",
        description: "Fried, scrambled, Poached",
        price: "10",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "",
      },
      {
        name: "EXTRAS",
        description:
          "Pendle Hill Bacon, sauntéed spinach, butter mushrooms, potato rosti, two eggs, avocado",
        price: "4",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "",
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
        count: 0,
        option: "",
        imgSrc: "",
      },
      {
        name: "LEMONGRASS BEEF RICE PAPER ROLLS W CUCUMBER",
        description: "Minted Iceberg Pickled Carrot Peanut Sauce (2pc)",
        price: "7.5",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "SEASONAL VEGETABLES & PUFF TOFU AVOCADO RICE PAPER ROLL (VG) (2PC)",
        description: "",
        price: "7.5",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "HERBY CHICKEN SESAME RICE PAPER ROLL W CUCUMBER PICICLED CARROT MAYO (2PC)",
        description: "",
        price: "7.5",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "HA DOAN’ S CHICKEN SPRING ROLLS NUOC CHAM (3PC)",
        description: "",
        price: "8",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "ROASTED DUCK RICE PAPER ROLL CUCUMBER VERMICELLI (2PC)",
        description: "",
        price: "9",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
    ],
  },
  ,
  {
    label: "VERMICELLI/SALADS",
    menus: [
      {
        name: "LOTUS STORY SALAD SHAVED CABBAGE",
        description:
          "Pickled Radish Peanuts Crispy Onion Aromatic Herbs Nuoc Cham – Crispy Tofu (GF) – Poached Chicken",
        price: "15",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "GRILLED BEEF AND SPRING ROLL VERMICELLI MINTED",
        description: "Iceberg Picicled Carrots Peanuts Scallions",
        price: "15",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "HERBY CHICON SUGARCANE PRAWN VERMICELLI MINTED",
        description: "Iceberg Picjcled Carrot Peanuts Scallions",
        price: "15",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "CRISPY TOFU & SEASONAL AVOCADO",
        description: "Bean Sprouts Peanuts Sweet Soy Sesame Dressing (Vg)",
        price: "15",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "HANOI TURMERIC FISH AND AVOCADO MINTED",
        description: "Iceberg Picjcled Carrots Peanuts Scallions",
        price: "17",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "ROASTED PORK BELLY VERMICELLI AROMATIC HERBS SCALLIONS PEANUTS",
        description: "",
        price: "17",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "FRESH BAKED BAGUETTES",
        description:
          "All Served With Fresh Mix Leaves Pickled Carrots Home Made Butter Peanut Sauce (P) Or House Soy (S) Original/Multigrain Bread, Chilli Or Coriander Optional",
        price: "11",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
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
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "TEA",
        description: "English Breakfast / Peppermint / Earl Grey / Jap Green",
        price: "4",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "HOME MADE LEMONADE W MINT",
        description: "",
        price: "6",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "VIET ICED COFFEE",
        price: "6",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "SOFT DRINK",
        price: "4.5",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "BEERS: ASAHI / HEINEKEN",
        price: "8",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "WINE GLASS",
        description: "HOUSE WHITE / RED",
        price: "8 / 10",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
      {
        name: "WINE BOTTLE",
        description: "HOUSE WHITE / RED",
        price: "38 / 48",
        sub_price: "",
        count: 0,
        option: "",
        imgSrc: "/menus/beefRiceRoll.jpeg",
      },
    ],
  },
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  sub_price: string;
  count: number;
  option: string;
}

interface MenuCategory {
  label: string;
  menus: MenuItem[];
}

interface Tab {
  label: string;
  Menu: MenuCategory[];
}

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [breakfastMenu, setBreakfastMenu] = useState(breakfast_menu);
  const [lunchMenu, setLunchMenu] = useState(lunch_menu);
  const [coffeeMenu, setCoffeeMenu] = useState(coffee_menu);

  const [orders, setOrders] = useState<
    { name: string; count: number; option: string }[]
  >([]);

  async function handleConfirmation() {
    // if (name.length != 0 && phoneNum.length != 0 && email.length != 0) {
    //   try {
    //     await fetch("/api/email", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name,
    //         phoneNum,
    //         email,
    //         selectedOption,
    //         orders,
    //       }),
    //     });
    //     setName("");
    //     setPhoneNum("");
    //     setEmail("");
    //     setPeople("");
    //     setSelectedOption("");
    //   } catch (e) {
    //     console.error(e);
    //   }
    // } else {
    //   console.log("Input is not filled");
    // }
  }

  const tabs = [
    {
      label: "BREAKFAST",
      Menu: breakfastMenu,
    },
    {
      label: "LUNCH",
      Menu: lunchMenu,
    },
    {
      label: "COFFEE & DRINKS",
      Menu: coffeeMenu,
    },
  ];

  const handleSubmit = (
    activeTab: number,
    menuItem: any,
    categoryItem: string,
    count: number,
    option: string
  ) => {
    if (count > 0) {
      if (activeTab == 0) {
        setBreakfastMenu((prevMenu) => {
          // breakfast_menuのコピーを作成
          const updatedMenu = [...prevMenu];

          // 更新されたアイテムのインデックスを見つける
          const itemIndex = updatedMenu.findIndex(
            (category) => category.label === categoryItem
          );
          const menuItemIndex = updatedMenu[itemIndex].menus.findIndex(
            (item) => item.name === menuItem.name
          );

          // 更新されたアイテムのコピーを作成し、価格を更新
          const updatedMenuItem = {
            ...updatedMenu[itemIndex].menus[menuItemIndex],
            count: count, // 新しい価格を文字列に変換してセット
            option: option,
          };

          // 更新されたアイテムを更新されたアイテムのコピーに置き換える
          updatedMenu[itemIndex].menus[menuItemIndex] = updatedMenuItem;

          // 更新されたメニューを返す
          return updatedMenu;
        });
      } else if (activeTab == 1) {
        setLunchMenu((prevMenu) => {
          // breakfast_menuのコピーを作成
          const updatedMenu = [...prevMenu];

          // 更新されたアイテムのインデックスを見つける
          const itemIndex = updatedMenu.findIndex(
            (category) => category!.label === categoryItem
          );
          const menuItemIndex = updatedMenu[itemIndex]?.menus.findIndex(
            (item) => item.name === menuItem.name
          );

          // 更新されたアイテムのコピーを作成し、価格を更新
          const updatedMenuItem = {
            ...updatedMenu[itemIndex]!.menus[menuItemIndex!],
            count: count, // 新しい価格を文字列に変換してセット
            option: option,
          };

          // 更新されたアイテムを更新されたアイテムのコピーに置き換える
          updatedMenu[itemIndex]!.menus[menuItemIndex!] = updatedMenuItem;

          // 更新されたメニューを返す
          return updatedMenu;
        });
      } else if (activeTab == 2) {
        setCoffeeMenu((prevMenu) => {
          // breakfast_menuのコピーを作成
          const updatedMenu = [...prevMenu];

          // 更新されたアイテムのインデックスを見つける
          const itemIndex = updatedMenu.findIndex(
            (category) => category!.label === categoryItem
          );
          const menuItemIndex = updatedMenu[itemIndex]?.menus.findIndex(
            (item) => item.name === menuItem.name
          );

          // 更新されたアイテムのコピーを作成し、価格を更新
          const updatedMenuItem = {
            ...updatedMenu[itemIndex]!.menus[menuItemIndex!],
            count: count, // 新しい価格を文字列に変換してセット
            option: option,
          };

          // 更新されたアイテムを更新されたアイテムのコピーに置き換える
          updatedMenu[itemIndex]!.menus[menuItemIndex!] = updatedMenuItem;

          // 更新されたメニューを返す
          return updatedMenu;
        });
      }
      const newOrder = { name: menuItem.name, count: count, option: option };
      const newOrders = [...orders, newOrder];

      // ステートを更新して、新しいリストを反映
      setOrders(newOrders);
    }
  };

  return (
    <div className="m-20">
      {/* <ConfirmationModal open={open} name={name} phoneNum={phoneNum} email={email} people={people} branch={branch} selectedDate={selectedDate} selectedTime={selectedTime} option={option} orders={orders}/> */}

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
      <div>
        {tabs[activeTab].Menu.map((menuGroup, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="text-xl font-extrabold mt-5">{menuGroup?.label}</h4>
            <div className="flex flex-wrap">
              {menuGroup?.menus.map((menuItem, itemIndex) => (
                <div key={itemIndex} className="w-1/3 px-2">
                  <MenuModal
                    name={menuItem.name}
                    price={parseInt(menuItem.price)}
                    imageSrc={menuItem.imgSrc}
                    onSubmit={(data) =>
                      handleSubmit(
                        activeTab,
                        menuItem,
                        menuGroup.label,
                        data.count,
                        data.option
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <EmailForm orders={orders} isConfirm={true} />
    </div>
  );
}
