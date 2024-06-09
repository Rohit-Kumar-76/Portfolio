import React from 'react';

const projects = [
    { title: 'Number Guessing Game  with Python', description: 'The Number guessing Game is a fun game in which user have to guess a number between 1 to 10 and if the number is Correct then he got a points and it it was wrong then he got negative poitn of 1/4 after  finishing the game a score card being generated based on Answers . ' },
    { title: 'Math Quize with Python', description: ' In The math quiz firstly user have to choose trhe option among 4 options that is the mathematic operation such as Addition Subtraction Division and Multiplication. after that a set of 10 question appear of chosen operation and user have to unser if he gave wrong answer then there a suggestion or hint to coorect that if he hit again wrong answer then this will be count as negative and then next question will apear and countinuesly this will be repeating at 10th question then a score card being generated for the accuracy or good marks' },
    { title: 'University Web page', description: 'i have developed a statice web page on the university also a clone of its UI in this the all content remains unchangable by user this only for reading purpose in this all the information will display and student related work will be done such as student fee cheking for hostel , tution fee , transport fee like this' },
];

const Projects = () => {
    return (
        <section id="projects" className='p-8 bg-gray-100'>
            <div className='container mx-auto text-center'>
                <h2 className='text-2xl font-bold mb-4'>Projects</h2>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project, index) => (
                        <div key={index} className='p-4 border rounded shadow-sm'>
                            <h3 className='text-lg font-semibold'>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
