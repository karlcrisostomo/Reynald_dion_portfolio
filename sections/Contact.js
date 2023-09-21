const Contact = () => {
  const email = "nalddion@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <section>
        <div className="Content__Sizing Styled__Contact_Section">
          <h1>Get in Touch</h1>

          <p>
            I'm actively looking for opportunities, and you can always reach out
            to me. I'll do my best to respond quickly, whether you have
            questions or just want to connect!
          </p>

          <button onClick={handleEmailClick}>Email Me</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
