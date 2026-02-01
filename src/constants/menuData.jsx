import { useTranslation } from "react-i18next";

// Tarjima kalitlari bilan menyu ma'lumotlari
export const getMenuData = () => {
    // Hook ichida ishlataladigan joyda chaqiring
    const { t } = useTranslation();

    return [
        {
            key: 0,
            path: "/",
            img: "./public/home.png",
            name: t("home")
        },
        {
            key: 1,
            path: "/members",
            img: "./public/members.png",
            name: t("members")
        },
        {
            key: 2,
            path: "/pos",
            img: "./public/pos.png",
            name: t("pos")
        },
        {
            key: 3,
            path: "/inventory",
            img: "./public/inventory.png",
            name: t("inventory")
        },
        {
            key: 4,
            path: "/products",
            img: "./public/products.png",
            name: t("products")
        },
        {
            key: 5,
            path: "/visit-history",
            img: "./public/visit-history.png",
            name: t("visitHistory")
        },
        {
            key: 6,
            path: "/payments",
            img: "./public/payments.png",
            name: t("payments")
        }
    ];
};