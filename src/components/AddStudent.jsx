import React, { useState }from 'react'
import './AddStudent.css'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from '../Firebase'
import '../components/Dashboard.css'
import { useNavigate} from 'react-router-dom';


const AddStudent = () => {
    const [name,setName] = useState('')
    const [admNo,setAdmNo] = useState(null)
    const [phone,setPhone] = useState(null)
    const navigate = useNavigate()


    const submitHandler = (event)=>{
        event.preventDefault();
        const db = getDatabase(app);
        set(ref(db,'student/'+admNo),{
           studentName: name,
           phoneNumber: phone
       })
       .then(res=>{
           navigate('/studentList')
       })
       .catch(err =>{
           console.log(err)
       })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Student Form</h3><br/><br/>
        <label>Admission no: </label>
        <input onChange={(e)=>setAdmNo(e.target.value)} type='text' placeholder='Adm No' />
        <br /> <br />
        <label>Student name: </label>
        <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='student name' />
        <br /> <br />
        <label>Phone number:</label>
        <input onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='phone number' /> <br /> <br />
        <button className="std-btn"type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddStudent   
