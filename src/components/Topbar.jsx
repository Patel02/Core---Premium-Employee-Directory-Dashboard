import React from 'react';
import { Clock, Mail, ChevronDown, Edit3 } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-full bg-transparent transition-all">
      {/* 1. Left Side: Page Title */}
      <div className="flex items-center">
        <h1 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] whitespace-nowrap">People</h1>
      </div>

      {/* 2. Right Side: Time, Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">

        {/* MST Label Badge */}
        <div className="hidden sm:flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 bg-white border border-gray-100 rounded-full shadow-sm">
          <span className="text-[12px] md:text-[14px] font-bold text-gray-800">MST</span>
        </div>

        {/* Time with Edit Icon Section */}
        <div className="flex items-center gap-1.5 md:gap-3 bg-white border border-gray-100 px-2 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm shrink-0">
          <div className="flex items-center gap-1.5 text-gray-800 font-semibold text-[13px] md:text-[15px]">
            <Clock size={16} className="text-gray-400" />
            <span className="font-mono">02:03:02</span>
          </div>
          {/* Inner Edit Button inside time pill */}
          <button className="p-1 md:p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit3 size={14} className="text-gray-500" />
          </button>
        </div>

        {/* Mail Icon with Notification Dot - Hidden on very small screens */}
        <div className="relative p-2 md:p-2.5 bg-white border border-gray-100 rounded-full cursor-pointer hover:bg-gray-50 shadow-sm transition-all group shrink-0">
          <Mail size={18} className="text-gray-500 group-hover:text-black" />
          <span className="absolute top-1.5 right-1.5 w-2 md:w-2.5 h-2 md:h-2.5 bg-[#FF5C00] rounded-full border-2 border-white"></span>
        </div>

        {/* Profile Avatar Section */}
        <div className="flex items-center cursor-pointer shrink-0">
          <div className="w-8 h-8 md:w-11 md:h-11 rounded-full border-1 md:border-2 border-white shadow-md overflow-hidden bg-gray-100 ring-1 ring-gray-100">
            <img
              src="https://i.pravatar.cc/150?u=9"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;