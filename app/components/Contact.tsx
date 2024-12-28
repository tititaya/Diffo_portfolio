const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">
          N'hésitez pas à me contacter pour toute question ou collaboration. Je serais ravi de discuter avec vous !
        </p>
        <div className="mb-6">
          <p className="mb-4">
            Email :{" "}
            <a
              href="mailto:ornel.rony@et.esiea.fr"
              className="text-blue-500 hover:underline"
            >
              ornel.rony@et.esiea.fr
            </a>
          </p>
          <p>
            Téléphone :{" "}
            <a
              href="tel:+33758384679"
              className="text-blue-500 hover:underline"
            >
              +33 7 58 38 46 79
            </a>
          </p>
        </div>
        <form className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-black rounded"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 text-black rounded"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 text-black rounded"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  