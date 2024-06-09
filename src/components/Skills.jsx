import React from 'react';

const skills = [
    { name: 'HTML', accuracy: '95%' },
    { name: 'CSS', accuracy: '80%' },
    { name: 'JavaScript', accuracy: '90%' },
    { name: 'Python', accuracy: '80%' },
    { name: 'PHP', accuracy: '80%' },
    { name: 'React', accuracy: '85%' },
    { name: 'Mysql', accuracy: '75%' },
];

const Skills = () => {
    return (
        <section id="skills" className='p-8 bg-white'>
            <div className='container mx-auto text-center'>
                <h2 className='text-2xl font-bold mb-4'>Skills</h2>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {skills.map((skill, index) => (
                        <div key={index} className='p-4 border rounded shadow-sm'>
                            <h3 className='text-lg font-semibold'>{skill.name}</h3>
                            <div className='w-full bg-gray-200 rounded-full h-4 mt-2'>
                                <div className='bg-blue-500 h-4 rounded-full' style={{ width: skill.accuracy }}></div>
                            </div>
                            <p className='mt-2'>{skill.accuracy} accurate</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
