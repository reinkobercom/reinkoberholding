// ─────────────────────────────────────────────────────────────
//  Sektionen ein- und ausschalten
//  true  = Sektion wird angezeigt
//  false = Sektion ist ausgeblendet (Inhalt bleibt erhalten)
//  Nach dem Ändern speichern & committen – Vercel baut automatisch neu.
// ─────────────────────────────────────────────────────────────

export const sections = {
  startseite: {
    hero: true,          // Logo, Überschrift, Einleitung, drei Leistungsspalten
    wachstumspartner: true, // Kasten „Wachstumspartner der Holding“ mit Foto
    kennzahlen: true,    // 4 Kacheln mit hochzählenden Zahlen
    portfolio: true,     // „Beteiligungen & Projekte“ (Karten-Raster)
  },
  impressum: {
    streitbeilegung: true, // Hinweis Verbraucherstreitbeilegung
    haftungInhalte: true,  // Haftung für Inhalte
    haftungLinksUrheberrecht: true, // Haftung für Links + Urheberrecht
  },
};
