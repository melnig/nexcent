import "./App.css";
import "@fontsource/roboto";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
