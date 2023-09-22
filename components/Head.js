
const Head = () => {
  const resumePdfUrl = "/Resume-Dion.pdf"; 

  const openResume = () => {
    window.open(resumePdfUrl, "_blank");
  };

  return (
    <>
      <section className="Header">
        <div className="Styled__Header Content__Sizing  ">
          <sub>Hi, my name is </sub>
          <header  className="Styled_h1 mt-2">Reynald Jessamine Dion</header>
          <p>
            A computer engineer fueled by passion, known for my innovative flair
            and knack for tackling complex challenges.
          </p>

          <button className="Head__btn" onClick={openResume}>
            RESUME
          </button>
        </div>
      </section>
    </>
  );
};

export default Head;
