import Layout from "../layout/layout";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Information Technology Specialist — Networking",
    description:
      "Certification validating knowledge of network installation, configuration, troubleshooting, and security across enterprise networking environments.",
    skills:
      "Network Infrastructure • TCP/IP • Routing • Network Security • Troubleshooting",
    links: [
      {
        label: "View Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Certiport_Information_Technology_Specialist_in_Networking.pdf",
        primary: true,
      },
    ],
  },
  {
    title: "CompTIA A+ Certified Professional",
    description:
      "Issued by CompTIA • Industry-recognized certification validating foundational IT skills across hardware, software, networking, security, and troubleshooting for IT support roles.",
    skills:
      "PC Hardware • Operating Systems • Networking Basics • Cybersecurity • IT Troubleshooting",
    links: [
      {
        label: "View Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/CompTIA_APlus.pdf",
        primary: true,
      },
      {
        label: "Verify Credential",
        href: "https://cp.certmetrics.com/CompTIA/en/public/verify/credential/e882994df5824910ba062e03f62b1320",
      },
    ],
  },
  {
    title: "CompTIA Network+ Certified Professional",
    description:
      "Issued by CompTIA • Validates core networking skills including configuration, troubleshooting, security, and network infrastructure.",
    skills:
      "Network Fundamentals • IP Addressing (IPv4/IPv6) • Routing & Switching • Network Troubleshooting • Network Security • Wireless Networking • Network Protocols (TCP/IP, DNS, DHCP) • Subnetting • VPNs & Firewalls • Network Infrastructure",
    links: [
      {
        label: "View Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/CompTIA_NetworkPlus.pdf",
        primary: true,
      },
      {
        label: "Verify Credential",
        href: "https://cp.certmetrics.com/CompTIA/en/public/verify/credential/89a2d93ff17344b8a89d82f5656f2e6e",
      },
    ],
  },
  {
    title: "TestOut IT Fundamentals Pro",
    description:
      "Issued by TestOut • Industry certification validating foundational IT knowledge across computer hardware, operating systems, networking, cybersecurity, databases, and programming fundamentals.",
    skills:
      "PC Hardware • Networking Basics • Cybersecurity • Operating Systems • IT Troubleshooting",
    links: [
      {
        label: "View Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/TestOut_IT_Fundamentals_Pro.pdf",
        primary: true,
      },
      {
        label: "Verify Credential",
        href: "https://certification.testout.com/verifycert/6-1C6-VFTBGW",
      },
    ],
  },
  {
    title: "Pennsylvania Free Enterprise Week",
    description:
      "Business and leadership program focused on entrepreneurship, corporate management, and real-world business simulations.",
    skills:
      "Business Strategy • Financial Planning • Leadership • Entrepreneurship",
    links: [
      {
        label: "Participation Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-Participation.pdf",
        primary: true,
      },
      {
        label: "Recognition of Excellence",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/PFEW-RoE.pdf",
      },
    ],
  },
  {
    title: "Microsoft Office Specialist — Associate",
    description:
      "Certification validating professional proficiency with Microsoft Word and Excel for productivity, collaboration, and document management workflows.",
    skills:
      "Microsoft Word • Microsoft Excel • Data Analysis • Document Formatting",
    links: [
      {
        label: "Word Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Associate_Microsoft_365_Apps.pdf",
        primary: true,
      },
      {
        label: "Excel Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Excel_Associate_Microsoft_365_Apps.pdf",
      },
    ],
  },
  {
    title: "Microsoft Office Specialist — Expert",
    description:
      "Advanced certification demonstrating expert-level knowledge of Microsoft Word including advanced formatting, collaboration features, and document automation.",
    skills:
      "Advanced Word Formatting • Templates • Document Automation • Collaboration Tools",
    links: [
      {
        label: "View Certificate",
        href: "https://cdn.joshsevero.dev/Static/Portfolio/Certifications/Microsoft_Office_Specialist_Word_Expert_Microsoft_365_Apps.pdf",
        primary: true,
      },
    ],
  },
];

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

              {/* GRID */}
              <div className="w-11/12 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-2xl font-bold">{cert.title}</h2>

                    <p className="text-gray-400 text-sm">
                      {cert.description}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Skills: {cert.skills}
                    </p>

                    <div className="flex space-x-6 pt-2 text-sm">
                      {cert.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition ${
                            link.primary
                              ? "text-rose-400 hover:text-rose-300"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}