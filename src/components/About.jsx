import {
  FaUserSecret,
  FaShieldAlt,
  FaNetworkWired,
  FaBug,
  FaCodeBranch,
  FaTerminal,
  FaLock,
  FaSearch,
} from "react-icons/fa";
import {
  SiLinux,
  SiVirtualbox,
  SiDocker,
  SiPython,
  SiRedhat,
  SiSplunk,
  SiOpenvpn,
} from "react-icons/si";
import { GoVerified } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { GrDocumentThreat } from "react-icons/gr";
import { GiHammerBreak } from "react-icons/gi";
import { BsMicrosoft } from "react-icons/bs";
import { SiGooglecloudstorage } from "react-icons/si";
import { GoFileBinary } from "react-icons/go";





const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Sanjay Krishna OB</span>,
          a passionate cybersecurity enthusiast specializing in malware analysis
          and threat hunting. I am committed to protecting digital environments 
          by identifying vulnerabilities and mitigating cyber threats.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaBug size={40} className="text-[#d9534f]" />
              <span className="font-bold">Malware Analysis</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaSearch size={40} className="text-[#5bc0de]" />
              <span className="font-bold">Cybersecurity Research</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaShieldAlt size={40} className="text-[#f0ad4e]" />
              <span className="font-bold">OS Hardening</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GiHammerBreak size={40} className="text-[#5cb85c]" />
              <span className="font-bold">Dissecting Malware</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiLinux size={40} className="text-[#f7df1e]" />
              <span className="font-bold">Linux</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiVirtualbox size={40} className="text-[#0078d7]" />
              <span className="font-bold">Virtualization</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiPython size={40} className="text-[#3776ab]" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaTerminal size={40} className="text-[#333]" />
              <span className="font-bold">Command Line (CLI)</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BsMicrosoft size={40} className="text-[#00a4ef]" />
              <span className="font-bold">Microsoft Security Solutions</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiGooglecloudstorage size={40} className="text-[#2496ed]" />
              <span className="font-bold">Cloud OS Deployment</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GrDocumentThreat size={40} className="text-[#00aa41]" />
              <span className="font-bold">Threat Hunting</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNetworkWired size={40} className="text-[#f0db4f]" />
              <span className="font-bold">Network Security</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaComputer size={40} className="text-[#cc0000]" />
              <span className="font-bold">Endpoint Security</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GoVerified size={40} className="text-[#f97316]" />
              <span className="font-bold">Governance, Risk, and Compliance</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BsGraphUp size={40} className="text-[#0d6efd]" />
              <span className="font-bold">Threat and Vulnerability Management</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <GoFileBinary size={40} className="text-[#0d6efd]" />
              <span className="font-bold">C Language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
