const certificates = [
  "Coding Ninjas Advanced Web Development",
  "Cisco Introduction to Cybersecurity",
  "AWS Cloud Computing",
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 p-4 md:p-8 bg-gray-200 dark:bg-primary">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-primary dark:text-accent">Certificates</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((cert, index) => (
        <li key={index} className="bg-white dark:bg-secondary p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary dark:text-accent">{cert}</h3>
        </li>
      ))}
    </ul>
  </div>
</section>

  );
}
