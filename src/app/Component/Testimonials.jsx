// components/Testimonials.js

import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Leonel Messi',
      title: 'Striker',
      review: 'AniMe Hero has completely transformed how I shop online. The quality and service are unmatched!',
      rating: 5,
      avatar: 'https://media.npr.org/assets/img/2024/05/18/gettyimages-2152626051-6497446712e660ff15dc949c1aedf9561b32ca58.jpg?s=1100&c=85&f=jpeg',
    },
    {
      name: 'Hamza Choudhury',
      title: 'Midfielder',
      review: 'As a seller, this platform has helped me reach customers I never thought possible. Highly recommend!',
      rating: 5,
      avatar: 'https://cms.patrika.com/wp-content/uploads/2025/03/Hamza-Choudhury.jpg',
    },
    {
      name: 'Cristiano Ronaldo',
      title: 'Forward',
      review: 'The variety and quality of products available is amazing. I find something new every time I visit!',
      rating: 5,
      avatar: 'https://cdn.punchng.com/wp-content/uploads/2023/09/01133700/Ronaldo.jpeg',
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 flex flex-col md:flex-row bg-transparent">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <p className="mb-12">Join thousands of satisfied customers who trust ProductHub.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
            >
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-4">"{review.review}"</p>
              <div className="flex items-center justify-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div>
                  <h3 className="text-xl font-medium">{review.name}</h3>
                  <p className="text-gray-400">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
