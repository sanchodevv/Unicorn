import { useTranslation } from "react-i18next";

// Tarjima kalitlari bilan menyu ma'lumotlari
export const getMenuData = () => {
    // Hook ichida ishlataladigan joyda chaqiring
    const { t } = useTranslation();

    return [
        {
            key: 0,
            path: "/",
            icon: "Home",
            name: t("home")
        },
        {
            key: 1,
            path: "/members",
            icon: "Users",
            name: t("members")
        },
        {
            key: 2,
            path: "/pos",
            icon: "ShoppingCart",
            name: t("pos")
        },
        {
            key: 3,
            path: "/inventory",
            icon: "Boxes",
            name: t("inventory")
        },
        {
            key: 4,
            path: "/products",
            icon: "Package",
            name: t("products")
        },
        {
            key: 5,
            path: "/visit-history",
            icon: "History",
            name: t("visitHistory")
        },
        {
            key: 6,
            path: "/payments",
            icon: "CreditCard",
            name: t("payments")
        }
    ];
};