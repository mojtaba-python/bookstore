import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png";
import { C1, C5, C6  } from '../colores';
export default function About() {
  return (
    <>
     <div
        className='d-flex' style={{
        borderBottom: "1px solid",
        padding: "1rem 2rem",
        backgroundColor:C5,
        justifyContent: "space-between",
        alignItems: "center",

      }}>
        <div>
          <Link to="/"><img src={logo} alt="logo" style={{ width: "100px" }} /></Link>
        </div>
        <div>
          <input type="text" className='form-control' placeholder='جستجوی کتاب'
            style={{backgroundColor:C6, color:C1  }}  />
        </div>
        <div>
          <Link to="/books">کتاب ها</Link>
        </div>
        <div>
          <Link to="/about"> درباره ما</Link>
        </div>
      </div>


    <div style={{padding:"1rem 1rem"}}> 
        <h2>پروژه کتابخانه با ری اکت</h2>
    </div>
    </>
  )
}
