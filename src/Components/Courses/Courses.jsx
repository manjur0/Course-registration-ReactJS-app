
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='w-3/4'>
            
            <div className='md:grid grid-cols-3 gap-20 justify-center '>

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {

};

export default Courses;