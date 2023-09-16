/* eslint-disable react/prop-types */


import PropTypes from 'prop-types';

const Course = ({ course, handleToAddingCourse }) => {
    const { img, title, description, price, credit } = course

    return (
        <div className=''>

            <div className="card w-80 bg-base-100 shadow-xl ">
                <figure><img className='w-full' src={img} alt={`image of course ${img}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between flex-grow-0'>

                        <p className='flex-grow-0'> $  {price}  </p>
                        <p className='flex-grow-0'>Credit: {credit}hr</p>
                    </div>
                    <div className="card-actions justify-center ">
                        <button onClick={() => handleToAddingCourse(course)} className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    FiBookOpen: PropTypes.func

};

export default Course;