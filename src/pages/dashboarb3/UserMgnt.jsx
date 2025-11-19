import { Edit, Trash } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function TransactionsPage() {
  const mockData = [
    { studentName: "John Doe", contact: "1234567890", account: "Savings", status: "Success" },
    { studentName: "Jane Doe", contact: "1234567890", account: "Spending", status: "Success" },
    { studentName: "John Smith", contact: "1234567890", account: "Spending", status: "Success" },
    { studentName: "Jane Smith", contact: "1234567890", account: "Savings", status: "Success" },
    { studentName: "John Doe", contact: "1234567890", account: "Savings", status: "Success" },
    { studentName: "Jane Doe", contact: "1234567890", account: "Spending", status: "Success" },
    { studentName: "John Smith", contact: "1234567890", account: "Savings", status: "Success" },
    { studentName: "Jane Smith", contact: "1234567890", account: "Spending", status: "Success" },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [displayedData, setDisplayedData] = useState(mockData.slice(0, 10));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleEntriesChange = (value) => {
    setEntriesPerPage(value);
    setDisplayedData(mockData.slice(0, value));
    setDropdownOpen(false);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-500";
      case "Failed":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Entries Dropdown */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              className="px-3 py-1 border border-slate-400 rounded bg-white text-gray-500 font-medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {entriesPerPage} ▼
            </button>
            {dropdownOpen && (
              <div className="absolute mt-1 bg-white border rounded shadow w-24 z-10">
                {[10, 25, 50, 100].map((num) => (
                  <div
                    key={num}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleEntriesChange(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm text-gray-600">Entries Per Page</span>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Account</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.studentName}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.contact}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`inline-block px-3 py-1 rounded text-white w-16 text-center text-xs ${getStatusStyles(txn.status)}`}>

                      {txn.status}
                    </span>
                  </td>                  <td className="px-6 py-3 text-sm text-gray-500">{txn.account}</td>
                 
                  <td className="">
                    <button className="bg-orange-500 p-1 text-slate-100 rounded hover:text-yellow-900 transition-colors mr-2">
                      <p className="text-sm">Manage</p>
                    </button>
                    <button className="bg-red-600 p-1 text-slate-100 rounded hover:text-red-900 transition-colors">
                      <Trash size={16}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entries summary */}
        <div className="mt-2 text-sm text-gray-600">
          Showing 1 to {displayedData.length} of {mockData.length} entries
        </div>
      </div>
    </main>
  );
}
