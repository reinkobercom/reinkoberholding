# reinkoberholding.com

Website der Reinkober Holding GmbH – statisch gebaut mit [Astro](https://astro.build), gehostet auf Vercel.
Jeder Push auf `main` wird automatisch live geschaltet; jeder andere Branch bekommt eine Vorschau-URL.

## Seiten

| URL            | Datei                        |
| -------------- | ---------------------------- |
| `/`            | `src/pages/index.astro`      |
| `/impressum`   | `src/pages/impressum.astro`  |
| `/datenschutz` | `src/pages/datenschutz.astro`|

Die URLs sind identisch mit der alten Onepage-Seite – es sind keine Weiterleitungen nötig.

## Inhalte pflegen (ohne Programmierkenntnisse)

| Was                                   | Wo                         |
| ------------------------------------- | -------------------------- |
| Firmendaten, Adresse, E-Mail, Telefon, Handelsregister | `src/data/site.ts` |
| Beteiligungen & Projekte (Karten)     | `src/data/portfolio.ts` → `portfolio` |
| Kennzahlen (19.200.000 € usw.)        | `src/data/portfolio.ts` → `kennzahlen` |
| Bilder & Alternativtexte              | `src/data/images.ts` (Dateien in `src/assets/`) |
| Sektionen ein-/ausblenden             | `src/data/sections.ts`     |
| Texte Startseite (Hero, Leistungen, Wachstumspartner) | `src/components/home/*.astro` |

### Sektion ausblenden
In `src/data/sections.ts` den Wert auf `false` setzen, speichern, committen – fertig.

### Neue Beteiligung hinzufügen
1. Logo (16:10, weißer Hintergrund) nach `src/assets/portfolio/` legen.
2. In `src/data/images.ts` importieren und mit Alt-Text eintragen.
3. In `src/data/portfolio.ts` einen Eintrag ergänzen (`status: 'AKTIV'` oder `'EXIT'`).

### Einzelne Karte ausblenden
Im Eintrag in `src/data/portfolio.ts` `visible: false` setzen.

## Formulare
Die Seite hat keine Formulare – es werden keine Umgebungsvariablen oder API-Keys benötigt.

## Lokal starten

```bash
npm install
npm run dev      # Entwicklung: http://localhost:4321
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Technik

- Statische Seiten, keine Server-Funktionen
- Schriften (Bakbak One, Lato) lokal eingebunden – keine Verbindung zu Google Fonts
- Bilder automatisch als WebP in mehreren Größen, feste Seitenverhältnisse (kein Layout-Springen)
- Animationen: `src/scripts/motion.ts` (Einblenden beim Scrollen, Zählen der Kennzahlen, Licht-Effekt auf Karten, Parallax). Bei „Bewegung reduzieren“ im Betriebssystem automatisch aus; ohne JavaScript ist alles sofort sichtbar.
- Vercel Web Analytics (ohne Cookies → kein Cookie-Banner nötig). Aktiv nur auf der Live-Domain.
- `sitemap-index.xml`, `robots.txt`, OG-Bild, JSON-LD (WebSite + Organization)
- Sicherheits-Header und Caching in `vercel.json`

## Umgebungsvariablen
Keine.

## DNS-Umstellung (beim Domain-Anbieter)

Für die Website **nur** diese beiden Einträge ändern – auf die Werte, die Vercel unter
*Project → Settings → Domains* anzeigt:

| Typ   | Name  | Wert (Vercel-Standard, bitte im Dashboard prüfen) |
| ----- | ----- | ------------------------------------------------- |
| A     | `@`   | `76.76.21.21`                                     |
| CNAME | `www` | `cname.vercel-dns.com`                            |

- Alte A- und CNAME-Einträge für `@` und `www` vorher entfernen (sonst antworten zwei Server).
- **MX- und TXT-Einträge der Haupt-Domain unverändert lassen** – sonst kommen keine E-Mails mehr an.
- `www.reinkoberholding.com` leitet auf `reinkoberholding.com` weiter (Haupt-Domain ohne www, wie bisher).
- Erst nach erfolgreicher Umstellung und Prüfung den Onepage-Vertrag kündigen.
