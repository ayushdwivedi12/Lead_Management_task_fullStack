import React from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

const App = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Lead Enquiry Form</h1>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <LeadForm />
        </div>

        <div className="mt-8">
          <LeadList />
        </div>
      </div>
    </>
  );
};

export default App;
