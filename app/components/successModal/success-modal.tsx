"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface Props {
  property: string;
}

export default function SuccessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const DisplayProperty: React.FC<Props> = ({ property }) => {
    return (
      <div className="border border-gray-300 h-10 w-full p-2 rounded-md my-1 pointer-events-none">
        {property}
      </div>
    );
  };

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
        <Box
          sx={{
            width: "80vw",
            height: 200,
            position: "absolute",
            top: "40%",
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
          }}
        >
          <div className="font-bold text-center overflow-y-scroll w-full">
            <h2 className="text-3xl bg-gray-900 font-extrabold text-white">
              Reservation Success
            </h2>
            <button
              onClick={handleClose}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
