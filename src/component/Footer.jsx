import React from 'react'
import { ORANGE } from '../colores'
import { FaInstagram, FaPhone } from 'react-icons/fa6'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import "../styles/FooterStyles.css";

export default function Footer() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    

    return (
        <div style={{ backgroundColor: "black", display: "flex", padding: "1rem", gap: "2rem", position: "relative", }}>
            <div className='shape_footer shape1'></div>
            <div className='shape_footer shape2'></div>
            <div className='shape_footer shape3'></div>
            <div className='shape_footer shape4'></div>
            <div className='shape_footer shape5'></div>
            {/* <div className='line'></div> */}

            <div style={{ border: "1px solid #0329a8", color: ORANGE, padding: "1rem" }}>
                <p style={{ marginBottom: '2rem', }}>طراحی شده توسط مجتبی بخشی پور </p>

                <p  >  تماس با من :  </p>
                <p><FaPhone /> <span>09375674194</span></p>

            </div>
            <div style={{ border: "1px solid #0329a8", color: ORANGE, padding: "1rem" }}>

                <p>منو در شبکه ها اجتماعی دنبال کن : </p>
                <p style={{ textAlign: "center" }}>
                    <a href="https://github.com/mojtaba-python" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='social_media' />
                    </a>
                    {"   "}
                    <a href="https://Instagram.com/mojtaba.bakhshipour" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='social_media' />
                    </a>
                    {"   "}
                    <a href="https://www.linkedin.com/in/mojtaba-bakhshipour-developer/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='social_media' />
                    </a>
                </p>

                <p style={{ marginTop: '2rem' }}>سایت : {"  "}
                    <a style={{ textDecoration: "none" }} target="_blank" href="https://mojtaba-python.github.io/portfolio">
                        portfolio
                    </a>
                </p>

            </div>


        </div>
    )
}
