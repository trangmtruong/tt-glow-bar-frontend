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
        // src: "https://calendar.app.google/BuHLv1M7tX3RSkJq5",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jlEGuckVXQy8O91ElTSAFu-IAW1_oVQT4RrrI14j7--BbYtB13HId811TFd5yMkQr2aNJw0JJ?gv=true",
      },
      {
        name: "Hybrid Fullset",
        time: "3.5",
        price: "180",

        description:
          "Perfect balance of natural and glam, a mix between classic and volume techniques, giving a textured, multi-dimensional look.",
        // src: "https://calendar.app.google/5GuS27ctFHsogGkcA",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ13_C50CKPN43rv62AVylZJF21OLOuothpUHYh98ww2ztsgprHs-_BhFuLTys709ZylgRKuYhzx?gv=true",
      },
      {
        name: "Classic Fullset",
        time: "3",
        price: "150",
        description:
          "Timeless and elegant, enhances your natural beauty with individual lashes for a subtle, mascara-like effect.",
        // src: "https://calendar.app.google/kQGVayuEUEjDokX67",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kMx-LDanVvkpQTgZ4ZyUo5hhS6Gx3sDaHF7M5ocjLfB8rsVj_cGdR44Jl0LY4Bri8zyNDrKtL?gv=true",
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
        // src: "https://calendar.app.google/jMngknFFUU59m9Hk7",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3l6mBnpsy_-h10nvyq9L98j15IoN1AkF7nLt0Q7wUtfbWomYRrt-fmKBEvTQS7_V_-XoK071kb?gv=true",
      },
      {
        name: "Hybrid Fill",
        time: "2",
        price: "90",
        description: "2-3 weeks touch up for hybrid extensions",
        // src: "https://calendar.app.google/tX4FvHFs3P7Tg1kA6",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ23vAbTQCqz_22qZil6s5pOD6s66Ij4mXluTZb8_JQo_YfTmk1tXcVND9PgbhJ1csiTIMbs7LOD?gv=true",
      },
      {
        name: "Classic Fill",
        time: "1.5",
        price: "80",
        description: "2-3 weeks touch up for classic extensions",
        // src: "https://calendar.app.google/5UTYnKTsSLJPxB5P9",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ38PQGGCRhD7cdU0U8ErjD6xBWHunugHS51f9N0JCH7yuKRZiLCXxq8LRVh7A8ZFyBYWtdPffl0?gv=true",
      },
      {
        name: "Mini Fill",
        time: "1",
        price: "60",
        description: "less than 10 days touchup for any extensions",
        // src: "https://calendar.app.google/rxHFFMvc5UhPJiHV6",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3zf8YwrYaYrgvQWfBnsxbh2ebSPmkLubkKIWONGF_PWSfUf1DRexdPCA66vGlGvkkf_bHzPlRp?gv=true",
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
        // src: "https://calendar.app.google/HKtzUotap7dAB8UL7",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Nm7qcALcordp4aF_ijQGuwiHSQWkxsO0CvrhT4gfb6EokoJfeCuJrtdfqvs726Oa7mp1ZQOZT?gv=true",
      },
      {
        name: "add Tint",
        time: "1.5",
        price: "130",
        description:
          "Tinting enhances the color of the lashes, creating a fuller, darker, and more defined look without mascara.",
        // src: "https://calendar.app.google/CbqYmLTLPC4MNFHCA",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0A3kjczSLbu7yVPS8FKgSbjchrEaDL26IXxKLuIYfAWPLHN9aFH_VbjjVA1JwE5-kQN9Ga-GeD?gv=true",
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
        // src: "https://calendar.app.google/dGzGPKmYvPBUuSPr8",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ22n724GhCgaQIc_W_90Esg38X1yzggcnYfECPbfkP11ByBtIYa6Mk__azXhdujMN6ens3Hyp3_?gv=true",
      },
      {
        name: "add Tint",
        time: "1",
        price: "120",
        description:
          "Enhance your brows' shape and color. Tinting defines brows that frame your face beautifully—ideal for effortless, long-lasting results.",
        // src: "https://calendar.app.google/sEd5KhMDtVeiLuo29",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0LY94yL6ABwbVssKsBY10yp-rR0eUkWliX3-r3quG4AjPjHKz67TR20MlkvVAHLg-tBrtfxq3z?gv=true",
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
        // src: "https://calendar.app.google/3jkwbgNtfXXSLjoY6",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qHwPh5vSs_sggpTLDxpEV23OrBEyfmbTx15k_ld2NzgLJEM_I3qWWnkCztVOJOHopdz1W-qOD?gv=true",
      },
      {
        name: "Underarm",
        time: "less than .5",
        price: "30",
        description: "Hair removal from both underarms for clean, soft skin.",
        // src: "https://calendar.app.google/QoS6dTsmoYLXdVZc9",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1J4gUDJKbOEaqpJIXGKXZSlgeGgj1LizPFkG3aS9TSNB2LRqrPxnPgsr0CQfOj6zmV8s1It6bT?gv=true",
      },
      {
        name: "Arm",
        time: ".5",
        price: "50",
        description:
          "Removes hair from both arms, leaving them silky and smooth.",
        // src: "https://calendar.app.google/hgoWeLY1nuaq19SM9",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0j69DNvaXYfHgg4uDBfi4AhjzgND7m_mTi1aqyN1wIx2CEb2zDcn-LW5tfs7kqXVZe_ODmHFXJ?gv=true",
      },
      {
        name: "Leg",
        time: "less than 1",
        price: "65",
        description:
          "Removes hair from both upper and lower legs for flawlessly smooth legs.",
        // src: "https://calendar.app.google/p8nKsxh9LTdpsYEz9",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1aBtY8yKxV5OotHUhxcs0QddHkftPuFoZJZ280FXFKh69K6LvyR5yr96-2LGonbk2spzZDphG8?gv=true",
      },
      {
        name: "Brazillian",
        time: "less than 1",
        price: "90",
        description:
          "All hair is removed from the bikini area for a completely clean look.",
        // src: "https://calendar.app.google/Q5aUWvLacFcj7wMr7",
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zXoa6QI6AF6ldhIk18kchZJjFmiBg35i9BpgjJC3sy3Z46MW9HhHiyPV-nZy4ljPdt0UBjL0z?gv=true",
      },
    ],
  },
];

const baseUrl = "http://localhosr:3001/";

export { baseUrl, clientData, services };
