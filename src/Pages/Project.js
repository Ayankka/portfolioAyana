

import React from 'react';

const Students = () => {
    return (
        <div className="container">
            <h1>My Projects</h1>
            <p></p>
            <section className="projects">
                <div className="student">
                    <img src="/project1.jpg" alt="Student1" className="student-image" />
                    
                </div>
                <div className="student">
                    <img src="/project2.jpg" alt="Student 2" className="student-image" />
                   
                </div>
                <div className="student">
                    <img src="/project3.jpg" alt="Student 3" className="student-image" />
                   
                </div>
            </section>
        </div>
    );
};

export default Students;
