import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
   <h2 className="common-heading">Contact Page</h2>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1816.2696281176202!2d67.1360454912407!3d24.878926648604693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339775d4ac4eb%3A0x745b8390a8a6d657!2sPlot%20925%20C%2C%20Block%204%20Shah%20Faisal%20Colony%204%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075230%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688207986255!5m2!1sen!2s" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/maygwvor" method="POST" className="contact-inputs">
        <input type="text" placeholder="username" name="username" required autoComplete="off" />
        <input type="email" placeholder="Email" name="email" required autoComplete="off" />
        <textarea name="message" cols={30} rows={10} required autoComplete="off" placeholder="Enter your message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
   </div>
  </Wrapper>;
};

export default Contact;
