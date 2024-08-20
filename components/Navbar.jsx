import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-gray-800 dark:bg-primary text-white p-4 md:p-6 fixed w-full z-10">
  <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Lakshya Garg</h1>
        <div className="flex items-center">
          <Link href="#about" className="mx-2 hover:text-accent">About</Link>
          <Link href="#projects" className="mx-2 hover:text-accent">Projects</Link>
          <Link href="#certificates" className="mx-2 hover:text-accent">Certificates</Link>
          <Link href="#contact" className="mx-2 hover:text-accent">Contact</Link>
        
        </div>
      </div>
    </nav>
  );
}
