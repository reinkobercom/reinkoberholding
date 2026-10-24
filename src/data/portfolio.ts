// ─────────────────────────────────────────────────────────────
//  Beteiligungen & Projekte – eine Karte je Eintrag
//  Reihenfolge hier = Reihenfolge auf der Seite.
//  status: 'AKTIV' oder 'EXIT'
//  visible: false blendet eine einzelne Karte aus.
// ─────────────────────────────────────────────────────────────
import { images } from './images';

export type Beteiligung = {
  name: string;
  status: 'AKTIV' | 'EXIT';
  text: string;
  gruendung: string;
  image: { src: ImageMetadata; alt: string };
  visible: boolean;
};

export const portfolio: Beteiligung[] = [
  {
    name: 'Rausch Raumwerk',
    status: 'AKTIV',
    text: 'Regionaler Full-Service-Handwerksbetrieb im Raum Hamm. Sieben Gewerke unter einem Dach – von Malerarbeiten bis Bodenbelägen – für Privat-, Gewerbe- und Verwaltungskunden.',
    gruendung: 'Gründung: 2025',
    image: images.portfolio.rausch,
    visible: true,
  },
  {
    name: 'Hyloft Lofttüren',
    status: 'AKTIV',
    text: 'Hyloft Lofttüren kombinieren handgefertigte Eleganz mit modernem Stil. Unsere Türen bieten maßgeschneiderte Lösungen für flexible Raumgestaltung und hohe Lichtdurchlässigkeit.',
    gruendung: 'Gründung: 2024',
    image: images.portfolio.hyloft,
    visible: true,
  },
  {
    name: 'RX2 Marketing Agentur',
    status: 'AKTIV',
    text: 'Agentur für digitale Kundengewinnung und Leadgenerierung.',
    gruendung: 'Gründung: 2018 (Einstieg 2022), Verkauf 2023 und Rückkauf 2025',
    image: images.portfolio.rx2,
    visible: true,
  },
  {
    name: 'Teamgeist.shop',
    status: 'EXIT',
    text: 'Einheitliche Kleidung und Merchandise für Vereine - ab Stückzahl 1. Jederzeit durch den eigenen Online-Shop der Vereine für jeden Fan und jedes Mitglied bestellbar.',
    gruendung: 'Gründung: 2023',
    image: images.portfolio.teamgeist,
    visible: true,
  },
  {
    name: 'machdudas.de',
    status: 'EXIT',
    text: 'Jeden Tag finden über 105.000 Heimarbeiter, Dienstleister und Freelancer auf machdudas.de neue Jobs und neue Arbeitskräfte.',
    gruendung: 'Gründung: 2007 (Übernahme 2021)',
    image: images.portfolio.machdudas,
    visible: true,
  },
  {
    name: 'freiguide.de',
    status: 'EXIT',
    text: 'Dank freiguide.de erhalten mehr als 11.000 Freelancer in Echtzeit Informationen über neue Aufträge in ihrem Fachbereich.',
    gruendung: 'Gründung: 2021',
    image: images.portfolio.freiguide,
    visible: true,
  },
  {
    name: 'Logistik1 Group',
    status: 'EXIT',
    text: 'Mit kurier1.de und spedition1.de können Unternehmen und Privatpersonen bequem online mit stetigem persönlichen Kundenservice Frachten durch Europa schicken.',
    gruendung: 'Gründung: 2021',
    image: images.portfolio.logistik1,
    visible: true,
  },
  {
    name: 'dorfshirt.de',
    status: 'EXIT',
    text: 'Vom Hoodie bis zur Tasse - alles, was das Herz eines Dorfkinds höher schlagen lässt, findet man bei dorfshirt.de.',
    gruendung: 'Gründung: 2020',
    image: images.portfolio.dorfshirt,
    visible: true,
  },
  {
    name: 'GRELLARTIG Digital',
    status: 'EXIT',
    text: 'Als Digitalagentur haben wir für Kunden unterschiedlicher Unternehmensgrößen herausragende Meilensteine im Bereich Webentwicklung und Performance-Marketing erreicht.',
    gruendung: 'Gründung: 2019',
    image: images.portfolio.grellartig,
    visible: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Kennzahlen (zählen beim Hineinscrollen hoch)
//  unit '€' wird groß hinter der Zahl gezeigt, suffix '+' kleiner
// ─────────────────────────────────────────────────────────────
export const kennzahlen = [
  { value: 19200000, unit: '€', suffix: '', label: 'verwaltetes Werbebudget' },
  { value: 65000000, unit: '€', suffix: '', label: 'generierter Umsatz für Kunden & Partner' },
  { value: 300, unit: '', suffix: '+', label: 'beratene & betreute Projekte' },
  { value: 8, unit: '', suffix: '+', label: 'Team-Mitglieder' },
];
