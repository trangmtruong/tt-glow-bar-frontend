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

const baseUrl = "http://localhosr:3001/";

const APIKey = "AIzaSyCP1Z64ib5RrQfhKj5NTQePKxtHPoXC8oc";

export { baseUrl, clientData };
