import Image from "next/image";

const importAll = (item) => {
  return item.keys().map(item);
};

const images = importAll(
  require.context("public/projects", false, /\.(jpg|jpeg|png|gif)$/)
);


const imageInfo = [
  {
    src: images[0].default,
    alt: "Project 1",
    text: "IoT Poultry Feeding and Monitoring",
    description:
      "The thesis project utilized a NodeMCU as its core component and incorporated temperature and weight sensors to monitor feeding capacity. It was integrated with the Internet of Things (IoT) through the Blynk cloud platform to achieve the objective of automating scheduled chicken feeding",
  },
  {
    src: images[1].default,
    alt: "Project 2",
    text: "Arduino Password-Based Door Lock",
    description:
      "An Arduino project showcases the integration of a microcontroller, keypad, pushbutton, solenoid, and I2C LCD adapter to illustrate their collaboration in practical security and access control",
  },
  {
    src: images[2].default,
    alt: "Project 3",
    text: "Mananabaz JPI Advertisement Poster",
    description:
      "Mananabaz JPI Advertisement Poster Designed with Adobe Photoshop ",
  },
  {
    src: images[3].default,
    alt: "Project 4",
    text: "Inventory Management",
    description:
      "A simple inventory management system, this project utilized VB.NET with Excel as its database. It incorporates essential CRUD (Create, Read, Update, Delete) functionality, offering an efficient solution for inventory tracking and management.",
  },
  {
    src: images[4].default,
    alt: "Project 5",
    text: "NTC Region 1 2022 Mid-Year Assessment Poster",
    description: "NTC Region 1 2022 Mid-Year Assessment Designed with Adobe Photoshop",
  },
  {
    src: images[5].default,
    alt: "Project 2",
    text: "GTA V Martinez Familia Poster Design",
    description: "GTA V Martinez Familia Poster Design Designed With Adobe Photoshop",
  },
];

// Indices of items to reverse
const reverseIndices = [1, 3, 5];

const Projects = () => {
  return (
    <section id="works">
      <div className="Content__Sizing Styled__projects__section">
        <h1 className="Styled_h1">Some Things I've Built</h1>
        <div className="Project_img_list">
          {imageInfo.map((item, index) => (
            <div
              className={`Img_container ${
                reverseIndices.includes(index) ? 'Reverse_img' : ''
              }`}
              key={index}
            >
              <div className="Img_wrapper">
                <Image className="Img_content" src={item.src} alt={item.alt} />
              </div>
              <div className={`Img_info_container ${
                reverseIndices.includes(index) ? 'Reverse_info_container' : 'Even_info_container'
              }`} key={index}>
                <h1 className="Styled_h1">{item.text}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
