import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Sanjay Krishna OB</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a Cybersecurity Researcher</span>
            <Typewriter
              options={{
                strings: [
                  "Malware Analyst.",
                  "Threat Hunter.",
                  "Cybersecurity Enthusiast.",
                  "Blue Team Analyst.",
                  "Astrophotographer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            As a passionate in cybersecurity, specializing in malware analysis,
            I am committed to protecting digital environments from evolving
            threats. With a deep understanding of malware behavior, I excel in
            identifying malware and mitigating cyber threats.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Chennai</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>sanjaykrishnaaob@gmail.com</span>
            </div>
          </div>

          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold">
            <a
              href="https://drive.google.com/file/d/1PBY5nDb3jUHk2VzL3khZhhQo-pqNLiPy/view?usp=sharing" // Replace this with your resume link
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[50px]"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
