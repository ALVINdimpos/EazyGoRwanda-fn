import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrash, FaCar, FaUser, FaPlus, FaRetweet } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';

const ReviewRanking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      driverName: 'John Doe',
      driverImage: 'https://i.pravatar.cc/150?img=1',
      passengerName: 'Alice Smith',
      rating: 4,
      review: 'Great driver, very punctual!',
      ranking: 2,
      posted: false,
    },
    {
      id: 2,
      driverName: 'Jane Smith',
      driverImage: 'https://i.pravatar.cc/150?img=2',
      passengerName: 'Bob Johnson',
      rating: 5,
      review: 'Excellent service, very friendly.',
      ranking: 1,
      posted: false,
    },
    {
      id: 3,
      driverName: 'Mike Brown',
      driverImage: 'https://i.pravatar.cc/150?img=3',
      passengerName: 'Carol Williams',
      rating: 3,
      review: 'Good driver, but arrived a bit late.',
      ranking: 3,
      posted: false,
    },
  ]);

  const [postedReviews, setPostedReviews] = useState([]);

  const handleEditReview = id => {
    console.log('Edit review', id);
  };

  const handleRemoveReview = (id, isPosted) => {
    if (isPosted) {
      setPostedReviews(postedReviews.filter(review => review.id !== id));
    } else {
      setReviews(reviews.filter(review => review.id !== id));
    }
  };

  const handlePostReview = id => {
    const reviewToPost = reviews.find(review => review.id === id);
    setPostedReviews([...postedReviews, { ...reviewToPost, posted: true }]);
    setReviews(reviews.filter(review => review.id !== id));
  };

  const handleRePostReview = id => {
    const reviewToRePost = postedReviews.find(review => review.id === id);
    setReviews([...reviews, { ...reviewToRePost, posted: false }]);
    setPostedReviews(postedReviews.filter(review => review.id !== id));
  };

  const ReviewCard = ({ review, isPosted }) => (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <img
            className='h-16 w-16 rounded-full mr-4 border-2 border-blue-500'
            src={review.driverImage}
            alt={review.driverName}
          />
          <div>
            <h2 className='text-xl font-semibold text-gray-800'>{review.driverName}</h2>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
              ))}
              <span className='ml-2 text-gray-600'>({review.rating}/5)</span>
            </div>
          </div>
        </div>
        <p className='text-gray-600 mb-4'>{review.review}</p>
        <p className='text-sm text-gray-500 mb-4'>Reviewed by: {review.passengerName}</p>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-semibold text-green-700'>Rank: #{review.ranking}</span>
          <div className='space-x-2'>
            {!isPosted && (
              <button
                onClick={() => handlePostReview(review.id)}
                className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300'
              >
                <FaPlus className='inline-block mr-1' /> Post
              </button>
            )}
            {isPosted && (
              <button
                onClick={() => handleRePostReview(review.id)}
                className='bg-green-700 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300'
              >
                <FaRetweet className='inline-block mr-1' /> Re-post
              </button>
            )}
            <button
              onClick={() => handleEditReview(review.id)}
              className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300'
            >
              <FaEdit className='inline-block mr-1' /> Edit
            </button>
            <button
              onClick={() => handleRemoveReview(review.id, isPosted)}
              className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300'
            >
              <FaTrash className='inline-block mr-1' /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex h-screen bg-green-50'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50'>
          <div className='bg-green-50 min-h-screen p-8'>
            <h1 className='text-3xl font-bold mb-8 text-gray-800'>Driver Reviews and Rankings</h1>

            {/* Unposted Review Cards */}
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Pending Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} isPosted={false} />
              ))}
            </div>

            {/* Posted Review Cards */}
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Recently Posted Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
              {postedReviews.map(review => (
                <ReviewCard key={review.id} review={review} isPosted={true} />
              ))}
            </div>

            {/* Trip Cards section remains the same */}
            {/* ... */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewRanking;
