import Navbar from '../Navbar';
import Footer from '../Footer'
import './Javascript.css';
import Sidebar from '../Sidebar';

export default function Javascript() {

  return (
    <>
      <Navbar></Navbar>
      <header className="w-full py-8 bg-gray-800">
        <div className="w-full my-20">
          <div className="relative container w-100% mx-auto my-auto text-center bg-gray-900 rounded-lg shadow-2xl shadow-black">
            <div className="absolute inset-0 bg-[url(./assets/heroImg.jpg)] opacity-40 blur-sm"></div>
            <div className="relative z-1 p-8">
              <h1
                color="white"
                className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl">
                Guida completa alle basi teoriche di
                <span className="leading-snug noteBuddy text-orange-900"> Javascript</span>
              </h1>
              <h2
                className="mx-auto w-full !text-white lg:text-lg text-base">
                <span className="leading-snug text-orange-900">Javascript</span> é il principale linguaggio per lo sviluppo frontend, con questa guida imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM
              </h2>
            </div>
          </div>
        </div>
      </header>

      <Sidebar></Sidebar>
      <Footer></Footer>
    </>
  )
}