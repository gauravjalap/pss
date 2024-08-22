import React from "react";
import HeroSection from "../components/display/HeroSection";
import MissionCard from "../components/layout/MissionCard";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaWheelchair } from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import PercentageBar from "../components/charts/PercentageBar";
import FAQ from "../components/feedback/FAQ";
import Quote from "../components/display/Quote";
import Crousel from "../components/display/Crousel";
import { FaRupeeSign } from "react-icons/fa";
import PopUp from "../components/display/PopUp";
import { SiIfood } from "react-icons/si";
import { RiTreeFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import QuotedText from "../components/display/QuotedText";
const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy is 30 days with no questions asked.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking link sent to your email.",
  },
  {
    question: "Can I purchase items in bulk?",
    answer:
      "Yes, bulk purchases are available and you can contact our sales team for more information.",
  },
];
const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        <hr />
        <HeroSection />

        <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center mx-auto p-2 sm:p-2 w-full md:max-w-[100%] xl:max-w-[60%]">
          <MissionCard
            customClass={"flex justify-center bg-yellow-700 item-center"}
            icon={<IoSchool className="text-2xl sm:text-4xl" />}
            missionName="Bulding world class Infracture for education and Training"
          />
          <MissionCard
            customClass={"flex justify-center bg-pink-700 item-center"}
            icon={<MdSportsMartialArts className="text-2xl sm:text-4xl" />}
            missionName="Focuses on overall personality development of individual"
          />
          <MissionCard
            customClass={"flex justify-center bg-blue-700 item-center"}
            icon={
              <LiaChalkboardTeacherSolid className="text-2xl sm:text-4xl" />
            }
            missionName="Provide high quality education both online and offline"
          />
          <MissionCard
            customClass={"flex justify-center bg-cyan-800 item-center"}
            icon={<BiSolidDonateHeart className="text-2xl sm:text-4xl" />}
            missionName="Even a small donation can change lives of many famalies"
          />
          <MissionCard
            customClass={"flex justify-center bg-yellow-600 item-center"}
            icon={<FaWheelchair className="text-2xl sm:text-4xl" />}
            missionName="Training, Employment and Education for differently abled"
          />
          <MissionCard
            customClass={"flex justify-center bg-red-600 item-center"}
            icon={<MdConstruction className="text-2xl sm:text-4xl" />}
            missionName="Develop real-world skills and secure employment opportunities"
          />
          <MissionCard
            customClass={"flex justify-center bg-blue-800 item-center"}
            icon={<FaRupeeSign className="text-2xl sm:text-4xl" />}
            missionName="Providing Financial assistance to the poor and needy"
          />
          <MissionCard
            customClass={"flex justify-center bg-green-800 item-center"}
            icon={<SiIfood className="text-2xl sm:text-4xl" />}
            missionName="Providing Nutritious Meals to Primary School Children"
          />
          <MissionCard
            customClass={"flex justify-center bg-pink-800 item-center"}
            icon={<RiTreeFill className="text-2xl sm:text-4xl" />}
            missionName="Promoting Sustainable and Environment-Friendly Educational Practices"
          />
          <MissionCard
            customClass={"flex justify-center bg-red-700 item-center"}
            icon={<GiHealthNormal className="text-2xl sm:text-4xl" />}
            missionName="Developing Health and Wellness Programs for Students"
          />
        </div>
        <div className="">
          <QuotedText />
        </div>

        <div className="mt-4">
          <Crousel />
        </div>
      </div>
      <div className=" bg-slate-200 pb-4 pt-6">
        <div className="text-center text-2xl font-bold pt-6">
          Our Achievements
          <div className="w-full ">
            <hr className="w-[150px] border-[0.5px] mx-auto mt-2" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:max-w-[70%] mx-auto mt-4 m-2">
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={90.1} />
            <div className="">
              <div className="text-xl font-bold">Basic Education</div>
              <div className="text-[12px] p-2 w-[200px]">
                Students Completed high school after enrolling into PSS
                Foundation
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={86.1} />
            <div className="">
              <div className="text-xl font-bold">Trained Team</div>
              <div className="text-[12px] p-2 w-[200px]">
                Professionally Trained Teachers and Staff
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={96.9} />
            <div className="">
              <div className="text-xl font-bold">High School</div>
              <div className="text-[12px] p-2 w-[200px]">
                Students Completed high school after enrolling into PSS
                Foundation
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={55} />
            <div className="">
              <div className="text-xl font-bold">Young Team</div>
              <div className="text-[12px] p-2 w-[200px]">
                Young Team Members who are working with PSS Foundation age less
                than 25yrs
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={94.35} />
            <div className="">
              <div className="text-xl font-bold">intermediate</div>
              <div className="text-[12px] p-2 w-[200px]">
                Students Completed high school after enrolling into PSS
                Foundation
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={92.01} />
            <div className="">
              <div className="text-xl font-bold">Graduation</div>
              <div className="text-[12px] p-2 w-[200px]">
                Potential students who can complete there graduation with PSS
                Foundation
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={75} />
            <div className="">
              <div className="text-xl font-bold">Increasing Supporters</div>
              <div className="text-[12px] p-2 w-[200px]">
                Increase in number of supporters and volunteers every year
              </div>
            </div>
          </div>
          <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
            <PercentageBar percent={37} />
            <div className="">
              <div className="text-xl font-bold">NRI Support</div>
              <div className="text-[12px] p-2 w-[200px]">
                Increase in number of supporters outside India every year
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-2xl font-bold pt-6">
          Our Impact
          <div className="w-full ">
            <hr className="w-[150px] border-[0.5px] mx-auto mt-2" />
          </div>
          <div className="flex flex-wrap justify-center items-center mx-auto mt-6 max-w-[75%]">
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md w-[300px] bg-blue-200">
              <div className="text-xl font-mono font-bold">1500K</div>
              <div className="text-sm">
                Childrens and their families impacted
              </div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">500+</div>
              <div className="text-sm">
                Villages and slums reached accross India
              </div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">20+</div>
              <div className="text-sm">
                States reached including remote areas
              </div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">6K+</div>
              <div className="text-sm">Active Volunteers and supporters</div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">100K+</div>
              <div className="text-sm">
                Worth Study material and resources distributed across India
              </div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">25K+</div>
              <div className="text-sm">
                Supporters and followers on social media
              </div>
            </div>
            <div className="font-normal mt-2 p-4 border-2 rounded-lg shadow-md bg-blue-200">
              <div className="text-xl font-mono font-bold">16K+</div>
              <div className="text-sm">
                Regular Support from Non-resedential Indians
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
};

export default Home;
