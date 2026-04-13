import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  en: {
    billingDetails: "Billing Details",
    apartmentPh: "Apartment, floor, etc. (optional)",
    townCityPh: "Town/City",
    phoneNumberPh: "Phone number",
    saveInfoText: "Save this information for faster check-out next time",
    bankLabel: "Bank",
    cashOnDelivery: "Cash on delivery",
    placeOrder: "Place Order",
    productViewCartCheckout: "Product / View Cart / CheckOut",
    
    homeContact: "Home / Contact",
    callToUs: "Call To Us",
    callAvailableText: "We are available 24/7, 7 days a week.",
    callPhoneText: "Phone: +8801611112222",
    writeToUs: "Write To US",
    writeFillText: "Fill out our form and we will contact you within 24 hours.",
    writeEmailText1: "Emails: customer@exclusive.com",
    writeEmailText2: "Emails: support@exclusive.com",
    namePh: "Name",
    emailPh: "Email",
    phonePh: "Phone",
    yourMessagePh: "Your Message",
    sendMessageBtn: "Send Message",
    
    loginTitle: "Log in to Exclusive",
    enterDetailsSub: "Enter your details below",
    incorrectLoginErr: "Incorrect username or password",
    loginFailedErr: "Login failed. Please try again later.",
    emailOrPhonePh: "Email or phone number",
    passwordPh: "Password",
    forgetPasswordLink: "Forget Password?",
    loginBtn: "Log In",
    
    createAccountTitle: "Create an account",
    createAccountBtn: "Create Account",
    signUpGoogleBtn: "Sign up with Google",
    alreadyHaveAccount: "Already have account?",
    logInLink: "Log in",
    
    wishlistTitle: "Wishlist",
    removeBtn: "Remove",
    
    categoryLabel: "Category",
    allProducts: "All products",
    seeAll: "See all",
    brandsLabel: "Brands",
    featuresLabel: "Features",
    priceRangeLabel: "Price range",
    minLabel: "Min",
    maxLabel: "Max",
    conditionLabel: "Condition",
    anyLabel: "Any",
    refurbishedLabel: "Refurbished",
    brandNewLabel: "Brand new",
    oldItemsLabel: "Old items",
    ratingsLabel: "Ratings",
    
    featureMetallic: "Metallic",
    featurePlastic: "Plastic cover",
    featureRam: "8GB Ram",
    featureSuper: "Super power",
    featureMemory: "Large Memory"
  },
  ru: {
    billingDetails: "Платежные реквизиты",
    apartmentPh: "Квартира, этаж и т.д. (необязательно)",
    townCityPh: "Город",
    phoneNumberPh: "Номер телефона",
    saveInfoText: "Сохранить информацию для быстрого оформления заказа в следующий раз",
    bankLabel: "Банк",
    cashOnDelivery: "Наличными при получении",
    placeOrder: "Разместить заказ",
    productViewCartCheckout: "Товар / Корзина / Оформление заказа",
    
    homeContact: "Главная / Контакты",
    callToUs: "Позвоните нам",
    callAvailableText: "Мы доступны 24/7, 7 дней в неделю.",
    callPhoneText: "Телефон: +8801611112222",
    writeToUs: "Напишите нам",
    writeFillText: "Заполните нашу форму, и мы свяжемся с вами в течение 24 часов.",
    writeEmailText1: "Эл. почта: customer@exclusive.com",
    writeEmailText2: "Эл. почта: support@exclusive.com",
    namePh: "Имя",
    emailPh: "Эл. почта",
    phonePh: "Телефон",
    yourMessagePh: "Ваше сообщение",
    sendMessageBtn: "Отправить сообщение",
    
    loginTitle: "Войти в Exclusive",
    enterDetailsSub: "Введите ваши данные ниже",
    incorrectLoginErr: "Неверный логин или пароль",
    loginFailedErr: "Ошибка входа. Пожалуйста, попробуйте еще раз позже.",
    emailOrPhonePh: "Эл. почта или номер телефона",
    passwordPh: "Пароль",
    forgetPasswordLink: "Забыли пароль?",
    loginBtn: "Войти",
    
    createAccountTitle: "Создать аккаунт",
    createAccountBtn: "Создать аккаунт",
    signUpGoogleBtn: "Зарегистрироваться через Google",
    alreadyHaveAccount: "Уже есть аккаунт?",
    logInLink: "Войти",
    
    wishlistTitle: "Список желаний",
    removeBtn: "Удалить",
    
    categoryLabel: "Категория",
    allProducts: "Все продукты",
    seeAll: "Показать все",
    brandsLabel: "Бренды",
    featuresLabel: "Особенности",
    priceRangeLabel: "Диапазон цен",
    minLabel: "Мин",
    maxLabel: "Макс",
    conditionLabel: "Состояние",
    anyLabel: "Любое",
    refurbishedLabel: "Восстановленный",
    brandNewLabel: "Совершенно новый",
    oldItemsLabel: "Старые предметы",
    ratingsLabel: "Оценки",
    
    featureMetallic: "Металлический",
    featurePlastic: "Пластиковый чехол",
    featureRam: "8GB Ram",
    featureSuper: "Супер мощность",
    featureMemory: "Большая память"
  },
  tj: {
    billingDetails: "Тафсилоти пардохт",
    apartmentPh: "Ҳуҷра, ошёна ва ғ. (ихтиёрӣ)",
    townCityPh: "Шаҳр",
    phoneNumberPh: "Рақами телефон",
    saveInfoText: "Ин маълумотро барои фармоиши зудтар нигоҳ доред",
    bankLabel: "Бонк",
    cashOnDelivery: "Нақд ҳангоми қабул",
    placeOrder: "Фармоиш додан",
    productViewCartCheckout: "Маҳсулот / Сабад / Фармоиш",
    
    homeContact: "Асосӣ / Тамос",
    callToUs: "Ба мо занг занед",
    callAvailableText: "Мо 24/7, 7 рӯз дар як ҳафта омода ҳастем.",
    callPhoneText: "Телефон: +8801611112222",
    writeToUs: "Ба мо нависед",
    writeFillText: "Шакли моро пур кунед ва мо дар давоми 24 соат бо шумо тамос мегирем.",
    writeEmailText1: "Почта: customer@exclusive.com",
    writeEmailText2: "Почта: support@exclusive.com",
    namePh: "Ном",
    emailPh: "Почтаи электронӣ",
    phonePh: "Телефон",
    yourMessagePh: "Паёми шумо",
    sendMessageBtn: "Фиристодани паём",
    
    loginTitle: "Вуруд ба Exclusive",
    enterDetailsSub: "Маълумоти худро дар зер ворид кунед",
    incorrectLoginErr: "Номи корбар ё парол нодуруст аст",
    loginFailedErr: "Вуруд ноком шуд. Лутфан дертар боз кӯшиш кунед.",
    emailOrPhonePh: "Почтаи электронӣ ё рақами телефон",
    passwordPh: "Парол",
    forgetPasswordLink: "Паролро фаромӯш кардед?",
    loginBtn: "Вуруд",
    
    createAccountTitle: "Эҷоди ҳисоб",
    createAccountBtn: "Эҷоди ҳисоб",
    signUpGoogleBtn: "Қайдгирӣ тавассути Google",
    alreadyHaveAccount: "Шумо аллакай ҳисоб доред?",
    logInLink: "Вуруд",
    
    wishlistTitle: "Рӯйхати хоҳишҳо",
    removeBtn: "Нобуд кардан",
    
    categoryLabel: "Категория",
    allProducts: "Ҳамаи маҳсулот",
    seeAll: "Ҳамаро дидан",
    brandsLabel: "Брендҳо",
    featuresLabel: "Хусусиятҳо",
    priceRangeLabel: "Диапазони нарх",
    minLabel: "Мин",
    maxLabel: "Макс",
    conditionLabel: "Ҳолат",
    anyLabel: "Ҳар гуна",
    refurbishedLabel: "Барқароршуда",
    brandNewLabel: "Тамоман нав",
    oldItemsLabel: "Чизҳои кӯҳна",
    ratingsLabel: "Баҳогузорӣ",
    
    featureMetallic: "Металлӣ",
    featurePlastic: "Пластикӣ",
    featureRam: "8GB Ram",
    featureSuper: "Қудрати баланд",
    featureMemory: "Хотираи калон"
  }
};

const localesDir = path.join(__dirname, 'src', 'locales');

['en', 'ru', 'tj'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.translation = { ...data.translation, ...translations[lang] };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
