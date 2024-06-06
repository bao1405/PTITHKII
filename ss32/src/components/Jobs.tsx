import React, { useState } from 'react';
import Job from './Job';
interface Job {
  name: string,
  id: number,
  status: boolean
}

export default function Jobs() {
 
  let data = JSON.parse(localStorage.getItem("jobs") || "[]");
  const [nameJob,setNameJob]=useState<string>("");
  /* danh sách công việc  */
  const [jobs, setJobs] = useState<Job[]>(data);
  const addJob=()=>{
    let newJob={
      name:nameJob,
      id:Math.floor(Math.random()*999999),
      status:false,
    }
    jobs.push(newJob);
    localStorage.setItem("jobs",JSON.stringify(jobs));
    setNameJob("");
  }
  const deleteJob=(id:number)=>{
      console.log(11111,id);
      let result= jobs.filter((item)=>{
          return item.id!=id
      })
      localStorage.setItem("jobs",JSON.stringify(result));
  }
  
  return (
    <div>
      <input
      onChange={(e)=>{setNameJob(e.target.value)}}
       type="text"
        value={nameJob}
        />
      <button onClick={addJob}>thêm</button>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => {
            return <Job job={item} stt={index} deleteJob={deleteJob}></Job>
          })}
        </tbody>
      </table>
    </div>
  )
}
