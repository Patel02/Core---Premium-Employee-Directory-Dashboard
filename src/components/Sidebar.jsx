import React from 'react';
import {
  Home, User, Users, Briefcase, FileText,
  Settings, ChevronRight, LayoutGrid, ChevronsLeft
} from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'info', icon: User, label: 'My Info', hasArrow: true },
    { id: 'people', icon: Users, label: 'People', active: true },
    { id: 'team', icon: LayoutGrid, label: 'Team Management', hasArrow: true },
    { id: 'setup', icon: LayoutGrid, label: 'Project Setup', hasArrow: true },
    { id: 'hiring', icon: Briefcase, label: 'Hiring' },
    { id: 'report', icon: FileText, label: 'Report' },
  ];

  return (
    <>
      {/* 1. Mobile Overlay: Smoother backdrop blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-500"
          onClick={toggleSidebar}
        />
      )}

      {/* 2. Main Sidebar: Floating Card Style */}
      <aside
        style={{ backgroundColor: '#3D3936' }}
        className={`fixed lg:static inset-y-0 left-0 z-50 
          w-[280px] shrink-0 text-gray-400 flex flex-col 
          /* Floating Logic */
          lg:h-full lg:my-0 lg:ml-0 lg:rounded-[20px]
          h-[calc(100vh-32px)] my-4 ml-4 rounded-[20px] 
          p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0'}`}
      >

        {/* Header Section */}
        <div className="mb-10 px-2 flex justify-between items-center">
          <div className="overflow-hidden max-w-[85px]">
            <img src={logo} alt="CORE Logo" className="h-8 object-contain object-left" />
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all active:scale-75"
          >
            <ChevronsLeft size={22} />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar pr-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-300
                  ${item.active
                    ? 'bg-white text-black font-bold shadow-[0_10px_20px_rgba(255,255,255,0.1)] scale-[1.02]'
                    : 'hover:bg-white/10 hover:text-white hover:translate-x-1'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`${item.active ? 'text-black' : 'text-gray-400 group-hover:text-white transition-colors'}`}>
                    <Icon size={20} />
                  </span>
                  <span className="text-[14px] font-medium tracking-wide">{item.label}</span>
                </div>

                {item.hasArrow && (
                  <ChevronRight
                    size={16}
                    className={`${item.active ? 'text-black' : 'text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-1'}`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-4 p-3.5 rounded-2xl cursor-pointer hover:bg-white/10 hover:text-white transition-all group">
            <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
              <Settings
                size={20}
                className="group-hover:rotate-90 transition-transform duration-700 ease-in-out"
              />
            </div>
            <span className="text-sm font-semibold">Settings</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;