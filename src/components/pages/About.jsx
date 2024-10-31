import { PaperClipIcon } from '@heroicons/react/20/solid'
import '../pages/About.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Example() {
    return (
        <>
            <Navbar></Navbar>
            <div className='bg-gradient-to-t from-gray-900 from-1% via-gray-800 via-50% to-gray-900 to-90%'>
                <div className="px-4 sm:px-0 pt-20">
                    <h3 className="text-3xl font-semibold text-gray-100">Maurizio Schiavarelli</h3>
                    <p className="mt-1 max-w-2xl text-lg text-gray-500">Personal details and application.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">Full name</dt>
                            <dd className="mt-1 text-lg text-gray-100 sm:col-span-2 sm:mt-0">Maurizio Schiavarelli</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">Application for</dt>
                            <dd className="mt-1 text-lg text-gray-100 sm:col-span-2 sm:mt-0">Frontend Developer</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">Email address</dt>
                            <dd className="mt-1 text-lg text-gray-100 sm:col-span-2 sm:mt-0">maurizioschiavarelli@gmail.com</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">Framework</dt>
                            <dd className="mt-1 text-lg text-gray-100 sm:col-span-2 sm:mt-0">Laravel, React</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">About</dt>
                            <dd className="mt-1 text-lg text-gray-100 sm:col-span-2 sm:mt-0">
                                Sono un appassionatosviluppatore JavaScript, sempre alla ricerca di opportunità per crescere e imparare. Attualmente sto studiando PHP con l obiettivo di diventare un Laravel Developer e un JavaScript Back-End Developer. Sono costantemente impegnato nella mia formazione e crescita professionale.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-medium text-gray-100">Attachments</dt>
                            <dd className="mt-2 text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-lg">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-lg">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
