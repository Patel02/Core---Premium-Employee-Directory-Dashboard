import React, { useState } from 'react';
import { Search, Filter, Plus, Download, LayoutGrid, AlignJustify, ChevronLeft, ChevronRight, Network } from 'lucide-react';
import { employees } from '../components/employees';
import EmployeeCard from '../components/EmployeeCard';

const EmployeeGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // Live Search Logic
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle Search Change - reset to page 1
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Bordered Container - matching topbar style */}
      <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm p-4 sm:p-8">

        {/* 1. Integrated Header & Action Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 gap-4 md:gap-6">

          {/* Search Bar - Soft Rounded Style */}
          <div className="relative w-full lg:max-w-[400px] group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors"
              size={18}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by Employee"
              className="w-full pl-12 pr-4 py-2.5 md:py-3 bg-[#F4F7FE] border border-gray-50 md:border-gray-100 rounded-full text-sm outline-none placeholder:text-gray-500 focus:ring-2 ring-black/5 focus:border-gray-200 transition-all font-medium"
            />
          </div>

          {/* Controls Group */}
          <div className="flex items-center gap-2 md:gap-3 self-end lg:self-auto w-full lg:w-auto justify-between lg:justify-end overflow-x-auto no-scrollbar py-1">

            {/* Export & Filter Buttons */}
            <div className="flex items-center gap-2">
              <button title="Download Report" className="p-2.5 md:p-3 bg-[#F4F7FE] border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-100 transition-all active:scale-95">
                <Download size={18} />
              </button>
              <button title="Filter List" className="p-2.5 md:p-3 bg-[#F4F7FE] border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-100 transition-all active:scale-95">
                <Filter size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Add Employee Button */}
              <button className="flex items-center gap-2 bg-[#2D2B2A] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-xl shadow-md hover:bg-black transition-all font-medium whitespace-nowrap active:scale-95">
                <Plus size={18} strokeWidth={3} />
              </button>

              {/* Grid/List Toggle Switch */}
              <div className="flex border border-gray-100 rounded-xl bg-[#F4F7FE] p-1">
                <button
                  onClick={() => setViewType('grid')}
                  className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-all ${viewType === 'grid'
                    ? 'bg-[#2D2B2A] text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-all ${viewType === 'list'
                    ? 'bg-[#2D2B2A] text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  <AlignJustify size={16} />
                </button>
                <button
                  title="Team View"
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-black transition-all"
                >
                  <Network size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Employee Content Area */}
        {paginatedEmployees.length > 0 ? (
          <div className={`grid gap-6 justify-items-center transition-all duration-500 ${viewType === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1'
            }`}>
            {paginatedEmployees.map((emp) => (
              <EmployeeCard key={emp.id} emp={emp} viewType={viewType} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-24 text-center bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-100">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-gray-200">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No matches found</h3>
            <p className="text-gray-500 mt-1">We couldn't find anyone matching "{searchTerm}"</p>
            <button onClick={() => { setSearchTerm(""); setCurrentPage(1); }} className="mt-4 text-sm font-bold text-black underline underline-offset-4">
              Clear Search
            </button>
          </div>
        )}

        {/* 3. Pagination Footer */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-100 text-[13px] font-bold text-gray-400 gap-6">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest text-[10px]">Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="bg-[#F4F7FE] border border-gray-200 rounded-xl px-4 py-2 outline-none focus:ring-2 ring-black/5 text-black cursor-pointer transition-all"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
            </select>
          </div>

          <div className="flex items-center gap-10">
            <span className="tabular-nums font-medium">
              Showing {filteredEmployees.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, filteredEmployees.length)} of {filteredEmployees.length}
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-20 transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || filteredEmployees.length === 0}
                className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition-all active:scale-90 text-black"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeGrid;