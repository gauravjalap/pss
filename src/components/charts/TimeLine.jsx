import React from "react";
const timelineData = [
  {
    date: "Week 1-2",
    title: "Initial Planning and Research",
    description: "Define mission and vision. Conduct needs assessment.",
  },
  {
    date: "Week 3-4",
    title: "Goal Setting",
    description: "Identify key areas of focus. Draft preliminary goals.",
  },
  {
    date: "Week 5",
    title: "Stakeholder Consultation",
    description: "Engage stakeholders for feedback on preliminary goals.",
  },
  {
    date: "Week 6",
    title: "Refinement and Prioritization",
    description: "Refine and prioritize goals based on feedback.",
  },
  {
    date: "Week 7",
    title: "Detailed Planning",
    description: "Develop action plans and assign responsibilities.",
  },
  {
    date: "Week 8",
    title: "Final Review and Approval",
    description: "Review and obtain approval for goals and plans.",
  },
  {
    date: "Week 9",
    title: "Communication and Implementation",
    description: "Communicate goals and begin implementation.",
  },
  {
    date: "Ongoing",
    title: "Monitoring and Evaluation",
    description: "Regularly monitor progress and evaluate impact.",
  },
];
const TimeLine = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        NGO Goals Timeline
      </h2>
      <div className="relative">
        <div className="border-r-2 border-gray-200 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <ul className="list-none m-0 p-0">
          {timelineData.map((item, index) => (
            <li
              key={index}
              className="mb-8 flex justify-between items-center w-full"
            >
              <div
                className={`order-1 w-5/12 ${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                }`}
              >
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg">{item.date}</h3>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="order-1 w-5/12 text-center flex items-center">
                <span
                  className={`bg-blue-500 h-4 w-4 rounded-full ${
                    index % 2 === 0 ? "ml-0" : "mr-0"
                  }`}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
