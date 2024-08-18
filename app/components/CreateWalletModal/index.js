import React, { useState } from "react";

const CreateWalletModal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ic, setIc] = useState("");
  const [walletName, setWalletName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, ic, walletName });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Create Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ic" className="block mb-2">
              IC
            </label>
            <input
              type="text"
              id="ic"
              value={ic}
              onChange={(e) => setIc(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="walletName" className="block mb-2">
              Wallet Name
            </label>
            <input
              type="text"
              id="walletName"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="relative mr-2 px-6 py-3 font-bold text-gray-700 bg-gradient-to-r from-gray-200 to-gray-400 rounded-md shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-gray-300 hover:to-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-gray-400 to-gray-500 opacity-50 transition-opacity hover:opacity-100"></span>
              <span className="relative z-10">Cancel</span>
            </button>
            <button
              type="submit"
              className="relative px-6 py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-md shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-blue-700 to-teal-500 opacity-50 transition-opacity hover:opacity-100"></span>
              <span className="relative z-10">Create Wallet</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWalletModal;
