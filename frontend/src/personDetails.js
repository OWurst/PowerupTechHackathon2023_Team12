import React from 'react';
import './personDetails.css';
import {useNavigate} from 'react-router-dom';

function PersonDetails() {
  const person = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: '123 Main St',
  };

  const data = [
    { id: 1, title: 'LinkedIN', description: 'Job Offer' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <button onClick={()=>navigate("/survey")}>Add employer</button>
      <table>
        <thead>
          <tr>
            <th>Employer</th>
            <th>Meeting Place</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonDetails;