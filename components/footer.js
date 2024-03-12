import {useState} from 'react';
import Link from "next/link";
import { siGithub, siDiscord, siTwitter, siInstagram } from 'simple-icons/icons';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const initialDiscordText = 'DIVISIONSolar';
    const [discordText, setDiscordText] = useState(initialDiscordText);

    function handleDiscordClick() {
        navigator.clipboard.writeText("DIVISIONSolar").then(r => {
            setDiscordText('Copied to clipboard!');

            setTimeout(() => {
                setDiscordText(initialDiscordText);
            }, 1000);
        });
    }

    return (
        <>
            <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-xl">
                    © {(new Date().getFullYear())}
                    {" "}
                        <a>Josh S.</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-4 md:gap-2.5">
                    <a href="mailto:me@joshsevero.dev" className="text-gray-400">
                        <Mail className="w-5 h-5">
                            <title>Email</title>
                        </Mail>
                    </a>
                    <a href="https://git.joshseveros.cloud/JoshS/" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siGithub.title}</title>
                            <path d={siGithub.path} />
                        </svg>
                    </a>
                    <button onClick={handleDiscordClick} className="text-gray-400 has-tooltip cursor-pointer hover:text-rose-600 duration-200">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siDiscord.title}</title>
                            <path d={siDiscord.path} />
                        </svg>
                        <span className='tooltip bg-gray-800 text-white rounded shadow-lg p-1 -mt-14'>{discordText}</span>
                    </button>
                    <a href="https://joshsevero.dev/linkedin" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <Linkedin fill="currentColor" strokeWidth="0" className="w-5 h-5">
                            <title>Linkedin</title>
                        </Linkedin>
                    </a>
                    <a href="" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siTwitter.title}</title>
                            <path d={siTwitter.path} />
                        </svg>
                    </a>
                    <a href="" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siInstagram.title}</title>
                            <path d={siInstagram.path} />
                        </svg>
                    </a>
                </span>
            </footer>
        </>
    )
}
