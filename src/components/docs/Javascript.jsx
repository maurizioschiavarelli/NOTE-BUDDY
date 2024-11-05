
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import HeaderDocs from '../HeaderDocs';
import SidebarLink from '../SidebarLink';

export default function JavascriptHome() {
  return (
    <>
      <Navbar />
      
      <div className="flex">
        <Sidebar >
          <SidebarLink>ciao</SidebarLink>
          <SidebarLink>ciao</SidebarLink>
        </Sidebar>
        <div className="flex-1">
          <HeaderDocs
            title="Guida completa alle basi teoriche di"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Javascript"
            description=" é il principale linguaggio per lo sviluppo frontend, con questa guida imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
