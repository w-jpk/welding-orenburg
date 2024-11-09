import { defineStore } from "pinia";
import prod_1 from "~/assets/prod_1.png";
import prod_2 from "~/assets/prod_2.png";
import prod_3 from "~/assets/prod_3.png";

export const useMyServicesStore = defineStore({
  id: "myServicesStore",
  state: () => ({
    mainProduct: {
      image: prod_3,
      name: "Основная услуга",
      price: "от 3.000 руб.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    sideProducts: [
      {
        image: prod_1,
        name: "Услуга 1",
        price: "от 1.000 руб.",
        description: "Description for product 1",
      },
      {
        image: prod_2,
        name: "Услуга 2",
        price: "от 1.500 руб.",
        description: "Description for product 1",
      },
      {
        image: prod_3,
        name: "Услуга 3",
        price: "от 2.000 руб.",
        description: "Description for product 1",
      },
      {
        image: prod_1,
        name: "Услуга 4",
        price: "от 2.500 руб.",
        description: "Description for product 1",
      },
    ],
  }),
  actions: {},
});
