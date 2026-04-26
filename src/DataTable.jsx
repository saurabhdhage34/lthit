import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4 text-blue-800 border-bottom">
        SD IT Solutions - Received Applications
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Experience</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.position}</td>
                  <td>{item.experience} Years</td>
                  <td>{item.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                  Ajun kontihi application aaleli nahi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;