'use client'
import { NextComponentType } from "next";
import Image from "next/image";
// import "./page.css"
import styles from './styles.module.css'
// useState
import Box from "./components/box";
// useRouter
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Nav from "./components/Navbar";
// import NavBar from "./components/Navbar";
export default   function Home()  {
  // var data;
  const [da,setData]=useState([])
// const router = useRouter();

useEffect(()=>
  {


    async function names( )  {
      fetch("./api").then(response => response.json())
  .then(json  => {
    console.log('parsed json', json) // access json.body here
  setData(json)   
  } ) 
    }

    names()
  }
  // (n()
  ,[])


// da.map(e=>console.log(e))
//  const data  =  names();
// const data = await  names();
  // console.log("id",da[1])
  // console.log(typeof)
  // const datas = data.map(e=>e)
  return (

    <div >



    <div  className={styles.divbox}  >
 {da.map(e=>  
 <Box maritalstatus={e?.fields.maritalstatus} id={e?.fields.ID}  nationality={e?.fields.nationality}  names={e?.fields.fname} key={e?.fields.ID} url={e?.fields.Picture[0].url}/>)
}


</div>
<div className="join buttonshesham" >
  <button className="join-item btn">1</button>
  <button className="join-item btn btn-active">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">4</button>
  </div></div>
);
}
