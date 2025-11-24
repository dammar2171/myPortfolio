import "../css/ProgressiveBar.css";
const ProgressiveBar = () => {
  return (
    <div className="prograssivebar-container">
      <div className="progressive-label">
        <div className="label-label">
          <h5>HTML,CSS</h5>
          <span>80%</span>
        </div>
        <div className="progressive-bar" style={{ width: "80%" }}></div>
      </div>
      <div className="progressive-label">
        <div className="label-label">
          <h5>WordPress</h5>
          <span>85%</span>
        </div>
        <div className="progressive-bar" style={{ width: "85%" }}></div>
      </div>
      <div className="progressive-label">
        <div className="label-label">
          <h5>JavaScript</h5>
          <span>90%</span>
        </div>
        <div className="progressive-bar" style={{ width: "90%" }}></div>
      </div>
      <div className="progressive-label">
        <div className="label-label">
          <h5>PHP</h5>
          <span>70%</span>
        </div>
        <div className="progressive-bar" style={{ width: "70%" }}></div>
      </div>
      <div className="progressive-label">
        <div className="label-label">
          <h5>React JS</h5>
          <span>95%</span>
        </div>
        <div className="progressive-bar" style={{ width: "95%" }}></div>
      </div>
      <div className="progressive-label">
        <div className="label-label">
          <h5>Bootstrap</h5>
          <span>90%</span>
        </div>
        <div className="progressive-bar" style={{ width: "90%" }}></div>
      </div>
    </div>
  );
};
export default ProgressiveBar;
