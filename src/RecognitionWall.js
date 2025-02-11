// src/RecognitionWall.js
import React, { useState } from 'react';

const RecognitionWall = () => {
  const [recognitions, setRecognitions] = useState([]);
  const [message, setMessage] = useState('');
  const [employee, setEmployee] = useState('');

  const handlePost = () => {
    if (message && employee) {
      setRecognitions([
        ...recognitions,
        { id: recognitions.length + 1, employee, message }
      ]);
      setEmployee('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Employee Recognition Wall</h1>
      <div className="space-y-4">
        {/* Input Fields */}
        <div className="space-y-2">
          <input
            type="text"
            className="p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Employee Name"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
          <textarea
            className="p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recognition Message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Post Button */}
        <button
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handlePost}
        >
          Post Recognition
        </button>
      </div>

      {/* Display Recognitions */}
      <div className="mt-8 space-y-6">
        {recognitions.map((recognition) => (
          <div
            key={recognition.id}
            className="p-5 bg-white shadow-md rounded-md border border-gray-200"
          >
            <p className="text-xl font-medium text-blue-600">{recognition.employee}</p>
            <p className="mt-2 text-gray-700">{recognition.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecognitionWall;
