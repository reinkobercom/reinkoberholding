// ─────────────────────────────────────────────────────────────
//  Alle Bilder mit Alternativtext (für Screenreader & Google)
//  Neues Bild: Datei nach src/assets/ legen, hier importieren.
// ─────────────────────────────────────────────────────────────
import logoWeiss from '../assets/brand/logo-holding-weiss.png';
import logoGruen from '../assets/brand/logo-holding-gruen.png';
import logoReinkoberCom from '../assets/brand/logo-reinkober-com.png';
import wachstumspartner from '../assets/wachstumspartner-reinkober-com.jpg';

import rausch from '../assets/portfolio/rausch-raumwerk.jpg';
import hyloft from '../assets/portfolio/hyloft-lofttueren.jpg';
import rx2 from '../assets/portfolio/rx2-marketing-agentur.jpg';
import teamgeist from '../assets/portfolio/teamgeist-shop.jpg';
import machdudas from '../assets/portfolio/machdudas-de.jpg';
import freiguide from '../assets/portfolio/freiguide-de.jpg';
import logistik1 from '../assets/portfolio/logistik1-group.jpg';
import dorfshirt from '../assets/portfolio/dorfshirt-de.jpg';
import grellartig from '../assets/portfolio/grellartig-digital.jpg';

export const images = {
  logoWeiss: { src: logoWeiss, alt: 'Reinkober Holding – Logo' },
  logoGruen: { src: logoGruen, alt: 'Reinkober Holding – Logo' },
  logoReinkoberCom: { src: logoReinkoberCom, alt: 'reinkober.com' },
  wachstumspartner: {
    src: wachstumspartner,
    alt: 'Mann im hellblauen Hemd sitzt nachdenklich am Holztisch vor einem aufgeklappten Laptop mit Dashboard-Grafiken',
  },

  portfolio: {
    rausch: { src: rausch, alt: 'Logo Rausch Raumwerk' },
    hyloft: { src: hyloft, alt: 'Logo Hyloft Lofttüren' },
    rx2: { src: rx2, alt: 'Logo RX2 Digital Marketing Agentur' },
    teamgeist: { src: teamgeist, alt: 'Logo Teamgeist – Dein Verein, dein Shop' },
    machdudas: { src: machdudas, alt: 'Logo machdudas' },
    freiguide: { src: freiguide, alt: 'Logo freiguide.de' },
    logistik1: { src: logistik1, alt: 'Logo kurier1.de' },
    dorfshirt: { src: dorfshirt, alt: 'Logo dorfshirt.de – Deine Heimat. Deine Liebe. Dein Shop.' },
    grellartig: { src: grellartig, alt: 'Logo GRELLARTIG Digital' },
  },
};
