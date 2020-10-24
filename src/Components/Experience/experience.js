import React, { useState } from "react";
import { data } from "../../Static";
import "./experience.scss";

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { experience } = data;
  const expList = [...experience.work_places].reverse();

  const handleExperienceDate = (startY, endY, startMo, endMo) => {
    if (!startY) return "-";
    return !startMo || !endMo
      ? `${startY} - ${endY ? endY : "Present"}`
      : `${startMo} ${startY} - ${endY ? `${endMo} ${endY}` : "Present"}`;
  };

  const handleChangeTab = (tabIndex) => {
    return () => setSelectedTab(tabIndex);
  };

  return (
    <section
      id="experience"
      className="experience-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <div className="experience inner-wrapper">
        <h1>{experience.title}</h1>
        <div>
          <ul className="work-place-container">
            {expList.map((exp, index) => (
              <li
                className={`experience-item ${
                  index === selectedTab && "active"
                }`}
                key={Math.random() + exp.company}
              >
                <button onClick={handleChangeTab(index)}>
                  <p>{exp.company}</p>
                </button>
              </li>
            ))}
          </ul>
          <div className="experience-details">
            <h1>{expList[selectedTab].role}</h1>
            <p className="date">
              {handleExperienceDate(
                expList[selectedTab].dates.startYear,
                expList[selectedTab].dates.endYear,
                expList[selectedTab].dates.startMonth,
                expList[selectedTab].dates.endMonth
              )}
            </p>
            <ul className="experience-responsibilities">
              {expList[selectedTab].responsibilities.map((responsibility) => (
                <li>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
