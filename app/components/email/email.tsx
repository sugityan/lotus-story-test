"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import ConfirmationModal from "../confirmationModal/confirmation-Modal";

export function EmailForm({
  isConfirm,
  orders,
}: {
  isConfirm: boolean;
  orders: { name: string; count: number; option: string }[];
}) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [people, setPeople] = useState("");
  const [peopleError, setPeopleError] = useState("");
  const [branch, setBranch] = useState("");
  const [branchError, setBranchError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [option, setOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeChange = (time: any) => {
    setSelectedTime(time.target.value);
  };

  const handleDateChange = (date: any) => {
    console.log(date.target.value);
    setSelectedDate(date.target.value);
  };

  async function handleBtn() {
    // Show error message

    if (name == "") {
      setNameError("There is a field that the sender must fill in");
    } else {
      setNameError("");
    }

    if (!phoneNum.match(/^\d*$/) || phoneNum == "") {
      setPhoneNumError("Please enter a valid phone number (numbers only)");
    } else {
      setPhoneNumError(""); // Clear error message
    }

    if (email == "") {
      setEmailError("There is a field that the sender must fill in");
    } else {
      setEmailError("");
    }

    if (people == "") {
      setPeopleError("There is a field that the sender must fill in");
    } else {
      setPeopleError("");
    }

    if (branch == "") {
      setBranchError("There is a field that the sender must fill in");
    } else {
      setBranchError("");
    }

    if (
      name != "" &&
      phoneNum.match(/^\d*$/) &&
      phoneNum != "" &&
      email != "" &&
      people != "" &&
      branch != ""
    ) {
      console.log("ok");
      if (isConfirm) {
        setIsOpen(true);
        console.log("open confirm");
      } else {
        console.log("Send Email");
      }
    } else {
      console.log("Something wrong");
    }
  }

  return (
    <div className="py-12">
      <ConfirmationModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        phoneNum={phoneNum}
        email={email}
        people={1}
        branch={branch}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        option={option}
        orders={orders}
      />

      <div className="">
        <div className="text-center">
          <h2 className="text-3xl bg-gray-900 font-extrabold text-white">
            Reservation
          </h2>
        </div>
        <div className="py-6">
          <p>
            We would like to serve you as soon as possible! Fill out the form
            below and we will be in touch.
          </p>
        </div>
        {/* Full Name */}
        <div className="input-form">
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border border-gray-500 focus:outline-none"
            placeholder="Full Name*"
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        {/* Phone Number */}
        <div className="input-form">
          <input
            required
            type="tel"
            pattern="[0-9]*" // Check pattern is phone number
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border border-gray-500 focus:outline-none"
            placeholder="Phone Number*"
          />
          {phoneNumError && <p className="text-red-500">{phoneNumError}</p>}
        </div>
        {/* Email */}
        <div>
          <input
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border border-gray-500 focus:outline-none"
            placeholder="Email*"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        {/* People */}
        <div>
          <input
            required
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value.toString())}
            className="mt-1 p-2 w-full rounded-md border border-gray-500 focus:outline-none"
            placeholder="Number of People*"
          />
          {peopleError && <p className="text-red-500">{peopleError}</p>}
        </div>
        {/* Branch */}
        <div>
          <select
            className="border border-gray-500 my-3 rounded-md w-full mx-auto"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Branch</option>
            <option value="Lotus Story Sydney Olympic Park">
              Lotus Story Sydney Olympic Park: 2 Dawn Fraser Ave, Sydney Olympic
              Park, NSW, Australia, 2127
            </option>
            <option value="Lotus Story Ultimo">
              Lotus Story Ultimo: 1-3 Smail Street, Ultimo, NSW, Australia, 2007
            </option>
          </select>
          {branchError && <p className="text-red-500">{branchError}</p>}
        </div>

        {/* Date & Time */}
        <div className="flex flex-row">
          {/* Date */}
          <div className="w-2/3 mr-5">
            <h2>Booking Date:</h2>
            {/* <div className="border border-gray-500 my-3 rounded-md">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="Please select date"
              />
            </div> */}
            {/* Date Input */}
            <div className="input-form w-full h-10">
              <input
                required
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="mt-1 p-2 w-full rounded-md border border-gray-500 focus:outline-none"
                placeholder="Select Date*"
              />
            </div>
          </div>
          {/* Time */}
          <div className="w-2/3">
            <h2>Time:</h2>
            <div className="border border-gray-500  h-11 my-1 rounded-md flex justify-center items-center">
              <select
                value={selectedTime}
                onChange={handleTimeChange}
                className="w-full "
              >
                <option value="">Time</option>
                {[...Array(8)].map((_, hourIndex) => {
                  const hour = hourIndex + 7;
                  return (
                    <React.Fragment key={hour}>
                      {[0, 15, 30, 45].map((minute, minuteIndex) => {
                        return (
                          <option key={minuteIndex} value={`${hour}:${minute}`}>
                            {hour.toString().padStart(2, "0")}:
                            {minute.toString().padStart(2, "0")}
                          </option>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Option */}
        <div>
          <input
            required
            type="text"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="mt-1 p-2 w-full h-20 mt-4 rounded-md border border-gray-500 focus:outline-none "
            placeholder="Option"
          />
        </div>
        {/* Button */}
        <div className="mt-10">
          <button
            onClick={handleBtn}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isConfirm ? "Confirm" : "Send Email"}
          </button>
        </div>
      </div>
    </div>
  );
}
