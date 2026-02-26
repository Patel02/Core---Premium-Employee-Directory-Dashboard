import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import EmployeeGrid from './pages/EmployeeGrid';
import EmployeeDetail from './pages/EmployeeDetail';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      {/* Main Container: P-4 se dashboard ko floating look milta hai */}
      <div className="flex h-screen bg-[#F4F7FE] p-0 md:p-4 overflow-hidden font-sans text-[#2D3748]">

        {/* Sidebar: Mobile overlay aur Desktop static logic iske andar hai */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden md:pl-4">

          {/* Topbar Container: White card with border/shadow */}
          <header className="h-16 md:h-20 bg-white/90 backdrop-blur-md flex items-center px-4 md:px-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm shrink-0 z-30 transition-all">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 mr-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all active:scale-95"
            >
              <Menu size={22} />
            </button>

            {/* Topbar Content */}
            <div className="flex-1">
              <Topbar />
            </div>
          </header>

          {/* Scrolling Main Content */}
          <main className="flex-1 overflow-y-auto mt-4 no-scrollbar scroll-smooth">
            <div className="max-w-[1600px] mx-auto pb-8">
              <Routes>
                <Route path="/" element={<EmployeeGrid />} />
                <Route path="/details/:id" element={<EmployeeDetail />} />
              </Routes>
            </div>
          </main>

        </div>
      </div>

      {/* Global CSS for no-scrollbar logic */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </Router>
  );
}

export default App;