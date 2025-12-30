import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.info}>Email: soundousbensaad@example.com</p>
      <p className={styles.info}>
        LinkedIn: <a href="https://linkedin.com/in/soundousbensaad" target="_blank" rel="noopener noreferrer">linkedin.com/in/soundousbensaad</a>
      </p>

      <form className={styles.form} action="https://formspree.io/f/yourFormID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
