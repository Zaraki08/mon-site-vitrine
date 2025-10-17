export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-50 via-white to-green-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-white">
        <img
          src="/profil.jpg"
          alt="Moi"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg"
        />

        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Salut, je suis{" "}
          <span className="text-emerald-600">
            KOUNOU MENGUE DANIEL ALEXANDRE
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Développeur web passionné, je crée des sites modernes, rapides et responsives avec Next.js et Tailwind CSS.
          Je fais également dans le réseau et la cybersécurité, je couvre largement de services dans ces domaines.
        </p>

        <a
          href="/services"
          className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition transform hover:scale-105"
        >
          🌿 Découvrir mes services
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white py-6 text-center mt-auto">
        © {new Date().getFullYear()} KOUNOU DANIEL — Tous droits réservés
      </footer>
    </main>
  );
}
