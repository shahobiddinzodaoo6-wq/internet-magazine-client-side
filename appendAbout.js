import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  en: {
    ourStoryTitle: "Our Story",
    ourStoryP1: "Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. ",
    ourStoryP2: "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.",
    founderRole: "Founder & Chairman",
    tomCruise: "Tom Cruise",
    emmaWatson: "Emma Watson",
    willSmith: "Will Smith"
  },
  ru: {
    ourStoryTitle: "Наша история",
    ourStoryP1: "Запущенный в 2015 году, Exclusive является ведущей торговой площадкой Южной Азии с активным присутствием в Бангладеш. При поддержке широкого спектра индивидуальных маркетинговых решений, данных и услуг, Exclusive объединяет 10 500 продавцов, 300 брендов и обслуживает 3 миллиона клиентов по всему региону.",
    ourStoryP2: "Exclusive предлагает более 1 миллиона товаров и очень быстро растет. Exclusive предлагает разнообразный ассортимент в разных категориях.",
    founderRole: "Основатель и Председатель",
    tomCruise: "Том Круз",
    emmaWatson: "Эмма Уотсон",
    willSmith: "Уилл Смит"
  },
  
  
  
  tj: {
    ourStoryTitle: "Таърихи мо",
    ourStoryP1: "Exclusive соли 2015 таъсис ёфта, бузургтарин бозори онлайнии Осиёи Ҷанубӣ бо ҳузури фаъол дар Бангладеш мебошад. Бо дастгирии қарорҳои гуногуни маркетингӣ, Exclusive дорои 10,500 фурӯшанда ва 300 бренд аст ва ба 3 миллион мизоҷон хизмат мерасонад.",
    ourStoryP2: "Exclusive зиёда аз 1 миллион маҳсулот пешниҳод мекунад ва босуръат рушд карда истодааст. Exclusive намудҳои гуногуни маҳсулотро пешниҳод мекунад.",
    founderRole: "Муассис ва Раис",
    tomCruise: "Том Круз",
    emmaWatson: "Эмма Уотсон",
    willSmith: "Уилл Смит"
  }
};

const localesDir = path.join(__dirname, 'src', 'locales');

['en', 'ru', 'tj'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.translation = { ...data.translation, ...translations[lang] };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});





