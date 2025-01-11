const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Deployed Wazuh SIEM for Threat Detection and Monitoring
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            I successfully deployed Wazuh, an open-source 
            Security Information and Event Management (SIEM) solution,
             to strengthen centralized monitoring and threat detection.
             I Configured Wazuh agents on a Windows host and set up the Wazuh manager
            on a Linux server hosted in a virtualized environment.
            </p>
          </div>

          
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
            Router Configuration & Network Hardening with Cisco Packet Tracer
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Used Cisco Packet Tracer to set up and secure network routers, 
            applying essential configurations for improved security and control
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Built Malware Analysis Lab
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Built malware analysis lab on a VM using Flare, Which I used for Static and Dynamic Malware Analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
