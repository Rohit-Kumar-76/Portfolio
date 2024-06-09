import React from 'react';

const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',

];

const Roles = () => {
    return (
        <section id="roles" className='p-8 bg-white pt-24'>
            <div className='container mx-auto text-center'>
                <h2 className='text-2xl font-bold mb-4'>Roles I Like to Work</h2>
                <div className='flex flex-wrap justify-center'>
                    {roles.map((role, index) => (
                        <span key={index} className='m-2 p-2 bg-green-500 text-white rounded shadow'>
                            {role}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roles;
