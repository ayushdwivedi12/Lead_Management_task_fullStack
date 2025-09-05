import React, { useEffect, useState } from "react";

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchLeads() {
    try {
      const res = await fetch("http://localhost:5000/api/leads");
      const data = await res.json();
      setLeads(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) return <p className="text-gray-600">Loading leads...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Leads</h2>
      {leads.length === 0 ? (
        <p className="text-gray-500">No leads found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-2 border">Name</th>
                <th className="px-3 py-2 border">Email</th>
                <th className="px-3 py-2 border">Phone</th>
                <th className="px-3 py-2 border">Source</th>
                <th className="px-3 py-2 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{lead.name}</td>
                  <td className="px-3 py-2 border">{lead.email}</td>
                  <td className="px-3 py-2 border">{lead.phone}</td>
                  <td className="px-3 py-2 border">{lead.source}</td>
                  <td className="px-3 py-2 border">{lead.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LeadList;
