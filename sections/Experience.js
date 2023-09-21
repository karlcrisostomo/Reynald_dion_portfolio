const Experience = () => {
  const credentials = [
    {
      text: "Education",
      description:
        "Bachelor of Science in Computer Engineering Major in Embedded System PHINMA University of Pangasinan | 2023",
    },
    {
      text: "Work Experience",
      description: [
        {
          work: "Freelance Graphic Designer, Video Editor, and Computer Specialist (Software and Hardware)",
          position: "Freelance",
          year: "2019-present",
        },
        {
          work: "Software Developer at the NTC R1",
          position: "Software Developer",
          year: "2022",
        },
        {
          work: "KIMBA Code (Freelance)",
          position: "Debugger",
          year: "2022",
        },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="Styled__experience_section Content__Sizing">
          <div className="Cred__section ">
            <h1 className="Styled_h1">Background</h1>
            <ul>
              {credentials.map((credential, index) => (
                <li key={index}>
                  <strong>{credential.text}</strong>

                  {Array.isArray(credential.description) ? (
                    <ul className>
                      {credential.description.map((exp, expIndex) => (
                        <li className="Styled_bullet"  key={expIndex}>
                          {exp.work} ({exp.position}) - {exp.year}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="Styled_bullet">{credential.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
