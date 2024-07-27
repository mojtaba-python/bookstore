import React from 'react';
import "../login_style.css";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div
            style={{   
                alignItems: "center",
                justifyContent: "center",
                padding: '1rem',
                display: 'flex',
               
            }}>

            <div class="wrapper">
                <div class="shape shape--one"></div>
                <div class="shape shape--tow"></div>
                <form action="" class="form">
                    <h2 class="form__title">ورود کاربر </h2>
                    <div class="form__input-wrapper">
                       
                        <input type="text" class="form__input" id="username" placeholder="نام کاربری" />
                    </div>
                    <div class="form__input-wrapper">
                        
                        <input type="text" class="form__input" id="password" placeholder="پسورد" />
                    </div>
                    <Link  to="/"  class="form__submit-btn"> ورود</Link>
                </form>
            </div>
        </div>
    )
}
