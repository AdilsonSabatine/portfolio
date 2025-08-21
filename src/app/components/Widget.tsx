"use client";

import { useState } from 'react';
import Image from 'next/image';
import Message from './Message';

const ChatbotWidget = () => {
  const ChatbotIcon = "/svgs/chatbot.svg";
  const SendIcon = "/svgs/send-icon.svg";

  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => setIsOpen(!isOpen);
  const [messages, setMessages] = useState<{ text: string; isUser?: boolean }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    // Simulate a response from the chatbot
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Resposta do chatbot", isUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-2 w-[300px] h-[400px] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/20 shadow-xl rounded-xl overflow-hidden flex flex-col">
          <div className="p-3 bg-[#4c9ae7] text-white font-semibold">
            Chatbot
          </div>
          <div className="flex-1 p-3 overflow-y-auto no-scrollbar">
            {messages.map((msg, i) => (
              <Message key={i} text={msg.text} isUser={msg.isUser} />
            ))}
          </div>
          <div className="p-3 border-t border-black/10 dark:border-white/20 flex">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border text-black mr-0 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-0 px-4 rounded-r-lg bg-[#4c9ae7] hover:bg-[#358ce3] text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Image src={SendIcon} alt="Send" width={24} height={24} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={toggleChatbot}
        className="h-14 w-14 p-2 rounded-full bg-white border border-black/10 shadow-xl flex items-center justify-center hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <Image src={ChatbotIcon} height={64} width={64} alt="Chatbot Icon" />
      </button>
    </div>
  );
};

export default ChatbotWidget;
