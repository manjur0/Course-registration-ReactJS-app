
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = ({ handleToAddingCourse, handleCredit, handlePrice }) => {
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
                    courses.map(course => <Course
                        key={course.credit}
                        course={course}
                        handleToAddingCourse={handleToAddingCourse}
                        handleCredit={handleCredit}
                        handlePrice={handlePrice}
                    ></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleToAddingCourse: PropTypes.func,
    handleCredit: PropTypes.object
};

export default Courses;