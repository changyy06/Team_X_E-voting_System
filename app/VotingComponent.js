import React, { useState } from 'react';
import ConfirmVoteModal from './ConfirmVoteModal';

const VotingComponent = () => {
  const [vote, setVote] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleVoteSubmit = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmVote = () => {
    // Submit the vote
    console.log('Vote submitted:', vote);
    setShowConfirmModal(false);
  };

  return (
    <div>
      {/* Your voting interface here */}
      <button onClick={handleVoteSubmit}>Submit Vote</button>

      {showConfirmModal && (
        <ConfirmVoteModal
          vote={vote}
          onConfirm={handleConfirmVote}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}
    </div>
  );
};

export default VotingComponent;
