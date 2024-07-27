import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: '500px',
    backgroundRepeat: 'no-repeat',
    height: '500px'
}
const slideImages = [
    {
        url: '../img/book.webp',
        caption: 'C++'
    },
    {
        url: '../img/book2.webp',
        caption: 'python'
    },
    {
        url: '../img/book3.webp',
        caption: 'React'
    },
    {
        url: '../img/book4.webp',
        caption: 'Django'
    },
];

const Slideshow = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '510px' }}>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span className='caption'>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}
export default Slideshow;