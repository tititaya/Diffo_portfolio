import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4"
    >
      {/* Photo de profil */}
      <Image
        src="/images/diffo.jpg" // Chemin mis à jour pour le fichier JPG
        alt="Photo de profil d'Ornel Rony"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
        />

      {/* Nom et présentation */}
      <h2 className="text-4xl font-bold mt-4">Hey 👋, Je suis Ornel Rony</h2>
      <p className="text-lg mt-4 max-w-lg">
        Étudiant en M1 Systèmes Embarqués, passionné par l’électronique, le développement de
        systèmes embarqués, et la résolution de problèmes techniques.
      </p>

      {/* Boutons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition-colors"
        >
          Mes Projets
        </a>
        <a
          href="/CV_Ornel_Rony.pdf" // Vérifiez que le fichier CV est bien dans le dossier `public`.
          className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition-colors"
        >
          Télécharger CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
