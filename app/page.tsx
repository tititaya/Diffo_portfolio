import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Header fixe en haut */}
      <Header />

      {/* Contenu principal */}
      <main className="mt-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Ornel Rony Diffo Tandjong. Tous droits réservés.
        </p>
      </footer>
    </>
  );
}
