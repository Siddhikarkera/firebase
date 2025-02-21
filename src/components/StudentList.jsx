import React, { useEffect, useState } from 'react'
import {getDatabase,onValue,ref,remove} from 'firebase/database'
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom'
import './StudentList.css'


const StudentList = () => {
    const [studentData,setStudentData] = useState(null)
    const navigate = useNavigate()
    useEffect(() =>{
        const db = getDatabase(app)
        const studentRef = ref(db, 'student')
        onValue(studentRef,(snapshot)=>{
            const data = snapshot.val()
            console.log(data)
            setStudentData(data)
        })
    },[])

    const deleteData = (key)=>{
        const db = getDatabase(app)
        const studentRef = ref(db, 'student/'+key)
        remove(studentRef)

    }

  return (
    <div className='main-box'>
      <h1>student list</h1>
      {studentData && (
        <div className='middle-box'>
            {Object.entries(studentData).map(([key,value])=>{
                return(
                <div className='box' key={key}>
                    <p className='para'>{value.studentName} {value.phoneNumber}</p>
                    <button className='del' onClick={()=>{deleteData(key)}}>delete</button>
                    <button className='update' onClick={()=>{navigate('/updateStudent',{state:[key,value]})}}>Update</button>
                </div>
                )
            })}
        </div>
      )}
    </div>
  )
}

export default StudentList
