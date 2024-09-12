import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div
        className='spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full'
        role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
