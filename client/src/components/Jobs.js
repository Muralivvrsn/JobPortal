import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import Pagination from '@material';
import Job from "./Job";
function Jobs() {

  const [response, setResponse] = useState(null);
  useEffect(() => {
    const Res = axios
      .get("http://localhost:4000/api/jobs")
      .then((res) => {
        console.log("SUCCESS")
        return res;
      }).then((data)=>{
        setResponse(data)
      })
      .catch((err) => {
        console.log("FAILURE");
      });
      
  },[]);
  return (
    <div>
      <Home />
      <Job data={"HELLO"}/>
      <Pagination count={10} color="secondary" />
      <div className="jobs">
        {response && response.data &&
          response.data.map((data) => <Job data={data} />)}
      </div>
    </div>
  );
}

export default Jobs;
