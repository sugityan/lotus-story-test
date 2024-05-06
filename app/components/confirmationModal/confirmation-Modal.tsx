"use client";
import { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

interface Props {
  property: string;
}

const style = {
  width: "80vw",
  height: "50vh",
  position: "absolute",
  top: "30%",
  left: "10%",
  border: "2px solid #000",
  boxShadow: "md",
  padding: 4,
  overflowY: "scroll",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  animation:
    "text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  "@keyframes text-pop-up-top": {
    "0%": {
      transform: "translateY(0)",
      transformOrigin: "50% 50%",
      textShadow: "none",
    },
    to: {
      transform: "translateY(-50px)",
      transformOrigin: "50% 50%",
    },
  },
};

export default function ConfirmationModal({
  isOpen,
  setIsOpen,
  name,
  phoneNum,
  email,
  people,
  branch,
  selectedDate,
  selectedTime,
  option,
  orders,
  setName,
  setPhoneNum,
  setEmail,
  setPeople,
  setBranch,
  setSelectedDate,
  setSelectedTime,
  setOption,
  setIsSucModalOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  name: string;
  email: string;
  phoneNum: string;
  people: string;
  branch: string;
  selectedDate: any;
  selectedTime: any;
  option: string;
  orders: { name: string; count: number; option: string }[];
  setName: (value: string) => void;
  setPhoneNum: (value: string) => void;
  setEmail: (value: string) => void;
  setPeople: (value: string) => void;
  setBranch: (value: string) => void;
  setSelectedDate: (value: any) => void;
  setSelectedTime: (value: any) => void;
  setOption: (value: string) => void;
  setIsSucModalOpen: (value: boolean) => void;
}) {
  const DisplayProperty: React.FC<Props> = ({ property }) => {
    return (
      <div className="border border-gray-300 h-10 w-full p-2 rounded-md my-1 pointer-events-none">
        {property}
      </div>
    );
  };

  async function sendEmail() {
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          phoneNum,
          email,
          people,
          branch,
          selectedDate,
          selectedTime,
          orders,
          option,
        }),
      });
      setName("");
      setPhoneNum("");
      setEmail("");
      setPeople("");
      setBranch("");
      setSelectedDate("");
      setSelectedTime("");
      setOption("");
      setIsSucModalOpen(true);
    } catch (e) {
      console.error(e);
    }
  }

  const handleClose = () => {
    // ボタンがクリックされたときに open ステートを false に設定する
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="font-bold text-center pb-2 border-b mb-2 overflow-y-scroll">
            <div className="">
              <div className="">
                <div className="text-center">
                  <h2 className="text-3xl bg-gray-900 font-extrabold text-white">
                    Reservation
                  </h2>
                </div>
                {/* Full Name */}
                <div className="input-form">
                  <DisplayProperty property={name} />
                </div>
                {/* Phone Number */}
                <div className="input-form">
                  <DisplayProperty property={phoneNum} />
                </div>
                {/* Email */}
                <div>
                  <DisplayProperty property={email} />
                </div>
                {/* People */}
                <div>
                  <DisplayProperty property={people.toString()} />
                </div>
                {/* Branch */}
                <div>
                  <DisplayProperty property={branch.toString()} />
                </div>

                {/* Date & Time */}
                <div className="flex flex-col">
                  {/* Date */}
                  <h2>Booking Date:</h2>
                  <DisplayProperty property={selectedDate} />
                </div>
                {/* Time */}
                <div className="flex flex-col">
                  <h2>Time:</h2>
                  <DisplayProperty property={selectedTime} />
                </div>
                <div>
                  <h2>Orders</h2>
                </div>
                {orders?.map((order, index) => (
                  <div key={index}>
                    <p>Name: {order.name}</p>
                    <p>Count: {order.count}</p>
                    <p>Option: {order.option}</p>
                  </div>
                ))}
              </div>

              {/* Option */}
              <div>
                <DisplayProperty property={option} />
              </div>
              {/* Button */}
              <div className="mt-10">
                <button
                  onClick={sendEmail}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
