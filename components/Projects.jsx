const projects = [
  {
    title: "Crypto Currency Exchange Website",
    description: "A platform for trading cryptocurrencies with live prices fetched via APIs.",
    tech: "React, JavaScript",
  },
  {
    title: "Employee Payroll System",
    description: "A payroll system for managing employee data using Java.",
    tech: "Java, OOP",
  },
  {
    "title": "Video-Hub",
    "description": "A platform to showcase branded videos in a clean, organized, and distraction-free environment.",
    "tech": "React, Chakra UI"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 p-4 md:p-8 bg-white dark:bg-secondary">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-100 dark:bg-primary p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">{project.title}</h3>
          <p className="mb-4 text-secondary dark:text-accent">{project.description}</p>
          <span className="text-gray-600 dark:text-accent">{project.tech}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
