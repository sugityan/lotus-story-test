"use client";
import React, { useState } from "react";
import MenuModal from "../components/menuModal/menu-modal";
// import ConfirmationModal from "../components/confirmationModal/page";
import { EmailForm } from "../components/email/email";

import { breakfast_menu, lunch_menu, coffee_menu } from "../src/menuData";

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
    <div className="lg: m-15 md: m-10">
      {/* <ConfirmationModal open={open} name={name} phoneNum={phoneNum} email={email} people={people} branch={branch} selectedDate={selectedDate} selectedTime={selectedTime} option={option} orders={orders}/> */}

      <div className="flex justify-center ">
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
      <div className="w-full">
        {tabs[activeTab].Menu.map((menuGroup, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="text-3xl font-extrabold mt-10">
              {menuGroup?.label}
            </h4>
            <div className="flex flex-wrap ">
              {menuGroup?.menus.map((menuItem, itemIndex) => (
                <div
                  key={itemIndex}
                  className="w-full md:w-1/2 lg:w-1/3 px-2 mt-5"
                >
                  <MenuModal
                    name={menuItem.name}
                    description={menuItem.description!}
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
      <div className="mt-10"></div>
      <EmailForm orders={orders} isConfirm={true} />
    </div>
  );
}
