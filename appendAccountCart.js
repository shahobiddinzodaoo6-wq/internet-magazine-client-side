import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  en: {
    manageMyAccount: "Manage My Account",
    myProfile: "My Profile",
    addressBook: "Address Book",
    myPaymentOptions: "My Payment Options",
    myOrders: "My Orders",
    myReturns: "My Returns",
    myCancellations: "My Cancellations",
    myWishlistMenu: "My WishList",
    profileTitle: "Profile",
    firstNamePh: "First name",
    lastNamePh: "Last name",
    emailAddressPh: "Email address",
    streetAddressPh: "Street address",
    passwordChanges: "Password Changes",
    currentPasswordPh: "Current password",
    newPasswordPh: "New password",
    confirmNewPasswordPh: "Confirm new password",
    cancelBtn: "Cancel",
    saveChangesBtn: "Save Changes",
    returnToShop: "Return To Shop",
    removeAll: "Remove all",
    couponCodePh: "Coupon Code",
    applyBtn: "Apply",
    cartTotal: "Cart Total",
    subtotalLabel: "Subtotal:",
    shippingLabel: "Shipping:",
    freeLabel: "Free",
    totalLabel: "Total:",
    processToCheckout: "Process to checkout"
  },
  ru: {
    manageMyAccount: "Управление аккаунтом",
    myProfile: "Мой профиль",
    addressBook: "Адресная книга",
    myPaymentOptions: "Способы оплаты",
    myOrders: "Мои заказы",
    myReturns: "Мои возвраты",
    myCancellations: "Мои отмены",
    myWishlistMenu: "Мои желания",
    profileTitle: "Профиль",
    firstNamePh: "Имя",
    lastNamePh: "Фамилия",
    emailAddressPh: "Электронная почта",
    streetAddressPh: "Адрес (улица)",
    passwordChanges: "Смена пароля",
    currentPasswordPh: "Текущий пароль",
    newPasswordPh: "Новый пароль",
    confirmNewPasswordPh: "Подтвердите новый пароль",
    cancelBtn: "Отмена",
    saveChangesBtn: "Сохранить изменения",
    returnToShop: "Вернуться в магазин",
    removeAll: "Удалить все",
    couponCodePh: "Код купона",
    applyBtn: "Применить",
    cartTotal: "Итого в корзине",
    subtotalLabel: "Подытог:",
    shippingLabel: "Доставка:",
    freeLabel: "Бесплатно",
    totalLabel: "Всего:",
    processToCheckout: "К оформлению заказа"
  },
  tj: {
    manageMyAccount: "Идораи ҳисоб",
    myProfile: "Профили ман",
    addressBook: "Китоби суроғаҳо",
    myPaymentOptions: "Усулҳои пардохт",
    myOrders: "Фармоишҳои ман",
    myReturns: "Бозгаштҳои ман",
    myCancellations: "Бекоркуниҳои ман",
    myWishlistMenu: "Писандидаҳои ман",
    profileTitle: "Профил",
    firstNamePh: "Ном",
    lastNamePh: "Насаб",
    emailAddressPh: "Почтаи электронӣ",
    streetAddressPh: "Суроға",
    passwordChanges: "Иваз кардани рамз",
    currentPasswordPh: "Рамзи ҷорӣ",
    newPasswordPh: "Рамзи нав",
    confirmNewPasswordPh: "Рамзи навро тасдиқ кунед",
    cancelBtn: "Бекор кардан",
    saveChangesBtn: "Захира кардани тағирот",
    returnToShop: "Бозгашт ба дӯкон",
    removeAll: "Ҳамаро нест кардан",
    couponCodePh: "Рамзи купон",
    applyBtn: "Истифода бурдан",
    cartTotal: "Ҷамъи сабад",
    subtotalLabel: "Маблағ:",
    shippingLabel: "Интиқол:",
    freeLabel: "Ройгон",
    totalLabel: "Ҷамъ:",
    processToCheckout: "Коркарди фармоиш"
  }
};

const localesDir = path.join(__dirname, 'src', 'locales');

['en', 'ru', 'tj'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.translation = { ...data.translation, ...translations[lang] };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
