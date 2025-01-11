import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Sanjay Krishna OB. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium font-bold">
          “Security is not a product, but a process.” — Bruce Schneier
        </p>
        <p className="text-sm md:text-base font-medium">
          Made by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Sanjay Krishna OB
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Sanjaykrishnaob"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjaykrishnaob/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;