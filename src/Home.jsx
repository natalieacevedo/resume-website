import React from "react";
import ladyindesk from './images/womancomputer.jpg'

function Home(){




return (
    <div>
    <section className='hero about'>
    <img className='mainpicture' width='500' heigh='500'src={ladyindesk} alt='escritorio'/>

    <div className= "bio animate__animated animate__shakeX">
    <h2 className="bio-title">About Me</h2>
    <p className="bio-text">
    Hello there and welcome to my website!. My name is Natalie, I am a software developer with a passion for coding. I have hands-on experience with React and ExpressJS-based projects. Just completed 700+ hours of programming bootcamp, as well as 300+ hours of the Javascript Algorithms and Data Structures from FreeCodeCamp; having also solved numerous challenges in sites such as Codewars and Edabit.

    </p>
    </div>
    </section>
        <section className="more-about">
        <h2>More about me</h2>
    <p> I am fluent in English, my native tongue is spanish. I love board games and play the guitar Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
        autem deleniti cupiditate molestias quis unde quae totam porro dicta
        iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
        autem deleniti cupiditate molestias quis unde quae totam porro dicta
        iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus</p>
    </section>


    </div>
)



};

export default Home