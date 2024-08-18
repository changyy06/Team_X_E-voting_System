"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// CreateWalletModal component should be here

export default function VotingSystem() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(1); // Initial token balance is set to 1

  console.log("Initial token balance:", tokenBalance);

  const candidates = [
    { id: 1, name: "Yudhishthra Sugumaran", party: "Warisan National", image: "https://media.licdn.com/dms/image/v2/D5603AQGcQqYV6XXsLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670626596172?e=1729123200&v=beta&t=GSyb5dzb6PkQLyGgj_QKjBptjODxWALoyth-JCT1HCs" },
    { id: 2, name: "Benjamin Tan", party: "Pakatan Hadapan", image: "https://media.licdn.com/dms/image/v2/D5603AQH9_tUT2IQHLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706708692793?e=1729123200&v=beta&t=BXJz_ku00Xz5ZWmsVLs-U7VYwiNp_GUGgbjCqZIv0-s" },
    { id: 3, name: "Lee Zii Jia", party: "Perikanan National", image: "https://web14.bernama.com/storage/photos/be065ed7ecb8f357df7101cf49ff198766b1cb5e38a81" },
    { id: 4, name: "Yusuf Dikeç", party: "Kuda", image: "https://vcdn1-english.vnecdn.net/2024/08/02/coolturk-jpeg-1722561518-6509-1722561550.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Xpzdy7KYiY2ji1JHSpD3Xg" },
  ];

  const handleRadioChange = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleSubmit = () => {
    if (!selectedCandidate) {
      toast.error("Please select a candidate to vote", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    if (tokenBalance <= 0) {
      toast.error("Insufficient balance to vote", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Decrease token balance by 1 upon submitting the vote
      setTokenBalance((prevBalance) => {
        const newBalance = prevBalance - 1;
        console.log("Token balance after voting:", newBalance);
        return newBalance;
      });

      toast.success("Vote submitted successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setSelectedCandidate(null);
      setIsSubmitting(false);
    }, 2000); // Simulating an API call delay
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://s.yimg.com/ny/api/res/1.2/oOiQyaE8aHuOu3LssdxqXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE2ODA7aD0xMDA2O2NmPXdlYnA-/https://media.zenfs.com/en/mmail.com.my/d2f68d526cb48b8913f81dc197812701')` }}>
      {/* Token Balance Display */}
      <div className="absolute top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2">
        <p className="text-gray-800 font-semibold">Token Balance: {tokenBalance}</p>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-black bg-opacity-60">
        {/* Logo */}
        <a
          href="https://www.malaysiamadani.com" // Replace with the desired URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security measure for links opened in a new tab
        >
          <img
            src="https://seeklogo.com/images/M/malaysia-madani-logo-9976D67E5F-seeklogo.com.png"
            alt="Malaysia Madani Logo"
            className="w-auto h-40 mb-6 object-contain cursor-pointer"
          />
        </a>

        <h1 className="font-bold text-2xl uppercase text-center text-white">E-Voting System</h1>
        <p className="text-sm text-gray-300 lowercase font-normal mt-4">"Vote wisely for a better future"</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {candidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              className="border rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-48">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{candidate.name}</h3>
                <p className="text-gray-300">{candidate.party}</p>
                <div className="mt-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                      name="candidate"
                      checked={selectedCandidate === candidate.id}
                      onChange={() => handleRadioChange(candidate.id)}
                    />
                    <span className="text-gray-300">Select</span>
                  </label>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className={`mt-8 px-6 py-2 border rounded-md ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Vote"}
        </button>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>

      {/* Social Media Icons */}
      <footer className="flex justify-center space-x-4 p-4 bg-gray-200">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/MalaysiaMADANI.my/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://x.com/malaysiamadani?mx=2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
      </footer>
    </div>
  );
}
