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
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-semibold text-center mb-5">Employee Recognition Wall</h1>
      <div className="mb-5">
        <input
          type="text"
          className="p-3 w-full border border-gray-300 rounded-md mb-3"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
        <textarea
          className="p-3 w-full border border-gray-300 rounded-md mb-3"
          placeholder="Recognition Message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
          onClick={handlePost}
        >
          Post Recognition
        </button>
      </div>

      <div className="space-y-4">
        {recognitions.map((recognition) => (
          <div
            key={recognition.id}
            className="p-4 bg-white shadow-md rounded-md border border-gray-200"
          >
            <p className="text-xl font-medium">{recognition.employee}</p>
            <p className="mt-2 text-gray-700">{recognition.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecognitionWall;
