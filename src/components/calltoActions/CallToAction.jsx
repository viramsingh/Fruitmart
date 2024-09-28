import React, { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for joining our newsletter!");
    setEmail("");
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="py-12 text-center text-white bg-primary">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold font-poppins">
          Join Our Newsletter
        </h2>
        <p className="mb-6 text-xl font-poppins">
          Stay updated with our latest offers and fruit arrivals.
        </p>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 text-black rounded-l-lg"
            value={email}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold transition rounded-r-lg bg-secondary hover:bg-yellow-400"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
