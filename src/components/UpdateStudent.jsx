import React, { useState }from 'react'
import {getDatabase,ref,set, update} from 'firebase/database'
import {app} from '../Firebase'
import { useNavigate, useLocation} from 'react-router-dom';
import './UpdateStudent.css'


const UpdateStudent = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [name,setName] = useState(location.state[1].studentName)
    const [admNo,setAdmNo] = useState(location.state[0])
    const [phone,setPhone] = useState(location.state[1].phoneNumber)
    

    console.log(location)


    const submitHandler = (event)=>{
        event.preventDefault();
        const db = getDatabase(app);
        const studentRef = ref(db,'student/'+ location.state[0])
        update(studentRef,{studentName:name, phoneNumber:phone})
        .then(res =>{
            navigate('/studentList')
        })
        .catch(err =>{
            console.log(err)
        })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Admission No:</label>
        <input className='upd-inp'disabled value={admNo} onChange={(e)=>setAdmNo(e.target.value)} type='text' placeholder='Adm No' /><br /><br />

        <label>Student Name:</label>
        <input className='upd-inp' value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='student name' /><br /><br />

        <label>Phone Number:</label>
        <input className='upd-inp' value={phone} onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='phone number' /><br /><br />
        
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateStudent   
