
import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const { img, title, description, } = course

    console.log(course);
    return (
        <div className=''>
          
          <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt={`image of course ${img}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {

};

export default Course;