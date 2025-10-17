export default function Services() {
  const services = [
    {
      title: "Création de site web",
      desc: "Sites vitrines modernes et responsives avec Next.js et Tailwind.",
    },
    {
      title: "Maintenance",
      desc: "Suivi, mises à jour et amélioration continue de votre site.",
    },
    {
      title: "Optimisation SEO",
      desc: "Rendre votre site plus visible sur les moteurs de recherche.",
    },
    {
      title: "Installation et configuration d'un réseau",
      desc: "Configurer, déployer et sécuriser votre réseau.",
    },
    {
      title: "Audit réseaux",
      desc: "Exécution d'ensembles des audits pour proposer une architecture réseau fiable.",
    },
    {
      title: "Installation des VPN et pare-feu",
      desc: "Ajouter une couche de sécurité à votre réseau avec VPN et pare-feu.",
    },
    {
      title: "Supervision et configuration des IDS/IPS",
      desc: "Reporting, monitoring et centralisation des logs au sein d'un réseau.",
    },
  ];

  return (
    <main className="min-h-screen bg-green-50 px-4 py-20">
      {/* Grand titre en vert tendre */}
      <h1 className="text-4xl font-bold text-center mb-12 text-emerald-600">
        Mes Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Titre de chaque service en vert tendre */}
            <h3 className="text-xl font-semibold mb-3 text-emerald-600">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
