// @ts-nocheck 

'use client'

import { useEffect, useState } from "react"
import axios from "axios";
import style from "./styles.module.css"

export default function Page({ params }) {
   console.log("params.id",params.id)
const [data,setData] = useState({})
  

useEffect(()=>
  
  
  
  {

    (async function names( ){
      
        axios.get("../employeesdata/api/"+params.id).then(e=>setData(e.data))
       
    }
  )()
    // names()
  },[])
  
  // 
  //  console.log("data",data.fields)
    return <div className={style.page}>
      <div className={style.img} style={{borderColor:"dodgerblue" , borderWidth:"5px"}}>


   {data?.fields?<img  src={data?.fields.Picture[0].url}  alt="" />:""} 


      </div>
      <div>
      {data?.fields?<h3><b>Full Name: {data.fields.fname}</b></h3>:""}
{data?.fields?<h4>Age : {data.fields.age}</h4>:""}

{data?.fields?<h4>Marital status : {data.fields.maritalstatus}</h4>:""}

{data?.fields?<h4>الجنسية : {data.fields.nationality}</h4>:""}

      </div>
    
    </div>
  }
