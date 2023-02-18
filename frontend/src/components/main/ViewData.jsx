import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewData = ( ) => {
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      getDetails();
    }, []);
  
    const getDetails = async () => {
      const response = await axios.get("http://localhost:8800/");
      setDetails(response.data);
    };
  return (
    <div>
        {details.map((id, index) => (
          <div key={id} className="">
            <p>name : {id.name} </p>
            <p>phone : {id.phone} </p>
            <p>email :{id.email} </p>
            <p>question : {id.question} </p>
            <p>checkbox 1 : {id.check1} </p>
            <p>checkbox 2 : {id.check2} </p>
            <p>checkbox 3 : {id.check3} </p>
            <p>checkbox 4 : {id.check4} </p>
            <p>checkbox 5 : {id.check5} </p>
            <p>checkbox 6 : {id.check6} </p>
            <br/>
          </div>
        ))}
    </div>
  )
}

export default ViewData