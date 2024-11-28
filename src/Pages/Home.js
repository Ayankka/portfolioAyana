// Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="container home-page">
            <section className="hero">
                <h1></h1>
                <p> </p>
            </section>

            <section className="features">
            <div className="student">
                    <img src="/my.photo5.jpg" alt="Student 2" className="student-image" />
                    <h3>Kudaibergenova Ayana</h3>
                    <p>"Hello!,i am a web-developer,and in the future spesialize in front-end and in React-Native,focusing on JS, Htmll,Css,Python </p>
                </div>
               

                <div className="experience">
                    <h3>Experiences</h3>
                    <p>were worked as a waiter,3 months </p>
                    <img src="/my.photo2.jpg" alt="Student 2" className="experience" />
                </div>
            </section>
        </div>

        

            
    );
};

export default Home;
