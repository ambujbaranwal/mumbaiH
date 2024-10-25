import React, { useState } from 'react';

const ChatButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="flex items-center">
          <img 
            src="bot.png" 
            alt="Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 object-contain rounded-full m-2" 
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-xl">chatbot</span>
        </div>
      </button>

      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1">
          How can I help you?
        </div>
      )}
    </div>
  );
};

export default ChatButton;
