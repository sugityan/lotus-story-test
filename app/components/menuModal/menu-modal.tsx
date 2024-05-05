"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  width: 400,
};

export default function MenuModal({
  name,
  description,
  price,
  imageSrc,
  onSubmit,
}: {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  onSubmit: (value: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }

  const handleSubmit = () => {
    setOpen(false);
    var data = { name: name, option: option, count: counter };
    onSubmit(data);
    setCounter(0);
    // return console.log(data);
  };

  function truncate(text: string, maxLength: number) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="w-full border border-gray-300 rounded-lg shadow-md"
      >
        <div className="w-full h-40  flex justify-between ">
          <div className="flex flex-col justify-between items-start mr-10">
            <div className="flex flex-col items-start ">
              <h2 className="text-base font-bold overflow-hidden whitespace-normal text-black">
                {truncate(name, 8)}
              </h2>
              <p className="text-gray-500 text-left text-black">
                {truncate(description, 18)}
              </p>
            </div>
            <p className="text-sm text-black">${price}</p>
          </div>

          <div className="flex flex-col h-full">
            <img
              src={imageSrc}
              // alt="Image description"
              className="w-auto h-full"
            />
          </div>
        </div>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black shadow-md p-4 bg-white"
        >
          <div className="uppercase font-bold text-center pb-2 border-b mb-2 ">
            <p className="text-sm">{name}</p>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center"></h2>
            </div>
            <div className="my-3 flex justify-between text-sm h-32">
              <input
                type="text"
                className="border rounded p-2 py-3 w-full"
                placeholder="Option"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              />
            </div>
            <div>
              <div className="flex flex-row justify-evenly">
                <button onClick={incrementCounter}>+</button>
                <p>{counter}</p>
                <button onClick={decrementCounter}>-</button>
              </div>
              <button
                onClick={handleSubmit}
                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
