
interface Props{
  name:string,
  id:number,
  status:boolean
}
interface Job{
  job:Props,
  stt:number,
  deleteJob:Function,
}

export default function Job(props:Job) {
  console.log(11111,props);
  const {job}=props
  const {stt}=props;
  const {deleteJob}=props;
 
  return (
         <tr>
            <td>{stt+1}</td>
            <td>{job.name}</td>
            <td>{job.status?"hoàn thành":"chưa hoàn thành"}</td>
            <td><button onClick={()=>deleteJob(job.id)}>xóa</button></td>
            <td><button>sửa</button></td>
          </tr>
  )
}
