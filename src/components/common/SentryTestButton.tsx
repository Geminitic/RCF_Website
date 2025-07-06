import React from 'react';

const SentryTestButton: React.FC = () => (
  <button
    type="button"
    onClick={() => {
      throw new Error('This is your first error!');
    }}
  >
    Break the world
  </button>
);

export default SentryTestButton;
