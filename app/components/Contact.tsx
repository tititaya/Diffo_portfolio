const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">Envoyez-moi un message pour collaborer ou poser une question.</p>
        <p className="mb-4">
          Email : <a href="mailto:ornel.rony@et.esiea.fr" className="text-blue-500 hover:underline">ornel.rony@et.esiea.fr</a>
        </p>
        <p>
          Téléphone : <a href="tel:+33758384679" className="text-blue-500 hover:underline">+33 7 58 38 46 79</a>
        </p>
      </section>
    );
  };
  
  export default Contact;
