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
            >
              <div className="text-center">
                <h1 className="md:text-6xl text-3xl font-bold">
                  My <span className="text-rose-500">certifications</span>
                </h1>
                <p className="text-gray-200 text-lg font-medium px-4">
                  Verified Certifications
                </p>
              </div>
              <div className="relative w-11/12 mx-auto overflow-auto">
                <div className="w-full grid gap-20 grid-cols-1 md:grid-cols-2 md:p-16 p-4">
                  <div className="flex-grow space-y-2">
                    <h1 className="text-3xl font-bold">
                      TestOut IT Fundamentals Pro
                    </h1>
                    <p className="text-gray-400 py- text-justify">
                      This exam tests your foundational knowledge and ability to
                      perform real-world tasks using operating systems, common
                      PC hardware and software, basic networking, databases,
                      programming, security, and information systems. The exam
                      covers content that is taught in the TestOut IT
                      Fundamentals Pro course. Students should have completed
                      this course (or its equivalent) before attempting this
                      exam.
                    </p>
                    <div className="flex space-x-2">
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/TestOut_IT_Fundamentals_Pro.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                      <a
                        className="rounded-full"
                        href="https://certification.testout.com/verifycert/6-1C6-VFTBGW"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h1 className="text-3xl font-bold">PFEW Awards</h1>
                    <p className="text-gray-400 py- text-justify">
                      PFEW is an educational program aimed at high school
                      students in Pennsylvania. It provides them with hands-on
                      experience in running a business through a simulated
                      environment. Participants learn about entrepreneurship,
                      business management, finance, and teamwork during a
                      week-long residential program. PFEW aims to foster
                      leadership skills and prepare students for future careers
                      in business and entrepreneurship.
                    </p>
                    <div className="flex space-x-2">
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-Participation.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-RoE.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h1 className="text-3xl font-bold">
                      Microsoft Office Specialist (Associate)
                    </h1>
                    <p className="text-gray-400 py- text-justify">
                      A Microsoft Office Specialist Word Associate in Microsoft
                      365 Apps is certified in using Microsoft Word. They
                      demonstrate proficiency in creating, managing, and
                      formatting documents, as well as collaborating with others
                      using Word features. This certification validates
                      essential Word skills for productivity in a professional
                      setting.
                    </p>
                    <div className="flex space-x-2">
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Associate_Microsoft_365_Apps.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Excel_Associate_Microsoft_365_Apps.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h1 className="text-3xl font-bold">
                      Microsoft Office Specialist (Expert)
                    </h1>
                    <p className="text-gray-400 py- text-justify">
                      A Microsoft Office Specialist Word Expert in Microsoft 365
                      Apps is certified in using Microsoft Word. They
                      demonstrate proficiency in creating, managing, and
                      formatting documents, as well as collaborating with others
                      using Word features. This certification validates
                      essential Word skills for productivity in a professional
                      setting.
                    </p>
                    <div className="flex space-x-2">
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Expert_Microsoft_365_Apps.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                      {/* <a className="rounded-full" href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-RoE.pdf" target="_blank">
                                                <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a> */}
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h1 className="text-3xl font-bold">
                      Information Technology Specialist in Networking
                    </h1>
                    <p className="text-gray-400 py- text-justify">
                      An Information Technology Specialist in Networking for
                      Certiport is certified in the installation, configuration,
                      and management of network systems. They demonstrate
                      proficiency in troubleshooting, optimizing, and securing
                      networks, ensuring efficient communication and
                      connectivity within an organization. This certification
                      validates essential networking skills, providing
                      foundational knowledge for managing and supporting modern
                      IT infrastructure.
                    </p>
                    <div className="flex space-x-2">
                      <a
                        className="rounded-full"
                        href="https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Certiport_Information_Technology_Specialist_in_Networking.pdf"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                      <a
                        className="rounded-full"
                        href="https://certification.testout.com/verifycert/6-1C6-VFTBGW"
                        target="_blank"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Link</title>
                          <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                          <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                          <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                        </svg>
                      </a>
                    </div>
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
