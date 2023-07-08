import React, { useEffect, useState } from 'react';
import './personDetails.css';
import {useNavigate} from 'react-router-dom';
import {API} from './api';
import { get } from 'react-hook-form';
import logo from './sayyes.jpg';

function PersonDetails() {

  const [userID, setUserID] = useState();
  const [jobInfo, setJobInfo] = useState();
  const [userInfo, setUserInfo] = useState();

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

  useEffect(()=>{
    const getForms = async () => {
      const user_id = sessionStorage.getItem("user_id");
      setUserID(user_id);
      const res = await API.getForms(user_id);
      if(res.formList){
        setJobInfo(res.formList);
      }
      const user_res = await API.getUser(user_id);
      setUserInfo(user_res)

    }

    getForms();

  }, [])

  return (
    <div>
      <img style={{maxWidth: "10%", maxHeight: "10%", textAlign: "center"}} src={logo}/>
      <h2>{userInfo && userInfo.firstname + " " + userInfo.lastname + "'s Profile Page"}</h2>
      <div class = "personStuff">
        {/* <p>{userInfo && userInfo.username + " " + userInfo.lastname}</p> */}
        <p>{userInfo && "College/University: " + userInfo.college}</p>
        <p>{userInfo && "Years with Say Yes Buffalo: "+userInfo.yearsWithProgram}</p>
        <button onClick={()=>navigate("/survey")}>Add employer</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employer Name</th>
            <th>How did you find?</th>
            <th>Did you get an interview?</th>
            <th>Did you get an offer?</th>
          </tr>
        </thead>
        <tbody>
          {jobInfo && jobInfo.map((item, index) => (
            <tr key={index}>
              <td>{item.employerName}</td>
              <td>{item.howFound}</td>
              <td>{item.gotInterview ? "yes" : "no" }</td>
              <td>{item.gotOffer? "yes": "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonDetails;