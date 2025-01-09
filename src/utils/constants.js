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

const bookingCalendarOptions = [
  {
    service: "Classic Fullset",
    src: "https://calendar.app.google/kQGVayuEUEjDokX67",
  },
  {
    service: "Hybrid Fullset",
    src: "https://calendar.app.google/5GuS27ctFHsogGkcA",
  },
  {
    service: "Volume Fullset",
    src: "https://calendar.app.google/BuHLv1M7tX3RSkJq5",
  },
  {
    service: "Classic Fill",
    src: "https://calendar.app.google/5UTYnKTsSLJPxB5P9",
  },
  {
    service: "Hybrid Fill",
    src: "https://calendar.app.google/tX4FvHFs3P7Tg1kA6",
  },
  {
    service: "Volume Fill",
    src: "https://calendar.app.google/jMngknFFUU59m9Hk7",
  },
  {
    service: "Mini Fill",
    src: "https://calendar.app.google/rxHFFMvc5UhPJiHV6",
  },
  {
    service: "Lash Lift with Tint",
    src: "https://calendar.app.google/CbqYmLTLPC4MNFHCA",
  },
  {
    service: "Lash Lift",
    src: "https://calendar.app.google/HKtzUotap7dAB8UL7",
  },
  {
    service: "Brow Lamination with Tint",
    src: "https://calendar.app.google/sEd5KhMDtVeiLuo29",
  },
  {
    service: "Brow Lamination",
    src: "https://calendar.app.google/dGzGPKmYvPBUuSPr8",
  },
  {
    service: "Lip Wax",
    src: "https://calendar.app.google/3jkwbgNtfXXSLjoY6",
  },
  {
    service: "Underarm Wax",
    src: "https://calendar.app.google/QoS6dTsmoYLXdVZc9",
  },
  {
    service: "Arm Wax",
    src: "https://calendar.app.google/hgoWeLY1nuaq19SM9",
  },
  {
    service: "Leg Wax",
    src: "https://calendar.app.google/p8nKsxh9LTdpsYEz9",
  },
  {
    service: "Brazillian Wax",
    src: "https://calendar.app.google/Q5aUWvLacFcj7wMr7",
  },
];

const baseUrl = "http://localhosr:3001/";

export { baseUrl, clientData, bookingCalendarOptions };
