
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import HeaderDocs from '../HeaderDocs'; // Assicurati di importare il componente HeaderDocs

export default function MainPage() {
  return (
    <>
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDocs
            title="Guida completa alle basi teoriche di"
            imgUrl="/src/assets/heroImg.jpg"
            subTitle="Javascript"
            description=" é il principale linguaggio per lo sviluppo frontend, con questa guida imparerai a padroneggiare il linguaggio fino ad arrivare alla manipolazione del DOM"
          />
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
          <HeaderDocs></HeaderDocs>
        </div>
      </div>

      <Footer />
    </>
  );
}
