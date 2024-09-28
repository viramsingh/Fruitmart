import React, { useEffect, useRef } from "react";

import profileImg1 from "../../assets/TestimonialsIMG/profile1.jpeg";
import profileImg2 from "../../assets/TestimonialsIMG/profile2.jpg";
import profileImg3 from "../../assets/TestimonialsIMG/profile3.jpeg";
import profileImg4 from "../../assets/TestimonialsIMG/profile4.jpeg";
// import profileImg5 from "../../assets/TestimonialsIMG/profile5.jpg";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "FruitMart offers an exceptional variety of fresh fruits. The quality is unbeatable, and the delivery service is top-notch!",
      author: "Smriti Sharma",
      img: profileImg1, // Image path for smriti sharma
    },
    {
      id: 2,
      text: "I love shopping at FruitMart. Their fruits are always fresh and well-packaged. The customer service is friendly and efficient.",
      author: "Dhruv Patel",
      img: profileImg2, // Image path for dhruv patel
    },
    {
      id: 3,
      text: "FruitMart has become my go-to place for buying fruits. Their selection is fantastic, and I appreciate the convenience of their delivery service.",
      author: "Sarah Lee",
      img: profileImg3, // Image path for Sarah Lee
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth / reviews.length,
          behavior: "smooth",
        });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-1 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center font-poppins">
          What Our Customers Say
        </h2>
        <div
          className="overflow-hidden"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex space-x-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 p-6 bg-white rounded-lg shadow-lg w-80"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.img}
                    alt={review.author}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <p className="font-semibold font-poppins">{review.author}</p>
                </div>
                <p className="text-gray-600 font-averia">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
