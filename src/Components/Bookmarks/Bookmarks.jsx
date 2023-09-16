
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='w-1/4  rounded-md   '>
            <div className='text-left ml-20'>
                <h2 className='my-2 text-1xl font-bold text-blue-600'>Credit Hour Remaining 7 hr</h2>
                <hr />
                <h2 className='mb-2 text-xl font-bold'>Course Name   {bookmarks.length}</h2>

                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.func,
};

export default Bookmarks;