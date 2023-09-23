import Image from "next/image";

const About = () => {
  const techSkills = [
    "Arduino",
    "C++",
    "C Language",
    "C#",
    "Python",
    "Internet of Things",
    "Circuit Design",
    "CAD",
    "Embedded Systems",
    "Photo Editing",
    "Graphic Designing ",
    "Visual Basic",
  ];
  return (
    <>
      <section className="Styled__about_section ">
        <div className="Content__Sizing ">
          <h1 className="Styled_h1">About Me</h1>
          <div className="About__container">
            <div>
              <p>
                I am <span>Reynald Jessamine C. Dion</span>, a{" "}
                <span>Computer Engineer</span> with two years of experience in
                photo editing, meme creation, programming, and automation.
                Today, I am a full-time freelancer who is passionate about
                unleashing creativity in all aspects of my work.
              </p>
              <div>
                <ul>
                  {techSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Image
                className="Nald__img"
                src="/assets/2x2.jpg"
                width={500}
                height={500}
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
