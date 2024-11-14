import { Typography } from "@material-tailwind/react";

const Links = [
    {
        title: "Tecnologie utilizzate",
        items: ["React", "Vite", "Tailwind"],
    },
    {
        title: "Docs",
        items: ["Javascript", "React", "PHP", "Laravel"],
    },
    {
        title: "About me",
        items: ["Portfolio", "Curriculum", "LinkedIn", "GitHub"],
    },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bottom-0 w-full pt-8 bg-gray-900">
            <div className="mx-auto w-full max-w-8xl px-8">

                {/* Sezione link */}
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h4" className="mb-6 text-white underline">
                        NoteBuddy
                    </Typography>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {Links.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    className="mb-3 font-bold text-white"
                                >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            color="gray"
                                            className="py-1.5 font-normal transition-colors text-gray-100 hover:text-white"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-gray-100 md:mb-0"
                    >
                        &copy; {currentYear} <a href="#">NoteBuddy</a>. Tutti i diritti riservati.
                    </Typography>

                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography
                            as="a"
                            href="#"
                            className="text-white opacity-80 transition-opacity hover:opacity-100"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="text-white opacity-80 transition-opacity hover:opacity-100"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.5v-10h3.5v10zm-1.75-11.25c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm13.25 11.25h-3.5v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3.5v-10h3.5v1.5c.878-1.172 2.172-1.5 3.5-1.5 2.481 0 4.5 2.019 4.5 4.5v5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
