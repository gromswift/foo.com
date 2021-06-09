import styles from './ContactUs.module.scss';

function ContactUs() {
  return (
    <div className={styles.contentContainer}>
      <h3 className={styles.titleMinor}>Contact Us</h3>
      <h2 className={styles.title}>Get in Touch</h2>
      <form action="/" method="post">
        <input type="email" className={styles.input} placeholder="Your email" required />
        <input type="text" className={styles.input}  placeholder="Subject" required />
        <textarea className={styles.input} placeholder="Message here..." required />
        <button  type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
