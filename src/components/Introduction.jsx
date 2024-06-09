

import React from 'react';
import profilePic from '../profile.png'; // Add your profile picture here

const Introduction = () => {
    return (
        <section id="introduction" className='p-8 bg-gray-100 pt-24'>
            <div className='container mx-auto flex flex-col md:flex-row items-center text-center md:text-left'>
                <img src={profilePic} alt="Profile" className='w-42 h-42 rounded-full mb-4 md:mb-0 md:mr-8' />
                <div>
                    <h2 className='text-2xl font-bold mb-2'> Hello, I'm Rohit Kumar, a final-year B.Tech student specializing in Computer Science at Sandip University.</h2>
                    <p className='max-w-md mx-auto md:mx-0'> With a strong passion for technology, I am currently working on a final year project focused on a Placement
                        Management System. My interests lie in web development, particularly in creating responsive and user-friendly
                        web applications. I have hands-on experience with HTML, CSS, JavaScript, and React, and I'm building an attractive and responsive portfolio to showcase
                        my skills. Additionally, I have explored various aspects of cybersecurity, understanding its impact on modern society. </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
