import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA (Master of Computer Application)</h4>
                <h5>Bhartiya Vidhyapeeth's Institute of Management & IT</h5>
              </div>
              <h3>2025–27</h3>
            </div>
            <p>
              Pursuing Master's degree at Mumbai University, deepening expertise in software engineering, scalable systems, and advanced AI technologies. <em>[Pursuing]</em>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSC (Information Technology)</h4>
                <h5>Pillai University — Mumbai University</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Graduated with a CGPI of 6.37. Built a strong foundation in programming, database management, and web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (Information Technology)</h4>
                <h5>D.Y Patil Junior College — Maharashtra State Board</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Completed HSC with 80.17%, specializing in Information Technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Awards &<br />Certifications</h4>
                <h5>Hackathons & Courses</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              🏆 Best Problem-Solving Award in UAI Hawkethon 2026.
              <br />
              🥈 Second prize in Mumbai University Youth Fest 2023.
              <br />
              Certifications: Data Science in Python & Data Science Capstone (Coursera), JavaScript, Bootstrap & PHP (Udemy).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
