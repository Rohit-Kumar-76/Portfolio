import React, { useState, useEffect } from 'react';
import profilePic from '../profile.png'; // Add your profile picture here

const Introduction = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentTime = new Date().getHours();
        if (currentTime >= 5 && currentTime < 12) {
            setGreeting('Good Morning');
        } else if (currentTime >= 12 && currentTime < 17) {
            setGreeting('Good Afternoon');
        } else if (currentTime >= 17 && currentTime < 20) {
            setGreeting('Good Evening');
        } else {
            setGreeting('');
        }
    }, []);

    return (
        <>
            <section className='p-10 bg-gray-100 pt-2 md:pt-24 lg:py-20 shadow-md m-4'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left pb-8 md:pb-4 lg:pb-4 '>
                    <img src={profilePic} alt="Profile" className=' rounded-full mb-4 md:mb-0 md:mr-8 pt-10 pb-8 md:pr-10' />
                    <div>
                        <h1 className='lg:text-7xl text-4xl font-200 mb-3  text-center mx-auto pb-10'>Hello {greeting}<br /> I'm <b>Rohit </b></h1>
                    </div>
                </div>
            </section>
            <section className='bg-gray-100 shadow-md py-10 m-4' id="introduction">
                <h1 className='text-2xl md:text-3xl text-center font-bold py-4'>Introduction</h1>
                <p className=' mx-auto md:mx-0 lg:w-2/3 w-full text-justify lg:text-xl text-md text-gray-700 pb-4'> {greeting} I’m Rohit Kumar from Mokama, currently pursuing a B.Tech in Computer Science at Sandip University, Madhubani. I completed my 10th and 12th grades with the Bihar Board, Patna. Recently, I did an internship in web development, focusing on frontend technologies, which improved my skills in creating user-friendly interfaces and engaging web experiences.

                    My skills include HTML, CSS, JavaScript, React, Tailwind CSS, PHP, and Bootstrap. I've worked on several projects, including a Placement Management System that efficiently manages student placements, a React Portfolio showcasing my skills and projects, and a Todo List app with features like adding, deleting, and editing tasks using Bootstrap for styling and routing for navigation.
                    My skills include HTML, CSS, JavaScript, Tailwind CSS, PHP. I've worked on several projects, including a Placement Management System that efficiently manages student placements, a  Portfolio showcasing my skills and projects, and a Todo List Web app  using Bootstrap for styling .

                    Apart from coding, I enjoy dancing, playing volleyball, and taking walks in nature, which often inspire me. These activities help me stay creative and energetic.

                    In the short term, I want to become a frontend developer, focusing on design and user experience. My long-term goal is to become a versatile software developer, contributing to innovative tech projects. I believe in continuous learning, adaptability, and striving for excellence. I am eager to connect with like-minded individuals and explore the exciting world of technology together! </p>
            </section>
        </>
    );
};

export default Introduction;
