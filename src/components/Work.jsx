import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "General Assembly Immersive Fellow",
    duration: "4 months",
    details:
      "Engaged in a 12-week long remote full-stack web development learning experience spanning a total of 500 hours. The program's focus was to teach and provide ample experience with front-end technologies, back-end technologies, version control, and to reinforce industry wide best-practices.",
  },
  {
    year: 2022,
    title: "Apptricity",
    duration: "3 months",
    details: `I accepted a position as an accounting clerk while in school at UTA for accounting, however my schedule and communication skills at the time lead to a mutually amicable separation. I handled highly sensitive financial information for all clients of the corporation. Effectively organized thousands of paper documents for use across the entire organization`,
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:l-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
