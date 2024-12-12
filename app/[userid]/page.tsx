'use client';

import { useState } from 'react';
import { Lock, Send } from 'lucide-react';
import Image from 'next/image';

export default function AnonymousMessages() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(483);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    // Handle message submission here
  };

  return (
    <div className="min-h-screen bg-[#FFF5F0] p-6 flex flex-col items-center">
      {/* Message Card */}
      <div className="w-full max-w-2xl mx-auto mt-12 mb-8">
        <div className="bg-white rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Card Header */}
          <div className="p-4 border-b-2 border-black flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
              <Image
                src="/cool-kid-2.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-bold">@jj</h2>
              <p className="text-sm">send me anonymous messages!</p>
            </div>
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFD233] p-6 bg-opacity-50"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="send me anonymous messages..."
              className="w-full h-32 p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 p-2 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>

      {/* Anonymous Badge */}
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Lock className="w-4 h-4" />
        <span className="text-sm font-medium">anonymous q&a</span>
      </div>

      {/* Counter */}
      <div className="mt-12 text-black text-center">
        <p className="text-xl font-bold">
          👉 {count} people just tapped the button 👈
        </p>
      </div>

      {/* Get Started Button */}
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-8 w-full max-w-md px-6 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
      >
        Get your own messages!
      </button>
    </div>
  );
}
