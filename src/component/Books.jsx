import React from 'react';
import { getBooks } from '../data/data';
import {NavLink } from 'react-router-dom';
import { LiaBookSolid } from "react-icons/lia";
import '../../node_modules/react-multi-carousel/lib/styles.css';
import Slider_books from './Slider_books';


export default function Books({ searchParams }) {

  const books = getBooks();

  return (
    <>

      <div className='container' style={{marginTop:"1rem"}}>
        <div className='row '>
          <h5 style={{color:"#395886"}}>کتاب های تخصصی  <LiaBookSolid /></h5>
          <div className="d-flex " style={{ flexWrap: "wrap", justifyContent: 'space-around', marginTop: "1rem", rowGap: "1rem" }}>
            {
              books.filter((book) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = book.name.toLowerCase();

                return name.startsWith(filter.toLowerCase());
              })

                .map((book) => (
                  <div key={book.number} className='card card_takhasosi'>

                    <img className='card-img-top' src={book.pic} alt="" style={{ width: "100%" }} />
                    <div className="card-body">
                      <NavLink dir='rtl' to={`/books/${book.number}`} className='card-title link_name'
                        style={{ textDecoration: "none", color:"#fff"}}>{book.name}
                      </NavLink>
                      <p className='card-text' style={{color:"#fff", marginTop:"1rem", fontSize:"13px"}}>{book.writer}</p>
                      <p className='card-text' style={{color:"#fff", marginTop:"1rem"}}>قیمت : {book.amount}</p>

                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>

      <Slider_books/>

    </>
  )
}
