const clientData = [
  {
    name: "Lyn",
    service: "Volume Lashes",
    imageUrl: new URL("../assets/clients/Lyn.png", import.meta.url),
  },
  {
    name: "Morgan",
    service: "Lash Lift & Tint",
    imageUrl: new URL("../assets/clients/Morgan.png", import.meta.url),
  },
  {
    name: "Kylee",
    service: "Brow Lamination & Tint",
    imageUrl: new URL("../assets/clients/Kylee.jpg", import.meta.url),
  },
  {
    name: "Jacqueline",
    service: "Volume Lashes",
    imageUrl: new URL("../assets/clients/Jacqueline.png", import.meta.url),
  },
  {
    name: "Alana",
    service: "Brow Lamination",
    imageUrl: new URL("../assets/clients/Alana.png", import.meta.url),
  },
];

const services = [
  {
    id: "fullsets",
    label: "Lash Extensions/Fullsets",
    subOptions: [
      {
        name: "Volume Fullset",
        time: "3.5",
        price: "200",
        description:
          "Bold and dramatic look, featuring lightweight, fluffy lashes expertly fanned to create maximum fullness and density.",
        src: "https://calendar.app.google/BuHLv1M7tX3RSkJq5",
      },
      {
        name: "Hybrid Fullset",
        time: "3.5",
        price: "180",

        description:
          "Perfect balance of natural and glam, a mix between classic and volume techniques, giving a textured, multi-dimensional look.",
        src: "https://calendar.app.google/5GuS27ctFHsogGkcA",
      },
      {
        name: "Classic Fullset",
        time: "3",
        price: "150",
        description:
          "Timeless and elegant, enhances your natural beauty with individual lashes for a subtle, mascara-like effect.",
        src: "https://calendar.app.google/kQGVayuEUEjDokX67",
      },
    ],
  },
  {
    id: "fills",
    label: "Lash Fills",
    subOptions: [
      {
        name: "Volume Fill",
        time: "2",
        price: "100",
        description: "2-3 weeks touch up for volume extensions",
        src: "https://calendar.app.google/jMngknFFUU59m9Hk7",
      },
      {
        name: "Hybrid Fill",
        time: "2",
        price: "90",
        description: "2-3 weeks touch up for hybrid extensions",
        src: "https://calendar.app.google/tX4FvHFs3P7Tg1kA6",
      },
      {
        name: "Classic Fill",
        time: "1.5",
        price: "80",
        description: "2-3 weeks touch up for classic extensions",
        src: "https://calendar.app.google/5UTYnKTsSLJPxB5P9",
      },
      {
        name: "Mini Fill",
        time: "1",
        price: "60",
        description: "less than 10 days touchup for any extensions",
        src: "https://calendar.app.google/rxHFFMvc5UhPJiHV6",
      },
    ],
  },
  {
    id: "lashlift",
    label: "Lash Lift",
    subOptions: [
      {
        name: "no Tint",
        time: "1",
        price: "100",
        description:
          "Semi-permanent treatment that curls and lifts your lashes for a stunning, eye-opening effect. Perfect for those seeking a low-maintenance alternative to lash extensions.",
        src: "https://calendar.app.google/HKtzUotap7dAB8UL7",
      },
      {
        name: "add Tint",
        time: "1.5",
        price: "130",
        description:
          "Tinting enhances the color of the lashes, creating a fuller, darker, and more defined look without mascara.",
        src: "https://calendar.app.google/CbqYmLTLPC4MNFHCA",
      },
    ],
  },
  {
    id: "browlam",
    label: "Brow Lamination",
    subOptions: [
      {
        name: "no Tint",
        time: "less than 1",
        price: "90",
        description:
          "Tame and shape your brows, designed to smooth and lift your natural hairs for a fuller, more defined, and polished look.",
        src: "https://calendar.app.google/dGzGPKmYvPBUuSPr8",
      },
      {
        name: "add Tint",
        time: "1",
        price: "120",
        description:
          "Enhance your brows' shape and color. Tinting defines brows that frame your face beautifully—ideal for effortless, long-lasting results.",
        src: "https://calendar.app.google/sEd5KhMDtVeiLuo29",
      },
    ],
  },
  {
    id: "hairremoval",
    label: "Hair Removal/Waxing",
    subOptions: [
      {
        name: "Lip",
        time: "less than .5",
        price: "15",
        description:
          "Removes unwanted hair from the upper lip for a smooth finish.",
        src: "https://calendar.app.google/3jkwbgNtfXXSLjoY6",
      },
      {
        name: "Underarm",
        time: "less than .5",
        price: "30",
        description: "Hair removal from both underarms for clean, soft skin.",
        src: "https://calendar.app.google/QoS6dTsmoYLXdVZc9",
      },
      {
        name: "Arm",
        time: ".5",
        price: "50",
        description:
          "Removes hair from both arms, leaving them silky and smooth.",
        src: "https://calendar.app.google/hgoWeLY1nuaq19SM9",
      },
      {
        name: "Leg",
        time: "less than 1",
        price: "65",
        description:
          "Removes hair from both upper and lower legs for flawlessly smooth legs.",
        src: "https://calendar.app.google/p8nKsxh9LTdpsYEz9",
      },
      {
        name: "Brazillian",
        time: "less than 1",
        price: "90",
        description:
          "All hair is removed from the bikini area for a completely clean look.",
        src: "https://calendar.app.google/Q5aUWvLacFcj7wMr7",
      },
    ],
  },
];

const baseUrl = "http://localhosr:3001/";

export { baseUrl, clientData, services };
