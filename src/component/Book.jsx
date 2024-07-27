import React from 'react'
import { useParams } from 'react-router-dom';
import { getBook } from '../data/data';
import { IoCartOutline, IoPricetagOutline } from "react-icons/io5";
import Navbar from './Navbar';


export default function Book() {

  const params = useParams();

  const book = getBook(parseInt(params.bookId));
  if (book) {
    return (
      <>
        <Navbar />

        <div className='container '>
          <div className="row div1_Res_book " >
            <div className="col div2_Res_book " style={{ padding: "1rem" }}  >
              <div className='img_book div3_Res_book'>
                <img src={book.pic} alt="" style={{ width: "100%", borderRadius: "15px" }} />
              </div>
            </div>
            <div className="col book_info" style={{ padding: "1rem" }}>
              <p className='book_name'>نام کتاب : {book.name}</p>
              <p className='book_info'>نویسنده کتاب : {book.writer}</p>
              <p className='book_info'> {book.des}</p>
              <p className='book_info'>سال انتشار : {book.due}</p>
            </div>

            <div className="col cart_book" style={{ padding: "1rem" }}>
              <div className='book_price'>
                <p className='price_basket'>  <IoCartOutline />    سبد خرید</p>
                <p style={{color:"#FBA834"}}>سال انتشار : {book.due}</p>
                <p style={{color:"#FBA834"}}>تعداد صفحات : 230</p>
                <p style={{color:"#FBA834"}}> <IoPricetagOutline />  قیمت : {book.amount}</p>
                <button className='btn btn_cart'>خرید کتاب <IoCartOutline />  </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2rem", marginBottom:"2rem" }}>
            <h5 className='book_name'>معرفی کتاب</h5>
            {
              book.des
            }
          </div>
        </div>
      </>
    )
  } else {
    return (
      <h1 style={{ padding: "2rem" }}>همچین کتابی یافت نشد دوست من</h1>
    )
  }

}
