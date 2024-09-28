import React from "react";
import AboutIMG from "../assets/AboutImg/AboutImg.jpg"; // Correct image path

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
          About Us
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <img
              src={AboutIMG}
              alt="FruitMart Showcase"
              className="w-full mb-8 rounded-lg shadow-lg lg:mb-0"
            />

            <div>
              <p className="mt-5 text-gray-700 font-averia">
                We believe in the power of fresh, nutritious fruits to enhance
                well-being and enrich lives. Each fruit we offer is carefully
                selected to ensure it meets our rigorous standards for taste,
                freshness, and quality. Our commitment extends beyond just
                selling fruits; we aim to foster a healthier, more connected
                community through our offerings.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <p className="mb-6 text-gray-700 font-averia">
              Welcome to FruitMart, your premier destination for the freshest
              and finest fruits available. At FruitMart, we take pride in
              offering a wide selection of seasonal and exotic fruits, all
              sourced from trusted farms that emphasize sustainability and
              top-notch quality.
            </p>
            <p className="mb-6 text-gray-700 font-averia">
              Since our inception in 2024, FruitMart has been dedicated to
              making high-quality fruits accessible to everyone. What began as a
              modest neighborhood store has blossomed into a beloved community
              staple, celebrated for our exceptional service and commitment to
              excellence. Our passion for healthy living and connecting people
              with nature’s bounty drives us every day.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-12">
          <div className="flex flex-col justify-between space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg lg:w-1/2">
              <h3 className="mb-4 text-3xl font-bold font-poppins text-primary">
                Our Mission
              </h3>
              <p className="text-gray-700 font-averia">
                Our mission is to deliver the freshest and highest quality
                fruits to our customers while championing sustainable farming
                practices. We are committed to making fresh fruits accessible
                and affordable for everyone, promoting a healthier lifestyle and
                supporting environmentally responsible agriculture.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg lg:w-1/2">
              <h3 className="mb-4 text-3xl font-bold font-poppins text-primary">
                Our Vision
              </h3>
              <p className="text-gray-700 font-averia">
                We envision a future where fresh, nutritious, and sustainably
                grown fruits are within reach for everyone. At FruitMart, our
                goal is to be at the forefront of the fruit market, continually
                enhancing our offerings and expanding our reach to serve more
                communities, while upholding our values of quality,
                sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
