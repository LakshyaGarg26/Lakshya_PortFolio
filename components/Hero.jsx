export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 dark:from-primary dark:to-secondary">
      <h1 className="text-6xl font-bold text-white dark:text-accent mb-4">
        Hi all, I'm Lakshya 👋
      </h1>
      <p className="text-2xl text-white dark:text-secondary mb-8">
        Full Stack Developer with expertise in JavaScript, React, and Node.js.
      </p>
      <div className="space-x-4">
        <a
          href="#contact"
          className="bg-accent text-black px-6 py-3 rounded-full text-lg dark:bg-secondary dark:text-white"
        >
          Let's Connect
        </a>
        <a
          href="/Lakshya-Garg-Resume.pdf" // Link to the PDF file in the public folder
          download="Lakshya-Garg-Resume.pdf" // Ensures the file is downloaded
          className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full text-lg dark:border-secondary dark:text-secondary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
