import React from "react";
import founder1Image2 from "../assets/founders/founder1.jpg";
import founderImage1 from "../assets/founders/founder2.png";
const About = () => {
  const teamMembers = [
    {
      name: "Rhagevendra",
      position: "Founder and Manager",
      image: founderImage1,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Jane Smith",
      position: "COO",
      image: founderImage1, // Replace with actual image path
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      name: "David Johnson",
      position: "CFO",
      image: founderImage1, // Replace with actual image path
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="bg-gradient-to-r from-slate-100 to-gray-300  w-full md:w-1/2 flex justify-center items-center">
        <div className="p-4 md:px-10 lg:px-12">
          <div className="w-full flex justify-center items-center">
            <img
              src={founderImage1}
              className="h-36 w-36 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Manorama Devi</h1>
            </div>
            <div className="text-blue-500 font-extrabold text-lg">Founder</div>
          </div>
          <div className="mt-4 bg-white text-gray-800 rounded-lg shadow-lg">
            <blockquote className="p-4 italic border-l-8 border-red-500">
              <p className="font-serif">
                <p>Namaste and welcome to Paramhansh Siksha Sansthan,</p>
                <p>
                  At Paramhansh Siksha Sansthan, we believe in the
                  transformative power of education for every child, regardless
                  of their background. Founded with a deep commitment to
                  equality and excellence, we are dedicated to ensuring that
                  every child receives a quality education in India.
                </p>
                <p>
                  Our mission is comprehensive and compassionate. We provide
                  scholarships and financial aid, breaking down barriers to
                  education and enabling bright futures. We are committed to
                  creating safe, conducive learning environments by renovating
                  and building school infrastructure across communities.
                </p>

                <p>
                  We prioritize holistic well-being through health and nutrition
                  programs for children and adult literacy initiatives,
                  fostering lifelong learning and empowerment. Paramhansh Siksha
                  Sansthan offers a rigorous, culturally relevant curriculum,
                  nurturing individuals ready to thrive. Join us in empowering
                  the next generation and building a brighter future.
                </p>
              </p>
              <p className="text-right text-md"> ~ Manorama Devi</p>
              <p className="text-right text-[12px]">
                Founder, Paramhansh Siksha Sansthan
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <div className="bg-gradient-to-r from-gray-300 to-blue-200 w-full flex justify-center items-center p-4">
          <div className="md:px-10 lg:px-12">
            <div className="w-full flex justify-center items-center">
              <img
                src={founder1Image2}
                className="h-24 w-24 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Rhagevndra</h1>
              </div>
              <div className="text-blue-500 font-extrabold text-lg">
                Co-founder and Treasurer
              </div>
            </div>
            <div className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg">
              <blockquote className="p-4 italic border-l-8 border-yellow-500">
                <p className="font-serif">
                  <p>Namaste and welcome to Paramhansh Siksha Sansthan,</p>
                  <p>
                    As the Co-Founder and Treasurer of Paramhansh Siksha
                    Sansthan, I am deeply committed to our mission of providing
                    quality education to every child, regardless of their
                    background. Our initiatives include scholarships, school
                    renovations, and health and nutrition programs that support
                    holistic development.
                  </p>
                  <p>
                    We ensure that every contribution is used effectively to
                    create a lasting impact. Through transparency and
                    dedication, we strive to build a brighter future for our
                    children and communities. Join us in our journey to
                    transform lives through education.
                  </p>
                </p>
                <p className="text-right text-md"> ~ Rhagevndra</p>
                <p className="text-right text-[12px]">
                  Co-founder and Treasurer, Paramhansh Siksha Sansthan
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-300 to-yellow-200 w-full flex justify-center items-center p-4">
          <div className="md:px-10 lg:px-12">
            <div className="w-full flex justify-center items-center">
              <img
                src={founder1Image2}
                className="h-24 w-24 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div>
                <h1 className="text-lg sm:text-xl font-bold">
                  Rakesh Sharan Mishra
                </h1>
              </div>
              <div className="text-blue-500 font-extrabold text-lg">
                President
              </div>
            </div>
            <div className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg">
              <blockquote className="p-4 italic border-l-8 border-blue-500">
                <p className="font-serif">
                  <p>Namaste and welcome to Paramhansh Siksha Sansthan,</p>
                  <p>
                    As President of Paramhansh Siksha Sansthan, I lead our
                    efforts to ensure every child has access to quality
                    education through scholarships, school renovations, and
                    health and nutrition programs.
                  </p>
                  <p>
                    We are dedicated to creating environments where children can
                    thrive and learn without barriers. By fostering education
                    and well-being, we aim to build a future where every child
                    has the opportunity to succeed.
                  </p>
                  <p>Thank you for your support and commitment to our cause.</p>
                </p>
                <p className="text-right text-md"> ~ Rakesh Sharan Mishra</p>
                <p className="text-right text-[12px]">
                  President, Paramhansh Siksha Sansthan
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
