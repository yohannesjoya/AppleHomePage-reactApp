
// IMPORTING STYLE SHEETS
// import "./commonResource/css/bootstrap.css"// caused an error
import 'bootstrap/dist/css/bootstrap.css';
import "./commonResource/css/styles.css"

//IMPORTING COMPONENTS
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AlertSection from './Components/Alert/AlertSection';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionSix from './Components/SectionSix/SectionSix';

function App() {
  return (
    <>
      <Header />
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix/>
      <Footer />
    
    
    </>
  );
}

export default App;
