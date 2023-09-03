import React from 'react'
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div>
            <div className='topdiv-aboutus'>
                <h1> Discover Us</h1>
            </div>
            <div>
                <h3 className='about'>About Us</h3>
            </div>
            <div className='below-div'>
                <div className='belowdiv'>
                    <div className='right-content'>
                        <div className='right-heading'>Welcome to <br /> <span>INSD Nanded</span></div>
                        <div className='right-matter'>
                            <p>International School of Design, the National & multiple award-winning Design Institute, is nurturing masterminds from all over India to translate their dreams into success.

                                INSD focuses on bridging the gap between Academics and Industry. The ideology behind our education system is to contribute significantly to the development of the Indian Design Industry, by tapping hidden talent, passion, dedication, innovation and tremendous potential that Youth of today has.

                                To cater to the ever-growing market, INSD Institute offers a plethora of courses in the field of Fashion Design, Interior Design, Jewellery Design, Graphic Design, Animation and Fashion Photography. There are four levels of study and each level is designed and balanced with theoretical and practical knowledge along with industrial exposure. Time management plays a vital role in the completion of the assignments and student learn this in INSD in day-to-day learning process.</p>
                        </div>
                    </div>
                    <div className='left-img'>
                        <img src="/interior_design.JPG" alt="about-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
