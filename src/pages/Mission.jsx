// import React from "react";
import mission1 from "../assets/images/mission.jpg";
import missionImage1 from "../assets/images/mission2.jpg";
import inclusivity from "../assets/images/mission3.jpg";
import empowermentImage from "../assets/images/empower.webp";
import innovationImage from "../assets/images/innovation.jpg";
import VisionCard from "../components/layout/VisionCards";
import diversityImage from "../assets/images/diversity.jpg";
import accImage from "../assets/images/acc.jpg";
import equality from "../assets/images/equality.webp";
import { GoGoal } from "react-icons/go";

const Mission = () => {
  return (
    <div>
      {/* Background image container */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${mission1})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10">
        <div className="w-screen mt-4">
          <div className="inset-0 flex justify-center mt-2">
            <div>
              <div className="relative flex flex-col items-center justify-center text-white mt-4">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                  <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 text-transparent bg-clip-text">
                    Our Mission
                  </span>
                </h1>

                <div className="w-full md:w-[50%] quote-container text-center bg-black bg-opacity-60 text-white rounded-md mt-2 p-4 sm:mt-4">
                  <p
                    className="text-sm sm:text-lg lg:text-xl italic m-4 p-2 md:p-4 shadow-lg"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ff9933, #ffffff,#ffffff, #128807)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    "Our mission is to ignite a fervent passion for lifelong
                    learning, equip students with the resilience to thrive in an
                    ever-evolving world, and empower them as compassionate
                    leaders poised to drive transformative change in India and
                    beyond."
                  </p>
                </div>
              </div>
              {/* bg-gradient-to-b from-black to-[#570202 */}
              <div className="pt-4 mt-6 pb-6">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                  <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 text-transparent bg-clip-text">
                    Our Values
                  </span>
                </h1>
                <div className="flex flex-wrap justify-center mt-4">
                  <VisionCard
                    Image={missionImage1}
                    valueTitle={"Education"}
                    valueDesc={
                      "Our NGO is dedicated to fostering equitable access to quality education, empowering individuals with the knowledge and skills needed to unlock their full potential and contribute positively to their communities and beyond."
                    }
                  />
                  <VisionCard
                    Image={equality}
                    valueTitle={"Equality"}
                    valueDesc={
                      "We advocate for and strive to achieve equal access to quality education for all individuals, ensuring that every person has the opportunity to reach their full potential regardless of their background, gender, ethnicity, or socioeconomic status."
                    }
                  />
                  <VisionCard
                    Image={empowermentImage}
                    valueTitle={"Empowerment"}
                    valueDesc={
                      "Education is a powerful tool for change. We aim to empower individuals with the knowledge and skills needed to improve their lives and communities."
                    }
                  />
                  <VisionCard
                    Image={inclusivity}
                    valueTitle={"Inclusivity"}
                    valueDesc={
                      "We believe in providing equal educational opportunities for all, regardless of background, ethnicity, gender, or economic status."
                    }
                  />
                  <VisionCard
                    Image={innovationImage}
                    valueTitle={"Innovation"}
                    valueDesc={
                      "We adopt pioneering teaching approaches and cutting-edge technologies to enrich learning experiences and improve educational outcomes."
                    }
                  />
                  <VisionCard
                    Image={diversityImage}
                    valueTitle={"Diversity"}
                    valueDesc={
                      "We celebrate and value diverse perspectives, cultures, and backgrounds within our educational initiatives."
                    }
                  />
                  <VisionCard
                    Image={accImage}
                    valueTitle={"Accountability"}
                    valueDesc={
                      "We hold ourselves accountable to our stakeholders, ensuring transparency and ethical practices in all educational programs and initiatives."
                    }
                  />
                  <VisionCard
                    Image={accImage}
                    valueTitle={"Community Engagement"}
                    valueDesc={
                      "Embracing diversity and ensuring educational initiatives are inclusive of all cultural backgrounds, promoting a sense of belonging and mutual respect within the community."
                    }
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mt-2 sm:hidden">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                    Our Goals
                  </span>
                </h1>
                <div className="flex text-white justify-center max-w-[90%] lg:max-w-[75%] mx-auto mt-4 mb-4">
                  <div className="w-[100%] sm:w-[70%]">
                    <ol className="list-decimal">
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Provide scholarships and financial aid to students in
                        need.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Ensure that all children, regardless of their
                        socioeconomic background, have access to quality
                        education.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Improving both mental and physical well-being of
                        children's that are deprived of basic facilities.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Build and renovate school buildings to provide safe and
                        conducive learning environments.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Implement adult literacy programs to help adults acquire
                        basic reading and writing skills.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Integrate health and nutrition programs within schools
                        to ensure children are healthy and well-nourished, which
                        enhances their learning capabilities.
                      </li>
                      <li className=" w-full bg-black bg-opacity-70 p-4">
                        Develop and implement curriculums that are relevant,
                        holistic, and cater to the overall development of
                        children.
                      </li>
                    </ol>
                  </div>
                  <div className="hidden sm:flex flex-col justify-center w-[50%] sm:w-[30%]">
                    <div className="bg-blue-800 font-bold bg-opacity-80 text-center h-1/2 flex items-center justify-center p-4 text-2xl">
                      Our Goals
                    </div>
                    <div className="flex justify-center items-center bg-yellow-400 bg-opacity-80 h-1/2 p-4">
                      <GoGoal className="text-6xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
