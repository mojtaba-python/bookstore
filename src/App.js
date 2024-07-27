import './App.css';
import { Link } from 'react-router-dom';
import logo from "./img/book1.png";
import { FONT } from './colores';
import Books from './component/Books';
import { useSearchParams } from 'react-router-dom';
import { IoPerson, } from "react-icons/io5";
import { PiHeadCircuit } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { GiAncientColumns } from "react-icons/gi";
import Footer from './component/Footer';


function App() {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #FBA834",
          padding: "0 2rem",
          backgroundColor: " #fff",
          boxShadow: "rgba(253, 165, 3, 0.3) 0px 9px 18px",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",

        }}>
        <div className="container header">

          <div>
            <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
          </div>
          <div>
            <input type="text" className='form-control search' placeholder=' جستجوی کتاب'
              value={searchParams.get("filter") || ""}
              onChange={event => {
                let filter = event.target.value;

                if (filter) {
                  setSearchParams({ filter: filter });
                } else {
                  setSearchParams({});
                }
              }} />
          </div>
          <div>

          </div>
          <div >
            <Link className='login btn' to="/login" >
              <IoPerson /> ورود به حساب کاربری
            </Link>
          </div>
        </div>

        <div className="container"
          style={{
            // display: "grid",
            // gridTemplateColumns: "20% 20% 20%",
            // justifyContent: "space-around",
            alignItems: "end",
            marginTop: "1rem"
          }}>


          <div class="dropdown">
            <button style={{ color: FONT }} class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              دسته بندی ها
            </button>
            <ul class="dropdown-menu" style={{ textAlign: "right", backgroundColor: "#fff" }}  >
              <li ><Link dir="rtl" class="dropdown-item tabs "  > <PiHeadCircuit />   علوم انسانی </Link></li>
              <li ><Link class="dropdown-item tabs" href="#" ><CiApple />   سبک زندگی </Link></li>
              <li ><Link class="dropdown-item tabs" href="#" > <GiAncientColumns />  تاریخ </Link></li>
            </ul>
          </div>

        </div>
      </div >
      <Books searchParams={searchParams} />
      <Footer />
    </>
  );
}
export default App;
