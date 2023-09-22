"use client";

import { useState } from "react";

const Education = () => {
  const educBackround = [
    {
      school: "PHINMA - University of Pangasnan",
      course: "Bachelor of Science in Computer Engineering",
      major: "Embedded Systems",
      year: "2019 - 2023",
    },
  ];

  return (
    <div>
      <ul>
        {educBackround.map((educ, idx) => (
          <li className="Styled_bullet tab__li" key={idx}>
            <div className=" tab__panel__container">
              <div>{educ.school}</div>
              <div>{educ.course}</div>
              <div>{educ.major}</div>
              <div>{educ.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WorkExperience = () => {
  const workExperiences = [
    {
      id: 1,
      work: "Freelance Graphic Designer, Video Editor, and Computer Specialist (Software and Hardware)",
      position: "Freelance",
      year: "2019-present",
    },
    {
      id: 2,
      work: "Software Developer at the NTC R1",
      position: "Software Developer",
      year: "2022",
    },
    {
      id: 3,
      work: "KIMBA Code (Freelance)",
      position: "Debugger",
      year: "2022",
    },
  ];

  return (
    <ul>
      {workExperiences.map((exp) => (
        <li className="Styled_bullet tab__li" key={exp.id}>
          <div className="tab__panel__container ">
            <div className=" ">{exp.work}</div>
            <div>{exp.position}</div>
            <div>{exp.year}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Experience = () => {
  const credentials = [
    {
      text: "Education",
      component: <Education />,
    },
    {
      text: "Work Experience",
      component: <WorkExperience />,
    },
  ];

  const [activeTab, setActiveTab] = useState("Education"); // Set the default active tab to "Education"

  return (
    <section className="cred__section">
      <div className=" Content__Sizing">
        <h1 className="Styled_h1">Background</h1>
        <div className="tab_container">
          <div className="tab-header">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className={`tab  ${
                  activeTab === cred.text ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(cred.text)}
              >
                <div className=" tab__text">{cred.text}</div>
              </div>
            ))}
          </div>
          <div className="tab-content">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className={`tab__panel ${
                  activeTab === cred.text ? "tab_panel_active" : "hidden"
                }`}
              >
                {cred.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
