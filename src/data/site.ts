// ─────────────────────────────────────────────────────────────
//  Zentrale Firmendaten – hier ändern, wirkt auf allen Seiten
//  (Impressum, Datenschutz, Fußzeile, Google-Daten im Quelltext)
// ─────────────────────────────────────────────────────────────

export const site = {
  url: 'https://reinkoberholding.com',
  name: 'Reinkober Holding GmbH',
  shortName: 'Reinkober Holding',

  address: {
    street: 'Stemmenkamp 83a',
    zip: '59368',
    city: 'Werne',
    country: 'DE',
  },

  email: 'office@reinkoberholding.com',
  // Anzeige und Link-Format der Telefonnummer
  phone: '+4916096088604',
  phoneDisplay: '+4916096088604',

  register: {
    court: 'Dortmund',
    number: 'HRB31585',
    vatId: 'DE341552963',
    managingDirector: 'Simon Reinkober',
  },

  // Verlinkte Partner-Website im Abschnitt „Wachstumspartner der Holding“
  partnerUrl: 'https://reinkober.com',

  // Social-Media-Profile (leer = wird nicht angezeigt)
  social: [] as { label: string; url: string }[],
};
