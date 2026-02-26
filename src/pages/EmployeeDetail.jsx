import { ArrowLeft, Mail, Phone, MapPin, Calendar, Briefcase, ShieldCheck, Globe } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { employees } from '../components/employees';

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employee = employees.find(e => e.id === parseInt(id)) || employees[0];

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 group transition-all font-semibold">
        <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
          <ArrowLeft size={18} />
        </div>
        Back to Directory
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-4xl p-8 shadow-sm border border-gray-50 text-center sticky top-8">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-gray-50 animate-pulse"></div>
              <img src={employee.img} alt={employee.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl" />
              <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{employee.name}</h2>
            <p className="text-sm font-bold text-[#C29D7D] uppercase tracking-widest mt-1 mb-6">{employee.role}</p>

            <div className="flex justify-center gap-3">
              <button className="flex-1 bg-sidebar-dark text-white py-3 rounded-2xl font-medium hover:opacity-90 transition-opacity">Message</button>
              <button className="p-3 border border-gray-100 rounded-2xl hover:bg-gray-50"><Globe size={20} /></button>
            </div>
          </div>
        </div>

        {/* Right Side: Information Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-4xl p-8 shadow-sm border border-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-500" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Mail />, label: "Email Address", value: employee.email },
                { icon: <Phone />, label: "Phone Number", value: employee.phone || "+91 98765 43210" },
                { icon: <MapPin />, label: "Location", value: employee.city || "Ahmedabad, India" },
                { icon: <Briefcase />, label: "Department", value: employee.department || "Operations" },
                { icon: <Calendar />, label: "Join Date", value: employee.joinDate || "12 Jan 2024" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-3xl bg-gray-50 hover:bg-gray-100/50 transition-colors">
                  <div className="text-gray-400 mt-1">{item.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-4xl p-8 shadow-sm border border-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Biography</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {employee.bio || "Highly motivated professional with a proven track record of delivering high-quality results in fast-paced environments. Dedicated to continuous learning and professional growth."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeDetail;