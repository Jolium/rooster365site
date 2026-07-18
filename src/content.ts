export interface ChartRow {
  label: string;
  basic: string;
  standard: string;
}

export const CHART: ChartRow[] = [
  { label: 'Aantal locaties', basic: '1 t/m 5', standard: '1 t/m 5' },
  { label: 'Managers / Administrators', basic: 'max 2 per locatie', standard: 'max 3 per locatie' },
  { label: 'Medewerkers', basic: 'max 15 per locatie', standard: 'max 25 per locatie' },
  { label: 'Toevoegen/verwijder medewerkers', basic: 'ja', standard: 'ja' },
  { label: 'Wekelijkse planning', basic: 'per locatie en per medewerker', standard: 'per locatie en per medewerker' },
  { label: 'Wekelijks rooster per locatie', basic: 'ja / downloadbaar als pdf', standard: 'ja / downloadbaar als pdf' },
  { label: 'Wekelijks rooster per medewerker', basic: 'ja / downloadbaar als pdf', standard: 'ja / downloadbaar als pdf' },
  { label: 'Maandelijks rooster per medewerker', basic: 'ja / downloadbaar als pdf', standard: 'ja / downloadbaar als pdf' },
  { label: 'Verlof inplannen', basic: 'ja', standard: 'ja' },
  { label: 'Ziekmeldingen toevoegen', basic: 'ja, maar bereken geen percentages', standard: 'ja' },
  { label: 'Jaarlijkse zieke uren', basic: 'nee', standard: 'ja' },
  { label: 'Toeslagen (avonddienst, weekendienst)', basic: 'nee', standard: 'ja' },
  { label: 'Extra betaald werk (thuiswerken, opleidingen)', basic: 'nee', standard: 'ja' },
  { label: 'Wekelijks vakantiesaldo', basic: 'nee', standard: 'ja' },
  { label: 'Startpagina bericht', basic: 'nee', standard: 'ja' },
];
