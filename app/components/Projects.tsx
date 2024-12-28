const Projects = () => {
    const projects = [
      {
        title: "Conception de carte électronique",
        description: "Création d'une carte avec Altium Designer, routage optimisé, et intégration 3D avec SolidWorks.",
        link: "#",
      },
      {
        title: "Robot suiveur de ligne",
        description: "Programmation en VHDL pour un robot suiveur de ligne avec commande infrarouge.",
        link: "#",
      },
      {
        title: "Jeu de pendu en C",
        description: "Développement d'un jeu avec animations et cryptage SHA-256 pour la gestion des utilisateurs.",
        link: "#",
      },
    ];
  
    return (
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Titre de la section */}
          <h2 className="text-3xl font-bold text-center mb-8">Projets</h2>
  
          {/* Liste des projets */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-md border border-gray-200"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 mt-4 inline-block transition-colors"
                >
                  Voir le projet →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  