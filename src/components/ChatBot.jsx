import { useState, useEffect } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Predefined responses for common queries
  const responses = {
    facilities: {
      keywords: ['facility', 'facilities', 'amenities', 'available'],
      response: `Our hostel offers the following facilities:
• High-speed Wi-Fi throughout the building
• 24/7  water supply
• Modern gym and fitness center
• Common room with TV and indoor games
• Laundry services
• Reading room and study area
• Medical facility with first aid
• 24-hour security`
    },
    rooms: {
      keywords: ['room', 'rooms', 'accommodation', 'stay', 'bed'],
      response: `Room Information:
• Well-furnished rooms with attached bathrooms
• Options for 2 and 3 seater rooms
• Each room equipped with:
  - Study tables and chairs
  - Individual cupboards
  - Comfortable beds with mattresses
  - Ceiling fans
  - LED lights
• Regular cleaning service`
    },
    mess: {
      keywords: ['mess', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'canteen'],
      response: `Mess Timings:
• Breakfast: 8:00 AM - 9:00 AM
• Lunch: 12:300 PM - 1:30 PM
• Evening Tea: 4:45 PM - 5:15 PM
• Dinner: 8:00 PM - 9:00 PM

Note: Menu changes weekly and special meals on festivals`
    },
    rules: {
      keywords: ['rule', 'rules', 'regulation', 'regulations', 'timing', 'time'],
      response: `Important Hostel Rules:
• Entry/Exit timing: 6:30 AM - 7:00 PM
• Visitors allowed only in visiting area
• Maintain silence during study hours
• Keep rooms and common areas clean
• No cooking in rooms
• Report any maintenance issues to warden
• Follow mess timings strictly`
    },
    fees: {
      keywords: ['fee', 'fees', 'payment', 'cost', 'charges', 'amount'],
      response: `Fee Structure:
• Room charges vary by type (2/3 seater)
• Mess fees paid monthly
• Security deposit required
• Payment modes: Online/DD/Cash
Contact administration office for current rates.`
    },
    greetings: {
      keywords: ['hi', 'hello', 'hey', 'hii', 'morning', 'evening'],
      response: "Hello! How can I assist you with hostel-related information today?"
    }
  };

  const findResponse = (message) => {
    const lowercaseMsg = message.toLowerCase();
    
    // Check each category for matching keywords
    for (const category of Object.values(responses)) {
      if (category.keywords.some(keyword => lowercaseMsg.includes(keyword))) {
        return category.response;
      }
    }
    
    // Default response if no keywords match
    return `I understand you're asking about "${message}". For specific information, please try asking about:
• Hostel facilities
• Room details
• Mess timings
• Rules and regulations
• Fee structure

Or visit the hostel administration office for more details.`;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      role: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate response delay for natural feel
    setTimeout(() => {
      const botResponse = {
        role: 'assistant',
        content: findResponse(inputMessage)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hello! I am your hostel assistant. How can I help you today? You can ask me about:\n• Hostel facilities\n• Room information\n• Mess timings\n• Rules and regulations\n• Fee structure'
      }
    ]);
  }, []);

  return (
    <>
      {/* Chat Icon */}
      {!isChatOpen && (
        <button 
          onClick={toggleChat}
          className="fixed bottom-4 right-4 w-14 h-14 bg-red-500 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8 text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
              <h3 className="font-semibold">Hostel Assistant</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-red-200 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none whitespace-pre-line'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-red-500 text-black placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 rounded-lg bg-red-600 text-white font-medium ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                }`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
} 