import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      login: "Kirish",
      logout: "Chiqish",
      membership: "A'zolik",
      receivedMoney: "OLINGAN PUL",
      welcome: "Xush kelibsiz",
      loginLabel: "Login",
      passwordLabel: "Parol:",
      settings: "Sozlamalar",
      theme: "Tema: Yorug'",
      notifications: "Bildirishnomalar: Yoniq",
      profileInfo: "Profil ma'lumotlari",
      name: "Ism: Sanjar Komilov",
      email: "Email: sancho@gmail.com",
      invalidCredentials: "Noto'g'ri login yoki parol",
      // Inventory
      productType: "Mahsulot turi",
      productName: "Mahsulot nomi",
      supplier: "Yetkazib beruvchi",
      stocks: "Zaxira",
      statusAvailable: "Mavjud",
      statusOutOfStock: "Zaxirasi tugagan",
      // Members
      name: "Ism",
      phoneNumber: "Telefon raqami",
      type: "Tur",
      expireTime: "Amal qilish muddati",
      admin: "Administrator",
      user: "Foydalanuvchi",
      moderator: "Moderator",
      // Payments
      createdDate: "Yaratilgan sana",
      total: "Jami",
      paymentMethod: "To'lov usuli",
      term: "Muddati",
      paidBy: "To'laydigan odam",
      // Products
      unitPrice: "Birlik narxi",
      // Pos
      saleSummary: "Savdo xulasasi",
      addToCart: "Savatga qo'sh",
      searchByName: "Nomi bo'yicha qidirish",
      brand: "Brend",
      quality: "Sifat",
      // Visit History
      membersName: "A'zolarning ismlari",
      visitTime: "Tashrif vaqti",
      visitDate: "Tashrif sanasi",
    //   navbar
      home: "Bosh sahifa",
      members: "A'zolar",
      membership: "A'zolik",
      garbrant: "Mahsulotlar",
      products: "Maxsulotlar",
     inventory: "Ombor",
     payments: "To'lovlar",
     pos: "POS",
     visitHistory: "Tashriflar tarixi",  
    },

  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      login: "Войти",
      logout: "Выйти",
      membership: "Абонемент",
      receivedMoney: "ПОЛУЧЕННЫЕ ДЕНЬГИ",
      welcome: "Добро пожаловать",
      loginLabel: "Login",
      passwordLabel: "Пароль:",
      settings: "Настройки",
      theme: "Тема: Светлая",
      notifications: "Уведомления: Включены",
      profileInfo: "Информация профиля",
      name: "Имя: Sanjar Komilov",
      email: "Email: sancho@gmail.com",
      invalidCredentials: "Неправильный логин или пароль",
      // Inventory
      productType: "Тип продукта",
      productName: "Название продукта",
      supplier: "Поставщик",
      stocks: "Запасы",
      statusAvailable: "В наличии",
      statusOutOfStock: "Нет в наличии",
      // Members
      name: "Имя",
      phoneNumber: "Номер телефона",
      type: "Тип",
      expireTime: "Срок истечения",
      admin: "Администратор",
      user: "Пользователь",
      moderator: "Модератор",
      // Payments
      createdDate: "Дата создания",
      total: "Итого",
      paymentMethod: "Способ платежа",
      term: "Срок",
      paidBy: "Оплачено",
      // Products
      unitPrice: "Цена за единицу",
      // Pos
      saleSummary: "Итоги продаж",
      addToCart: "Добавить в корзину",
      searchByName: "Поиск по названию",
      brand: "Бренд",
      quality: "Качество",
      // Visit History
      membersName: "Имя участника",
      visitTime: "Время посещения",
      visitDate: "Дата посещения",
    //   navbar
       home: "Главная",
      members: "Участники",
      membership: "Членство",
      garbrant: "Продукты",
      products: "Продукты",
     inventory: "Инвентарь",
     payments: "Платежи",
     pos: "Пос",
     visitHistory: "История посещений",
    },
  },
  en: {
    translation: {
      home: "Home",
      about: "About us",
      login: "Login",
      logout: "Logout",
      membership: "Membership",
      receivedMoney: "RECEIVED MONEY",
      welcome: "Welcome",
      loginLabel: "Login",
      passwordLabel: "Password:",
      settings: "Settings",
      theme: "Theme: Light",
      notifications: "Notifications: On",
      profileInfo: "Profile Information",
      name: "Name: Sanjar Komilov",
      email: "Email: sancho@gmail.com",
      invalidCredentials: "Invalid login or password",
      // Inventory
      productType: "Product Type",
      productName: "Product Name",
      supplier: "Supplier",
      stocks: "Stocks",
      statusAvailable: "Available",
      statusOutOfStock: "Out of Stock",
      // Members
      name: "Name",
      phoneNumber: "Phone Number",
      type: "Type",
      expireTime: "Expire Time",
      admin: "Admin",
      user: "User",
      moderator: "Moderator",
      // Payments
      createdDate: "Created Date",
      total: "Total",
      paymentMethod: "Payment Method",
      term: "Term",
      paidBy: "Paid by",
      // Products
      unitPrice: "Unit Price",
      // Pos
      saleSummary: "SALE SUMMARY",
      addToCart: "Add to Cart",
      searchByName: "Search by name",
      brand: "Brand",
      quality: "Quality",
      // Visit History
      membersName: "Members Name",
      visitTime: "Visit Time",
      visitDate: "Visit Date",
    //   navbar  //
        home: "Home",
        members: "Members",
        membership: "Membership",
        garbrant: "Products",
        products: "Products",
         inventory: "Inventory",
            payments: "Payments",
            pos: "POS",
            visitHistory: "Visit History",
             
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // default til
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;