import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function InternList() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/interns')
      .then(res => setInterns(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/interns/${id}`);
    setInterns(interns.filter(intern => intern._id !== id));
  };

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {interns.map(intern => (
          <tr key={intern._id}>
            <td>{intern.name}</td>
            <td>{intern.email}</td>
            <td>{intern.department}</td>
            <td><button onClick={() => handleDelete(intern._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
