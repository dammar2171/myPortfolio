import "../css/ServicePage.css";
const processData = [
  {
    number: "1",
    heading: "Discovery",
    desc: "We discuss your project requirement ,goals, and timeline",
  },
  {
    number: "2",
    heading: "Planning",
    desc: "I created a detailed project plan and technical specification.",
  },
  {
    number: "3",
    heading: "Design",
    desc: "Wireframes and mockups are created for your approval.",
  },
  {
    number: "4",
    heading: "Development",
    desc: "Your project is built using best practice and modern technologies.",
  },
  {
    number: "5",
    heading: "Testing",
    desc: "Through testing ensure everything works perfectly.",
  },
  {
    number: "6",
    heading: "Deploy",
    desc: "Your project goes live with full support and documentation.",
  },
];
const ProcessCard = () => {
  return (
    <>
      <div className="process-card-container">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>
            <div className="cirle-process">
              <h1 id="process-number">{item.number}</h1>
            </div>
            <h3 id="process-card-heading">{item.heading}</h3>
            <p id="process-card-para">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProcessCard;
