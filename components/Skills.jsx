import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="py-20 p-4 md:p-8 bg-gray-100 dark:bg-primary">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-secondary dark:text-accent">Skills</h2>
    <div className="flex justify-center space-x-12">
      <FaReact className="text-6xl text-blue-500 dark:text-accent" />
      <FaNodeJs className="text-6xl text-green-500 dark:text-accent" />
      <FaJava className="text-6xl text-red-500 dark:text-accent" />
    </div>
  </div>
</section>

  );
}
