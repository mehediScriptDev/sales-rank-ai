import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Chatsection from "./Components/Chatsection";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="w-11/12 mx-auto">
        <Header></Header>
        <Hero></Hero>
        <Chatsection></Chatsection>
        <Cards></Cards>
        </div>
      </section>
    </>
  );
}

export default App;
