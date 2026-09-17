import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default Home;