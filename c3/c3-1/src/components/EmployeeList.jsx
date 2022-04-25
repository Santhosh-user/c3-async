import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.production.min";
import { AuthAcc } from "./AuthAcc";


export const EmployeeList = () => {

  const [PplDetails, setPplDetails] = useState([])

  const {SumEmp, flipSum} = useContext(AuthAcc)

  const navi = useNavigate()

  useEffect(()=>{
    return getDetails()
  },[])

  const getDetails = ()=>{
    axios.get('http://localhost:8080/employee')
  .then(function (response) {
    // handle success
    console.log(response);
    setPplDetails(response.data)
    flipSum(response.data.length)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {PplDetails.map((e)=>{
        
      })}
      <div className="employee_card">
        <img className="employee_image" />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div>
    </div>
  );
};
