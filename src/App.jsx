import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Chatsection from "./Components/Chatsection";
import Cards from "./Components/Cards";
import Aq from "./Components/Aq";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <section className="bg-gray-100 overflow-hidden">
        <div className="w-11/12 mx-auto">
        <Header></Header>
        <Hero></Hero>
        <Chatsection></Chatsection>
        <Cards></Cards>
        <Aq></Aq>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
