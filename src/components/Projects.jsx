import React from 'react';

const projects = [
    { title: 'Text Utility', url: "https://rohit-kumar-76.github.io/My-react-app/", description: 'TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding. ' },
    { title: 'Todo App', url: "https://rohit-kumar-76.github.io/Todo-App-Rohit/", description: 'My Todo List is a simple and intuitive todo list application built with React. It allows you to easily manage your tasks by adding, editing, and deleting todos. The app features a clean and responsive user interface, making it easy to use on both desktop and mobile devices.Intuitive Interface: With a clean and intuitive user interface, managing your todos is effortless and enjoyable. Add and Edit Todos: Easily add new tasks by providing a title and description ' },
    { title: 'Dice Rollt', url: "https://rohit-kumar-76.github.io/Dice_Roll/", description: 'The Dice Game is an interactive web game where players select a number between 1 and 6 and then roll a virtual dice. Players score points if their selected number matches the rolled dice number, with the rolled number being added to their score. A penalty of -2 points is applied after two consecutive incorrect guesses. The game features a responsive interface built with Tailwind CSS, including a total score display, selectable numbers, and game rules.' },
    { title: 'My Project', url: "https://rohit-kumar-76.github.io/Internship-Project/", description: 'This is my Project list which i developed during my one month internship there are several pages for the several work i develoved the all  such as employee salary structre and deduction and also for a barber shop .and for a super market billing system . ' },
];

const Projects = () => {
    const red = {
        color: "blue",
        textDecoration: "none"
    }
    return (
        <section id="projects" className='p-2 md:p-4 lg:p-12 bg-gray-100 pt-20  shadow-md lg:m-4  m-2'>
            <div className='container mx-auto text-center'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4 p-4' >Projects</h2>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 pb-5'>
                    {projects.map((project, index) => (
                        <div key={index} className='p-4 border rounded shadow-sm'>
                            <h3 className='text-lg font-semibold'>{project.title}</h3>
                            <p>{project.description}</p>
                            <a style={red} href={project.url}>{project.url}</a>

                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
