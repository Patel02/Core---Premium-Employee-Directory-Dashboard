import React from 'react';
import { Settings, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ emp, viewType }) => {
  const navigate = useNavigate();

  // Figma status colors array
  const statusColors = ['#FFB017', '#1A73E8', '#34A853', '#EA4335'];

  // List View - Horizontal "Rich Row" (Mobile Responsive)
  if (viewType === 'list') {
    return (
      <div
        onClick={() => navigate(`/details/${emp.id}`)}
        className="group relative bg-white border border-gray-200 rounded-2xl p-4 md:p-5 w-full grid grid-cols-1 md:grid-cols-4 items-center gap-4 transition-all hover:bg-gray-50/50 hover:shadow-md cursor-pointer overflow-hidden border-l-4 border-l-transparent hover:border-l-[#2D2B2A]"
      >
        {/* 1. Basic Info Column */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img src={emp.img} alt={emp.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <div className="min-w-0">
            <h3 className="text-[14px] md:text-[15px] font-bold text-gray-800 truncate">{emp.name}</h3>
            <p className="text-[10px] md:text-[11px] font-bold text-[#B89146] uppercase tracking-wider truncate">{emp.role}</p>
          </div>
        </div>

        {/* 2. Contact Column */}
        <div className="flex flex-col gap-1 overflow-hidden">
          <div className="flex items-center gap-2 text-[12px] text-gray-500">
            <Mail size={14} className="text-gray-300" />
            <span className="truncate">{emp.email}</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-gray-500">
            <Phone size={14} className="text-gray-300" />
            <span className="truncate">{emp.phone}</span>
          </div>
        </div>

        {/* 3. Dept & City Column */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1">
          <div className="flex items-center gap-2 bg-[#F4F7FE] px-2.5 py-1 rounded-lg">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter shrink-0">{emp.department}</span>
          </div>
          <span className="text-[12px] text-gray-400 font-medium truncate">{emp.city}</span>
        </div>

        {/* 4. End Actions & States */}
        <div className="flex items-center justify-between md:justify-end gap-6">
          {/* Status Dots */}
          <div className="flex gap-1.5">
            {statusColors.map((color, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <button className="p-2 text-gray-400 hover:text-black hover:bg-white rounded-lg transition-all border border-gray-50 md:border-transparent">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>
    );
  }

  // Grid View - Vertical Card (Default)
  return (
    <div
      onClick={() => navigate(`/details/${emp.id}`)}
      style={{ borderColor: '#E5E5E4' }}
      className="group relative bg-white border rounded-[24px] p-[24px] w-[248px] h-[267px] flex flex-col items-center text-center gap-[10px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 cursor-pointer overflow-hidden mx-auto"
    >
      {/* 1. Background Hover Element (Subtle Gradient) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* 2. Top Action (Hidden by default) */}
      <button className="absolute top-4 right-4 p-1.5 text-gray-400 hover:bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
        <MoreHorizontal size={18} />
      </button>

      {/* 3. Profile Image Section */}
      <div className="relative mb-2 mt-1">
        <div className="w-[100px] h-[100px] rounded-full p-1 border-2 border-dashed border-gray-100 group-hover:border-orange-200 transition-colors duration-500">
          <img
            src={emp.img}
            alt={emp.name}
            className="w-full h-full rounded-full object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Settings Badge Overlay */}
        <div className="absolute bottom-1 right-1 bg-[#2D2B2A] p-1.5 rounded-xl border-4 border-white text-white shadow-lg transition-all duration-300 group-hover:rotate-[30deg] group-hover:scale-110">
          <Settings size={12} strokeWidth={3} />
        </div>
      </div>

      {/* 4. Content Section */}
      <div className="flex-1 flex flex-col justify-center gap-1">
        <h3 className="text-[16px] font-bold text-gray-800 leading-tight transition-colors group-hover:text-black">
          {emp.name}
        </h3>
        <p className="text-[10px] font-black text-[#B89146] uppercase tracking-[0.12em]">
          {emp.role}
        </p>
      </div>

      {/* 5. Footer: Multi-color Dots & Quick Actions */}
      <div className="flex flex-col items-center gap-3 w-full">
        {/* Figma Status Dots */}
        <div className="flex gap-1.5 transition-all duration-300 group-hover:gap-2">
          {statusColors.map((color, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-110"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        {/* Optional: Show Quick Action Icons on Hover */}
        <div className="flex gap-3 h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
          <Mail size={15} className="text-gray-400 hover:text-blue-500" />
          <Phone size={15} className="text-gray-400 hover:text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;