import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
type Task={
    id:number,
    detail:string,
    status:boolean
}
export default function GetAllTask() {
    //Initialization
    const [tasks,setTasks]=useState<Task[]>([]);
    const [task,setTask]=useState<Task>({
        id:Math.floor(Math.random()*1000000000000),
        detail:'',
        status:true,
    })
    const [typeSubmit,setTypeSubmit]=useState<string>('add');
    const [filter,setFilter]=useState<string>('all')
    //load Data from API
    const loadData=()=>{
        axios.get('http://localhost:3001/tasks')
        .then(res=>setTasks(res.data))
        .catch(err=>console.log(err)
        )
    }
    //call LoadData when mounting firstly
    useEffect(()=>{
        loadData();
    },[])
    // reset Task whenever Input change
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        setTask({...task,detail:value});
    }
    //reset Input to Initial
    const reset=()=>{
        setTask({
            id:Math.floor(Math.random()*1000000000000),
            detail:'',
            status:true,
        })
    }
    //create Task
    const createTask=()=>{
        //case type Submit is 'add'
        if(typeSubmit==='add'){
            axios.post('http://localhost:3001/tasks',task)
            .then(res=>loadData())
            .catch(err=>console.log(err))
            
        }else{
            axios.put(`http://localhost:3001/tasks/${task.id}`,task)
            .then(res=>loadData())
            .catch(err=>console.log(err))
            setTypeSubmit('add');
        }
        reset();
    }
    // edit Task
    const updateTaskById=(idTask:number)=>{
        axios.get(`http://localhost:3001/tasks/${idTask}`)
        .then(res=>setTask(res.data))
        .catch(err=>console.log(err))
        setTypeSubmit('update')
    }
    //delete Task
        const deleteTaskById=(idTask:number)=>{
            axios.delete(`http://localhost:3001/tasks/${idTask}`)
            .then(res=>loadData())
            .catch(err=>console.log(err))
        }
    //change status Task
    const changeStatus=(idTask:number)=>{
        const taskFind:Task|undefined=tasks.find(item=>item.id===idTask);
        axios.patch(`http://localhost:3001/tasks/${idTask}`,{"status":!taskFind?.status})
        .then(res=>loadData())
        .catch(err=>console.log(err))
    }
    // render Tasks
    const loadTasks=()=>{
        loadData();
        setFilter('all')
    }
    //render Task Complete
    const loadTaskComplete=()=>{
        axios.get(`http://localhost:3001/tasks?status=false`)
        .then(res=>{
            setTasks(res.data);
            setFilter('complete')
    })
        .catch(err=>console.log(err))
    }
     //render Task Not Complete
     const loadTaskUnComplete=()=>{
    axios.get(`http://localhost:3001/tasks?status=true`)
        .then(res=>{
            setTasks(res.data)
            
            setFilter('unComplete')
     })
        .catch(err=>console.log(err))
    }
    //delete All Task
    const deleteTasks=()=>{
        axios.get('http://localhost:3001/tasks')
        .then(res => {
            const deletePromises = res.data.map((item:Task) => axios.delete(`http://localhost:1301/tasks/${item.id}`));
            return Promise.all(deletePromises);
        })
        .then(()=>loadData())
        .catch(err=>console.log(err)
        )
    }
    //delete Task Complete
    const deleteTaskComplete=()=>{
        axios.get('http://localhost:3001/tasks?status=false')
        .then(res => {
            const deletePromises = res.data.map((item:Task) => axios.delete(`http://localhost:1301/tasks/${item.id}`));
            return Promise.all(deletePromises);
        })
        .then(()=>loadData())
        .catch(err=>console.log(err)
        )
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'50px'}}>
      <Form style={{width:'400px',display:'flex',flexDirection:'column',gap:'20px'}}>
      <h3 style={{textAlign:'center'}}>Quản lý công việc</h3>
      <Form.Group className="mb-3" controlId=""style={{width:'400px',display:'flex',flexDirection:'column',gap:'20px',padding:'20px',boxShadow:'2px 2px 5px 5px rgb(219, 214, 214)',borderRadius:'5px'}}>
          
        <Form.Control type="text" placeholder="Nhập tên công việc" onChange={handleChange} required value={task.detail}/>
        <Button onClick={createTask} variant="success" type="submit">
        {typeSubmit=='add'?'Thêm công việc':'Cập nhập công việc'}
      </Button>
      </Form.Group>
      <div style={{padding:'20px',boxShadow:'2px 2px 5px 5px rgb(219, 214, 214)',borderRadius:'5px'}}>
      <Button onClick={loadTasks} variant="outline-secondary" active={filter=='all'}>Tất cả</Button>{' '}
      <Button onClick={loadTaskComplete} variant="outline-dark" active={filter=='complete'}>Hoàn thành</Button>{' '}
      <Button onClick={loadTaskUnComplete} variant="outline-danger" active={filter=='unComplete'}>Đang thực hiện</Button>{' '}
      </div>
      {tasks.map(item=>(
          <div key={item.id}
          style={{padding:'10px',boxShadow:'2px 2px 5px 5px rgb(219, 214, 214)',borderRadius:'5px',display:'flex'
           ,justifyContent:'space-between'
         }}>
           <Form.Check onChange={()=>changeStatus(item.id)} type="checkbox" label={
            <span style={{ textDecoration: !item.status ? 'line-through' : 'none' }}>
              {item.detail}
            </span>
          }  checked={!item.status}
           />
           <div style={{display:'flex',gap:'10px'}}>
           <i onClick={()=>updateTaskById(item.id)} className='bx bxs-edit bx-flashing-hover'></i>
<i onClick={()=>deleteTaskById(item.id)} className='bx bxs-trash-alt bx-flashing-hover'></i>
           </div>
         </div>
      ))}
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Button onClick={deleteTaskComplete} variant="danger">Xóa công việc hoàn thành</Button>
      <Button onClick={deleteTasks} variant="danger">Xóa tất cả công việc</Button>
      </div>
    </Form>
    </div>
  )
}