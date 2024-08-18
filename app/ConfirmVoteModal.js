import React from 'react';

const ConfirmVoteModal = ({ vote, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Vote</h2>
        <p className="mb-4">Are you sure you want to submit this vote?</p>
        <div className="mb-4">
          <strong>Your choice: </strong> {vote}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Confirm Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVoteModal;
