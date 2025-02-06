import { useState } from "react";
import Layout from "../layout/layout";
import { motion } from "framer-motion";
import { siBuymeacoffee, siPaypal, siCashapp } from "simple-icons/icons";

export default function Donate() {
  return (
    <Layout title="Support me">
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
                  Support <span className="text-rose-500">me</span>
                </h1>
                <p className="text-gray-200 text-lg font-medium px-4">
                  Want to support me?
                </p>
              </div>
              <div className="mx-auto overflow-auto mt-4">
                <div className="grid gap-8 px-4 md:px-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  <a
                    href="https://www.buymeacoffee.com/joshsevero"
                    className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      className="mx-auto max-h-12"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{siBuymeacoffee.title}</title>
                      <path d={siBuymeacoffee.path} />
                    </svg>
                    <p className="text-white text-xl overflow-ellipsis">
                      Josh Severo
                    </p>
                  </a>
                  <a
                    href="https://www.paypal.com/paypalme/JoshuaSevero"
                    className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      className="mx-auto max-h-12"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{siPaypal.title}</title>
                      <path d={siPaypal.path} />
                    </svg>
                    <p className="text-white text-xl overflow-ellipsis">
                      Josh Severo
                    </p>
                  </a>
                  <a
                    href="https://cash.app/$divisionsol"
                    className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      className="mx-auto max-h-12"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{siCashapp.title}</title>
                      <path d={siCashapp.path} />
                    </svg>
                    <p className="text-white text-xl overflow-ellipsis">
                      $divisionsol
                    </p>
                  </a>
                  {/* <a href="https://www.buymeacoffee.com/joshsevero" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siBuymeacoffee.title}</title>
                                            <path d={siBuymeacoffee.path} />
                                        </svg>
                                        <p className="text-white text-xl overflow-ellipsis">Josh Severo</p>
                                    </a>
                                    <a href="https://www.buymeacoffee.com/joshsevero" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siBuymeacoffee.title}</title>
                                            <path d={siBuymeacoffee.path} />
                                        </svg>
                                        <p className="text-white text-xl overflow-ellipsis">Josh Severo</p>
                                    </a>
                                    <a href="https://www.buymeacoffee.com/joshsevero" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siBuymeacoffee.title}</title>
                                            <path d={siBuymeacoffee.path} />
                                        </svg>
                                        <p className="text-white text-xl overflow-ellipsis">Josh Severo</p>
                                    </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
