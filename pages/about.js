import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout title="About me">
      <div className="flex flex-grow items-center">
        <div className="w-full">
          <div className="container flex mx-auto justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-center md:text-6xl text-3xl font-bold">
                About <span className="text-rose-500">me</span>
              </h1>

              <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                  <p>
                    Hey, I'm Josh — a 19-year-old infrastructure enthusiast from
                    the United States. I've been working with computers since I
                    was 12, learning through years of hands-on experimentation
                    with servers, networking, and systems.
                  </p>

                  <p>
                    Most of my experience comes from building and managing
                    real-world infrastructure, self-hosting services, and
                    experimenting with different technologies to better
                    understand how systems work at scale.
                  </p>

                  <div className="space-y-2">
                    <p>Systems & infrastructure I work with:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Linux"
                        src="https://img.shields.io/badge/-Linux-18181b?style=for-the-badge&logo=linux&logoColor=F43F5E"
                      />
                      <img
                        alt="Proxmox"
                        src="https://img.shields.io/badge/-Proxmox-18181b?style=for-the-badge&logo=proxmox&logoColor=F43F5E"
                      />
                      <img
                        alt="Docker"
                        src="https://img.shields.io/badge/-Docker-18181b?style=for-the-badge&logo=docker&logoColor=F43F5E"
                      />
                      <img
                        alt="NGINX"
                        src="https://img.shields.io/badge/-NGINX-18181b?style=for-the-badge&logo=nginx&logoColor=F43F5E"
                      />
                      <img
                        alt="PostgreSQL"
                        src="https://img.shields.io/badge/-PostgreSQL-18181b?style=for-the-badge&logo=postgresql&logoColor=F43F5E"
                      />
                    </div>

                    <p>Networking & privacy tools:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="WireGuard"
                        src="https://img.shields.io/badge/-WireGuard-18181b?style=for-the-badge&logo=wireguard&logoColor=F43F5E"
                      />
                      <img
                        alt="Tor"
                        src="https://img.shields.io/badge/-Tor-18181b?style=for-the-badge&logo=torproject&logoColor=F43F5E"
                      />
                      <img
                        alt="Cloudflare"
                        src="https://img.shields.io/badge/-Cloudflare-18181b?style=for-the-badge&logo=cloudflare&logoColor=F43F5E"
                      />
                    </div>

                    <p>Development & scripting:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Bash"
                        src="https://img.shields.io/badge/-Bash-18181b?style=for-the-badge&logo=gnubash&logoColor=F43F5E"
                      />
                      <img
                        alt="Go"
                        src="https://img.shields.io/badge/-Go-18181b?style=for-the-badge&logo=go&logoColor=F43F5E"
                      />
                      <img
                        alt="Git"
                        src="https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=F43F5E"
                      />
                    </div>

                    <p>Operating systems I use:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Linux"
                        src="https://img.shields.io/badge/-Linux-18181b?style=for-the-badge&logo=linux&logoColor=F43F5E"
                      />
                      <img
                        alt="Windows"
                        src="https://img.shields.io/badge/-Windows-18181b?style=for-the-badge&logo=windows&logoColor=F43F5E"
                      />
                    </div>

                    <p>Currently exploring:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                      <img
                        alt="Go"
                        src="https://img.shields.io/badge/-Go-18181b?style=for-the-badge&logo=go&logoColor=F43F5E"
                      />
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