const qualificationData = [
  {
    heading: "Secondary Education Examination(SEE)",
    school: "Baijnath Secondary School",
    subject: "Computer Engineering",
    date: "2076",
    gpa: "3.60",
  },
  {
    heading: "National Examination Board(NEB)",
    school: "Radiant Secondary School",
    subject: "Science",
    date: "2078",
    gpa: "2.70",
  },
  {
    heading: "Bachelor Education",
    school: "Janjyoti Multiple Campus",
    subject: "Bachelor in Computer Application(BCA)",
    date: "2079",
    gpa: "Still Running",
  },
];
const QualificationCard = () => {
  return (
    <>
    <div className="heading-education">Education</div>
      <div className="cardContainer-qualification">
        {qualificationData.map((item, index) => (
          <div className="card-qualification" key={index}>
            <h3>{item.heading}</h3>
            <h5 className="school-name">{item.school}</h5>
            <h5 className="subject">{item.subject}</h5>
            <div className="date-gpa">
              <span>{item.date}</span>
              <span className="gpa">{item.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default QualificationCard;
