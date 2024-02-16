import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Card from "./Card";
import CustomCarousel from "./CustomCarousel";
import Footer from "./Footer";
import Form from "./Form";
import NavbarHook from "./Navbar";
import Dissplay from "./Dissplay";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarHook />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/carousel" element={<CustomCarousel />} />
        <Route path="/form" element={<Form />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/dissplay" element={<Dissplay/>} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => (
  <>
    <CustomCarousel />
    <Card />
    <Form />
    <Dissplay/>
    <Footer />

  </>
);

export default App;
