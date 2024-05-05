"use client";
import React, { useState } from "react";

import { Table, TableBody, TableCell, TableRow } from "@tremor/react";
import { breakfast_menu, lunch_menu, coffee_menu } from "../../src/menuData";

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
    <div className="w-full">
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
                      <p className="text-gray-500 whitespace-normal">
                        {menuItem.description}
                      </p>
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
