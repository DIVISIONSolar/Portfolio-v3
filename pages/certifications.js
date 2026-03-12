import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <Layout title="My Certifications">
      <div className="flex flex-grow items-center">
        <div className="w-full">
          <div className="container flex mx-auto justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* HEADER */}
              <div className="text-center mb-14">
                <h1 className="md:text-6xl text-3xl font-bold">
                  My <span className="text-rose-500">Certifications</span>
                </h1>
                <p className="text-gray-400 text-lg font-medium">
                  Professional certifications and technical credentials
                </p>
              </div>

              <div className="w-11/12 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">

                {/* CERT */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">
                    TestOut IT Fundamentals Pro
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Issued by TestOut • Industry certification validating
                    foundational IT knowledge across computer hardware,
                    operating systems, networking, cybersecurity, databases,
                    and programming fundamentals.
                  </p>

                  <p className="text-gray-500 text-sm">
                    Skills: PC Hardware • Networking Basics • Cybersecurity •
                    Operating Systems • IT Troubleshooting
                  </p>

                  <div className="flex space-x-6 pt-2 text-sm">
                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/TestOut_IT_Fundamentals_Pro.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 transition"
                    >
                      View Certificate
                    </a>

                    <a
                      href="https://certification.testout.com/verifycert/6-1C6-VFTBGW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Verify Credential
                    </a>
                  </div>
                </div>

                {/* CERT */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">
                    Pennsylvania Free Enterprise Week
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Business and leadership program focused on entrepreneurship,
                    corporate management, and real-world business simulations.
                  </p>

                  <p className="text-gray-500 text-sm">
                    Skills: Business Strategy • Financial Planning • Leadership
                    • Entrepreneurship
                  </p>

                  <div className="flex space-x-6 pt-2 text-sm">
                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-Participation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 transition"
                    >
                      Participation Certificate
                    </a>

                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-RoE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Recognition of Excellence
                    </a>
                  </div>
                </div>

                {/* CERT */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">
                    Microsoft Office Specialist — Associate
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Certification validating professional proficiency with
                    Microsoft Word and Excel for productivity, collaboration,
                    and document management workflows.
                  </p>

                  <p className="text-gray-500 text-sm">
                    Skills: Microsoft Word • Microsoft Excel • Data Analysis •
                    Document Formatting
                  </p>

                  <div className="flex space-x-6 pt-2 text-sm">
                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Associate_Microsoft_365_Apps.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 transition"
                    >
                      Word Certificate
                    </a>

                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Excel_Associate_Microsoft_365_Apps.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Excel Certificate
                    </a>
                  </div>
                </div>

                {/* CERT */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">
                    Microsoft Office Specialist — Expert
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Advanced certification demonstrating expert-level knowledge
                    of Microsoft Word including advanced formatting,
                    collaboration features, and document automation.
                  </p>

                  <p className="text-gray-500 text-sm">
                    Skills: Advanced Word Formatting • Templates • Document
                    Automation • Collaboration Tools
                  </p>

                  <div className="flex space-x-6 pt-2 text-sm">
                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Expert_Microsoft_365_Apps.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* CERT */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">
                    Information Technology Specialist — Networking
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Certification validating knowledge of network installation,
                    configuration, troubleshooting, and security across
                    enterprise networking environments.
                  </p>

                  <p className="text-gray-500 text-sm">
                    Skills: Network Infrastructure • TCP/IP • Routing • Network
                    Security • Troubleshooting
                  </p>

                  <div className="flex space-x-6 pt-2 text-sm">
                    <a
                      href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Certiport_Information_Technology_Specialist_in_Networking.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}