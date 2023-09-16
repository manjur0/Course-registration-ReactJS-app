
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className=''>
            <div className=''>
                <h2 className='text-1xl '>
                    <li>{title}</li>
                </h2>
            </div>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.func
};

export default Bookmark;