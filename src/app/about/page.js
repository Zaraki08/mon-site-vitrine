export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-20">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Image de profil */}
        <img
          src="/profil.jpg"
          alt="Moi"
          className="w-48 h-48 rounded-full shadow-lg mx-auto md:mx-0"
        />

        {/* Texte */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-emerald-500">
            À propos de moi
          </h1>
          <p className="text-gray-600 mb-4">
            Je suis un développeur passionné par la création de sites web modernes et performants.
            J’aime apprendre, expérimenter et aider les entreprises à se développer grâce à la technologie.
          </p>
          <p className="text-gray-600 mb-6">
            Je maîtrise Next.js, Tailwind CSS, et d’autres outils modernes pour construire des sites rapides, responsives et élégants.
          </p>

          {/* Bouton pour télécharger le CV */}
          <a
            href="/cv_Daniel.pdf"
            download
            className="inline-block bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-emerald-600 transition"
          >
            📄 Télécharger mon CV
          </a>
        </div>
      </section>

     
    </main>
  );
}
