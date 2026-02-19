export default function Contact() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-20 flex flex-col items-center">
      {/* Grand titre en vert */}
      <h1 className="text-4xl font-bold mb-10 text-emerald-600">Contactez-moi</h1>

      {/* Formulaire Formspree */}
      <form
        action="https://formspree.io/f/movkrwgg"
        method="POST"
        className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl flex flex-col gap-6"
      >
        <input
          type="text"
          name="Nom"
          placeholder="Votre nom"
          required
          className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 transition"
        />
        <input
          type="email"
          name="Email"
          placeholder="Votre email"
          required
          className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 transition"
        />
        <textarea
          name="Message"
          placeholder="Votre message..."
          required
          className="border border-gray-300 p-4 rounded-xl h-36 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 transition resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-emerald-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-emerald-600 transition transform hover:scale-105"
        >
          Envoyer
        </button>
      </form>

      {/* Email et WhatsApp */}
      <p className="text-gray-600 mt-8 text-center">
        Ou écrivez-moi directement à :{" "}
        <a
          href="mailto:kounoudanielle@gmail.com"
          className="text-emerald-600 font-semibold hover:underline"
        >
          kounoudanielle@gmail.com
        </a>
      </p>

      <p className="text-gray-600 mt-2 text-center">
        Ou contactez-moi sur WhatsApp :{" "}
        <a
          href="https://wa.me/message/2WF6OJ2QRZ2VJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 font-semibold hover:underline"
        >
          Envoyer un message
        </a>
      </p>
    </main>
  );
}
