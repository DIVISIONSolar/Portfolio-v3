import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <Layout title="My work">
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
              <div className="text-center mb-12">
                <h1 className="md:text-6xl text-3xl font-bold">
                  My <span className="text-rose-500">Work</span>
                </h1>
                <p className="text-gray-400 text-lg font-medium">
                  Professional experience & projects
                </p>
              </div>

              <div className="w-11/12 mx-auto space-y-14">

                {/* WORK EXPERIENCE */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">
                    Work <span className="text-rose-500">Experience</span>
                  </h2>

                  <div className="space-y-10">

                    {/* AJAX NETWORKS */}
                    <div>
                      <div className="flex justify-between flex-wrap mb-1">
                        <h3 className="text-xl font-semibold">
                          Ajax Networks, LLC
                        </h3>
                        <span className="text-gray-400">
                          February 2026 – Present
                        </span>
                      </div>

                      <p className="text-gray-300 font-medium mb-3">
                        Chief Networking Officer (COO)
                      </p>

                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li>
                          Direct high-level network architecture (BGP, VPN, failover) and manage infrastructure scalability to 
                          ensure maximum uptime.
                        </li>
                        <li>
                          Govern firewall policies and orchestrate DDoS mitigation and incident response procedures to protect
                          organizational assets.
                        </li>
                        <li>
                          Manage network reliability initiatives and perform hands-on assembly, repair, and maintenance of
                          physical server hardware.
                        </li>
                      </ul>
                    </div>

                    {/* SKYLINK */}
                    <div>
                      <div className="flex justify-between flex-wrap mb-1">
                        <h3 className="text-xl font-semibold">
                          Skylink Hosting LLC
                        </h3>
                        <span className="text-gray-400">
                          November 2025 – February 2026
                        </span>
                      </div>

                      <p className="text-gray-300 font-medium mb-3">
                        Chief Executive Officer (CEO)
                      </p>

                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li>
                          Founded and operated a compute hosting company
                          providing VPS, VDS, bare metal, and colocation
                          services
                        </li>
                        <li>
                          Directed infrastructure planning, hardware
                          procurement, and deployment strategies
                        </li>
                        <li>
                          Manage network reliability initiatives and perform hands-on assembly, repair, and maintenance of
                          physical server hardware.
                        </li>
                        <li>
                          Established Service Level Agreements (SLAs), uptime
                          standards, and customer support workflows
                        </li>
                        <li>
                          Oversaw pricing strategy, operational budgeting, and
                          service expansion initiatives
                        </li>
                      </ul>
                    </div>

                  </div>
                </section>

                {/* PROJECTS */}
                <section>
                  <h2 className="text-3xl font-bold mb-8">
                    Featured <span className="text-rose-500">Projects</span>
                  </h2>

                  <div className="grid gap-12 grid-cols-1 md:grid-cols-2">

                    {/* REVELA */}
                    {/* <div className="space-y-3">
                      <h3 className="text-2xl font-bold">Revela Network</h3>

                      <p className="text-gray-400 text-justify">
                        A sophisticated proxy designed for bypassing internet
                        censorship and accessing websites in a controlled
                        sandbox environment. It intercepts HTTP requests using
                        service workers following the TompHTTP specification.
                      </p>

                      <div className="flex space-x-5 pt-2">
                        <a
                          href="https://git.joshseveros.cloud/RevelaNetwork"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition"
                        >
                          Git Repository
                        </a>

                        <a
                          href="https://revela.network"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-400 hover:text-rose-300 transition"
                        >
                          Visit Project
                        </a>
                      </div>
                    </div> */}

                    {/* EQUINOX */}
                    {/* <div className="space-y-3">
                      <h3 className="text-2xl font-bold">Project Equinox</h3>

                      <p className="text-gray-400 text-justify">
                        A next-generation Discord bot featuring advanced
                        moderation tools, music, games, memes, weather data,
                        IP lookups, and additional utilities.
                      </p>

                      <div className="flex space-x-5 pt-2">
                        <a
                          href="https://git.joshseveros.cloud/JoshS/Project-Equinox"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition"
                        >
                          Git Repository
                        </a>

                        <a
                          href="https://equinox.joshsevero.dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-400 hover:text-rose-300 transition"
                        >
                          Visit Project
                        </a>
                      </div>
                    </div> */}

                  </div>
                </section>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}