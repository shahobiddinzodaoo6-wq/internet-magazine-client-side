import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  en: {
    speakersLabel: "Speakers",
    amazonSpeakers: "Amazon wireless speakers",
    perfumeLabel: "Perfume",
    gucciPerfume: "GUCCI INTENSE OUD EDP"
  },
  ru: {
    speakersLabel: "Колонки",
    amazonSpeakers: "Беспроводные колонки Amazon",
    perfumeLabel: "Парфюм",
    gucciPerfume: "GUCCI INTENSE OUD EDP"
  },
  tj: {
    speakersLabel: "Баландгӯякҳо",
    amazonSpeakers: "Баландгӯякҳои бесими Amazon",
    perfumeLabel: "Атр",
    gucciPerfume: "GUCCI INTENSE OUD EDP"
  }
};

const localesDir = path.join(__dirname, 'src', 'locales');

['en', 'ru', 'tj'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.translation = { ...data.translation, ...translations[lang] };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
