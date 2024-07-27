import React from 'react'
import { getBooks } from '../data/data';
import { Link} from 'react-router-dom';
import { FaComputer } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import '../../node_modules/react-multi-carousel/lib/styles.css';

export default function Slider_books() {
    
const books = getBooks();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="container" style={{ marginBottom: "2rem",marginTop:"1rem", padding: "1rem" }}>
      <div><h5 style={{color:"#395886"}}> علوم کامپیوتر   <FaComputer /> </h5></div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}

          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay= {true }
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className='card card_slider'>
            <Link to={`/books/${1}`}><img className='card-img-top' src={books[0].pic} alt="" /></Link>
            <div className="card-body ">
              <h5 className='card-title'><Link style={{ textDecoration: "none", color: "#fff" }} className='card-title' to={`/books/${1}`}>{books[0].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem'  }}>تاریخ انتشار : {books[0].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[0].amount}</p>
            </div>
          </div>
          <div className='card card_slider' >
            <Link to={`/books/${2}`}><img className='card-img-top' src={books[1].pic} alt="" /></Link>
            <div className="card-body ">
              <h5 className='card-title'><Link style={{ textDecoration: "none",color: "#fff" }} className='card-title' to={`/books/${1}`}>{books[1].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem' }}>تاریخ انتشار : {books[1].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[1].amount}</p>
            </div>
          </div>
          <div className='card card_slider' >
            <Link to={`/books/${3}`}><img className='card-img-top' src={books[2].pic} alt="" /></Link>
            <div className="card-body ">
              <h5 className='card-title'><Link style={{ textDecoration: "none", color: "#fff" }} className='card-title' to={`/books/${3}`}>{books[2].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem' }}>تاریخ انتشار : {books[2].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[2].amount}</p>
            </div>
          </div>
          <div className='card card_slider' >
            <Link to={`/books/${4}`}><img className='card-img-top' src={books[3].pic} alt="" /></Link>
            <div className="card-body ">
              <h5 className='card-title'><Link style={{ textDecoration: "none", color: "#fff" }} className='card-title' to={`/books/${4}`}>{books[3].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem' }}>تاریخ انتشار : {books[3].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[3].amount}</p>
            </div>
          </div>
          <div className='card card_slider' >
            <Link to={`/books/${5}`}><img className='card-img-top' src={books[4].pic} alt="" /></Link>
            <div className="card-body">
              <h5 className='card-title'><Link style={{ textDecoration: "none", color: "#fff"}} className='card-title' to={`/books/${5}`}>{books[4].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem' }}>تاریخ انتشار : {books[4].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[4].amount}</p>
            </div>
          </div>
          <div className='card card_slider' >
            <Link to={`/books/${1}`}><img className='card-img-top' src={books[0].pic} alt="" /></Link>
            <div className="card-body ">
              <h5 className='card-title'><Link style={{ textDecoration: "none", color: "#fff" }} className='card-title' to={`/books/${1}`}>{books[1].name}</Link></h5>
              <p className='card-text' style={{ color: "#fff", fontSize:'13px',marginTop:'1rem' }}>تاریخ انتشار : {books[0].due}</p>
              <p className='card-text' style={{ color: "#fff" }}>قیمت : {books[0].amount}</p>
            </div>
          </div>

        </Carousel>
      </div>
  )
}
