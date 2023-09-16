/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, credit, prices, remaining, totalPrice }) => {
    return (
        <div className='w-1/4  rounded-md   '>
            <div className='text-left ml-20'>
                <h2 className='my-2 text-1xl font-bold text-blue-600'>Credit Hour Remaining  hr</h2>
                <hr />
                <h2 className='mb-2 text-xl font-bold py-3'>Course Name   {bookmarks.length}</h2>
                <hr />


                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
                }

                <div className='mt-10'>
                    <hr />
                    <h2 className='text-1xl font-bold my-2'>Total Credit Houre :{credit}</h2>
                </div>

                <hr />

                <div>
                    <h2 className='text-1xl font-bold mt-2'>Total Price : {prices}$ </h2>
                </div>
                <div className='mt-5'>
                    <button className="btn btn-primary w-full">Payment</button>
                </div>

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.func,
};

export default Bookmarks;