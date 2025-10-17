import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mon Site Vitrine",
  description: "Portfolio et services professionnels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 animate-gradient-x">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md shadow p-4 flex justify-center gap-6 sticky top-0 z-50">
          <Link
            href="/"
            className="text-emerald-600 font-semibold hover:text-emerald-800 transition"
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="text-emerald-600 font-semibold hover:text-emerald-800 transition"
          >
            À propos
          </Link>
          <Link
            href="/services"
            className="text-emerald-600 font-semibold hover:text-emerald-800 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-emerald-600 font-semibold hover:text-emerald-800 transition"
          >
            Contact
          </Link>
        </header>

        {/* Contenu principal */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-emerald-600 text-white text-center py-4">
          © {new Date().getFullYear()} KOUNOU DANIEL — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
