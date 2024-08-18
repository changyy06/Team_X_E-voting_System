"use client";
import React, { useState, useEffect } from "react";
import CreateWalletModal from "../CreateWalletModal";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [balance, setBalance] = useState(null);

  // Function to fetch token balance
  const fetchTokenBalance = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/token/balance`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet_address: sessionStorage.getItem("walletAddress"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch balance");
      }

      const result = await response.json();
      setBalance(result.balance); // Assuming the response has a `balance` field
    } catch (error) {
      console.error("Error fetching token balance:", error);
      setBalance(null);
    }
  };

  // Fetch balance when the component mounts
  useEffect(() => {
    if (sessionStorage.getItem("walletAddress")) {
      fetchTokenBalance();
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      const walletAddress = result.result.wallet.wallet_address;
      sessionStorage.setItem("walletAddress", walletAddress);

      if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `🦄 User created successfully! Wallet address: ${walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        }
      );
      closeModal();
      fetchTokenBalance(); // Fetch balance again after creating wallet
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <header className="w-full py-6 lg:py-4 relative border-b">
      <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">SmartUndi</h1> {/* Increased font size */}
          {sessionStorage.getItem("walletAddress") && balance !== null ? (
            <span className="text-sm text-gray-700">
              Balance: {balance} {/* Display balance */}
            </span>
          ) : null}
        </div>
        <button
          onClick={openModal}
          className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          {typeof window !== "undefined" &&
          window.sessionStorage.getItem("walletAddress") ? (
            <span className="text-sm">
              {`${window.sessionStorage
                .getItem("walletAddress")
                .slice(0, 6)}...${window.sessionStorage
                .getItem("walletAddress")
                .slice(-4)}`}
            </span>
          ) : (
            "Create Wallet"
          )}
        </button>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateWalletModal onSubmit={handleSubmit} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </header>
  );
};

export default Header;
