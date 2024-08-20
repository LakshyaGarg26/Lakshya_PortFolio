import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 p-4 md:p-8 bg-gray-800 dark:bg-primary text-white text-center">
  <h2 className="text-4xl font-bold mb-6 text-accent">Contact Me</h2>
  <p className="text-lg mb-4 text-secondary dark:text-accent">Feel free to reach out via email or connect on LinkedIn.</p>
  <div className="flex justify-center space-x-6">
    <a href="https://www.linkedin.com/in/lakshya-garg-831384247/" target="_blank" rel="noreferrer">
      <FaLinkedin className="text-4xl text-white dark:text-accent" />
    </a>
    <a href="https://github.com/LakshyaGarg26" target="_blank" rel="noreferrer">
      <FaGithub className="text-4xl text-white dark:text-accent" />
    </a>
    <a href="mailto:garglakshya2063@gmail.com">
      <FaEnvelope className="text-4xl text-white dark:text-accent" />
    </a>
  </div>
</section>

  );
}
