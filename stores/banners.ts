import { defineStore } from "pinia";

export const useMyBannersStore = defineStore({
  id: "myBannersStore",
  state: () => ({
    banners: [
      {
        subtitle: "СВАРКА АРГОНОМ",
        title: "ОРЕНБУРГ",
        link: "#services",
        label: "Главная",
      },
      {
        subtitle: "Что мы делаем",
        title:
          "Выполняем сварочные работы алюминия, нержавеющей стали и других цветных металлов. ",
        link: "#works",
        label: "Работы",
      },
      {
        subtitle: "Где мы находимся",
        title: "Мы находимся в Оренбурге",
        link: "#about-us",
        label: "О нас",
      },
      {
        subtitle: "Наши контакты",
        title: "по кнопке ниже",
        link: "#contact-us",
        label: "Контакты",
      },
    ],
  }),
  actions: {},
});
