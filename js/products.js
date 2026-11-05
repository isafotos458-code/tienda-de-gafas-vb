// ============================================================
// PRODUCTOS DE LA ÓPTICA
// ------------------------------------------------------------
// - "img": ruta local de la foto del producto
// - "id": único para cada producto
// ============================================================

const PRODUCTS = [
  // 1. Anteojos Recetados (PRIMEROS EN MOSTRARSE)
  {
    id: "ar-001",
    categoria: "Recetados",
    nombre: "ADN2",
    descripcion: "Marco Acetato Italiano; patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (1).jpeg"
  },
  {
    id: "ar-002",
    categoria: "Recetados",
    nombre: "THIRTY ONE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (2).jpeg"
  },
  {
    id: "ar-003",
    categoria: "Recetados",
    nombre: "ONE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (3).jpeg"
  },
  {
    id: "ar-004",
    categoria: "Recetados",
    nombre: "FIFTEEN",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (4).jpeg"
  },
  {
    id: "ar-005",
    categoria: "Recetados",
    nombre: "THIRTY",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (5).jpeg"
  },
  {
    id: "ar-008",
    categoria: "Recetados",
    nombre: "OKA",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (8).jpeg"
  },
  {
    id: "ar-010",
    categoria: "Recetados",
    nombre: "THIRY FIVE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM.jpeg"
  },
  {
    id: "ar-011",
    categoria: "Recetados",
    nombre: "BARI RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.31 AM.jpeg"
  },
  {
    id: "ar-012",
    categoria: "Recetados",
    nombre: "CAPRI RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.31 AM (1).jpeg"
  },
  {
    id: "ar-013",
    categoria: "Recetados",
    nombre: "NAPOLES RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM.jpeg"
  },
  {
    id: "ar-014",
    categoria: "Recetados",
    nombre: "MODENA RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (1).jpeg"
  },
  {
    id: "ar-015",
    categoria: "Recetados",
    nombre: "MILAN",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (2).jpeg"
  },
  {
    id: "ar-016",
    categoria: "Recetados",
    nombre: "CALABRIA",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (3).jpeg"
  },
  {
    id: "ar-017",
    categoria: "Recetados",
    nombre: "VERONA",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (4).jpeg"
  },
  {
    id: "ar-018",
    categoria: "Recetados",
    nombre: "MAR",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (5).jpeg"
  },
  {
    id: "ar-019",
    categoria: "Recetados",
    nombre: "AZUL",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM.jpeg"
  },
  {
    id: "ar-020",
    categoria: "Recetados",
    nombre: "ALMENDRA RX",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (1).jpeg"
  },
  {
    id: "ar-021",
    categoria: "Recetados",
    nombre: "PIA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (2).jpeg"
  },
  {
    id: "ar-022",
    categoria: "Recetados",
    nombre: "MERY",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (3).jpeg"
  },
  {
    id: "ar-023",
    categoria: "Recetados",
    nombre: "CAMILA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (4).jpeg"
  },
  {
    id: "ar-024",
    categoria: "Recetados",
    nombre: "IBIZA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.34 AM.jpeg"
  },
  {
    id: "ar-030",
    categoria: "Recetados",
    nombre: "FELIX RX",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.50 PM.jpeg"
  },

  // 2. Categoría: "Mujer"
  {
    id: "ar-025",
    categoria: "Mujer",
    nombre: "BESOS",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.49.57 PM.jpeg"
  },
  {
    id: "ar-026",
    categoria: "Mujer",
    nombre: "GISE",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.20 PM (3).jpeg"
  },
  {
    id: "ar-028",
    categoria: "Mujer",
    nombre: "DANU",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.20 PM (4).jpeg"
  },
  {
    id: "ar-029",
    categoria: "Mujer",
    nombre: "ADONIS",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.21 PM.jpeg"
  },
  {
    id: "ar-031",
    categoria: "Mujer",
    nombre: "TINA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.21 PM (1).jpeg"
  },
  {
    id: "ar-034",
    categoria: "Mujer",
    nombre: "LUANA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.21 PM (3).jpeg"
  },
  {
    id: "ar-035",
    categoria: "Mujer",
    nombre: "LARA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.20 PM.jpeg"
  },
  {
    id: "ar-036",
    categoria: "Mujer",
    nombre: "LUCIANA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.20 PM (1).jpeg"
  },
  {
    id: "ar-037",
    categoria: "Mujer",
    nombre: "TAYLOR",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.20 PM (2).jpeg"
  },
  {
    id: "ar-039",
    categoria: "Mujer",
    nombre: "MARIA. L",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.55.21 PM (4).jpeg"
  },

  // 3. Categoría: "Hombre"
  {
    id: "ar-006",
    categoria: "Hombre",
    nombre: "KAZAN",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (6).jpeg"
  },
  {
    id: "ar-007",
    categoria: "Hombre",
    nombre: "BERLIN",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (7).jpeg"
  },
  {
    id: "ar-009",
    categoria: "Hombre",
    nombre: "RENATO",
    descripcion: "Armazon Metalico con patillas Flex.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (9).jpeg"
  },
  {
    id: "ar-027",
    categoria: "Hombre",
    nombre: "CAMPO",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.49 PM (1).jpeg"
  },
  {
    id: "ar-032",
    categoria: "Hombre",
    nombre: "RELATOS",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.50 PM (1).jpeg"
  },
  {
    id: "ar-033",
    categoria: "Hombre",
    nombre: "CLAVE",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.50 PM (3).jpeg"
  },
  {
    id: "ar-038",
    categoria: "Hombre",
    nombre: "PUAN",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.50 PM (4).jpeg"
  },
  {
    id: "ar-040",
    categoria: "Hombre",
    nombre: "GLORIA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.39.51 PM.jpeg"
  },

  // Anteojos de Sol
  {
    id: "so-001",
    categoria: "Lentes de Sol",
    nombre: "XXXVIII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.03.22 AM (1).jpeg"
  },
  {
    id: "so-002",
    categoria: "Lentes de Sol",
    nombre: "XXXVII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.03.22 AM (2).jpeg"
  },
  {
    id: "so-003",
    categoria: "Lentes de Sol",
    nombre: "XXXIII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.03.22 AM.jpeg"
  },
  {
    id: "so-004",
    categoria: "Lentes de Sol",
    nombre: "XIII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.06.40 AM (1).jpeg"
  },
  {
    id: "so-005",
    categoria: "Lentes de Sol",
    nombre: "XL",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.06.40 AM.jpeg"
  },
  {
    id: "so-006",
    categoria: "Lentes de Sol",
    nombre: "XXXV",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.06.41 AM.jpeg"
  },
  {
    id: "so-007",
    categoria: "Lentes de Sol",
    nombre: "ADN7",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.07.50 AM (1).jpeg"
  },
  {
    id: "so-008",
    categoria: "Lentes de Sol",
    nombre: "ADN8",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.07.50 AM.jpeg"
  },
  {
    id: "so-009",
    categoria: "Lentes de Sol",
    nombre: "AND5",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.07.51 AM (1).jpeg"
  },
  {
    id: "so-010",
    categoria: "Lentes de Sol",
    nombre: "ADN6",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-10-19 at 2.07.51 AM.jpeg"
  },
  {
    id: "so-011",
    categoria: "Lentes de Sol",
    nombre: "XVII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.55 PM.jpeg"
  },
  {
    id: "so-012",
    categoria: "Lentes de Sol",
    nombre: "XVIII",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.55 PM (1).jpeg"
  },
  {
    id: "so-013",
    categoria: "Lentes de Sol",
    nombre: "PIETRO",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.55 PM (2).jpeg"
  },
  {
    id: "so-014",
    categoria: "Lentes de Sol",
    nombre: "FRANCESCO",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.55 PM (3).jpeg"
  },
  {
    id: "so-015",
    categoria: "Lentes de Sol",
    nombre: "VITO",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.55 PM (4).jpeg"
  },
  {
    id: "so-016",
    categoria: "Lentes de Sol",
    nombre: "STEFANO",
    descripcion: "Marco de Acetato.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-04 at 8.24.56 PM.jpeg"
  },

  // Infantil
  {
    id: "inf-001",
    categoria: "Infantil",
    nombre: "CLARA",
    descripcion: "Diseño infantil cómodo y flexible.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.18 AM.jpeg"
  },
  {
    id: "inf-002",
    categoria: "Infantil",
    nombre: "OPHELIA",
    descripcion: "Marco suave y resistente para niños.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.19 AM.jpeg"
  },
  {
    id: "inf-003",
    categoria: "Infantil",
    nombre: "ALMENDRA RX",
    descripcion: "Modelo adaptado para corrección visual temprana.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.19 AM (1).jpeg"
  },
  {
    id: "inf-004",
    categoria: "Infantil",
    nombre: "OLIVIA",
    descripcion: "Visión cómoda para uso escolar.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.23.42 AM.jpeg"
  },
  {
    id: "inf-005",
    categoria: "Infantil",
    nombre: "JADE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.19 AM (2).jpeg"
  },
  {
    id: "inf-006",
    categoria: "Infantil",
    nombre: "MARBELLA",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (4).jpeg"
  },
  {
    id: "inf-007",
    categoria: "Infantil",
    nombre: "JAMIE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (1).jpeg"
  },
  {
    id: "inf-008",
    categoria: "Infantil",
    nombre: "MYKONOS",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (2).jpeg"
  },
  {
    id: "inf-009",
    categoria: "Infantil",
    nombre: "MALDIVAS",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (3).jpeg"
  },
  {
    id: "inf-010",
    categoria: "Infantil",
    nombre: "FRANCESCA",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM (2).jpeg"
  },
  {
    id: "inf-011",
    categoria: "Infantil",
    nombre: "EMILY",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM.jpeg"
  },
  {
    id: "inf-012",
    categoria: "Infantil",
    nombre: "JULIETTE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM (1).jpeg"
  },

  // Accesorios
  {
    id: "ac-001",
    categoria: "Accesorios",
    nombre: "Sujetador Neoprene",
    descripcion: "Accesorio para mas proteccion.",
    precio: 16000,
    img: "images/WhatsApp Image 2026-11-04 at 10.48.04 PM.jpeg"
  },
  {
    id: "ac-002",
    categoria: "Accesorios",
    nombre: "Sujetador Holders",
    descripcion: "Accesorio para mas proteccion.",
    precio: 15000,
    img: "images/WhatsApp Image 2026-11-04 at 10.47.00 PM (1).jpeg"
  },
  {
    id: "ac-003",
    categoria: "Accesorios",
    nombre: "Sujetador de anteojos basico.",
    descripcion: "Accesorio para mas proteccion.",
    precio: 4500,
    img: "images/WhatsApp Image 2026-11-04 at 10.47.00 PM.jpeg"
  },
  {
    id: "ac-004",
    categoria: "Accesorios",
    nombre: "Sujetador de anteojos colores",
    descripcion: "Accesorio para mas proteccion.",
    precio: 8500,
    img: "images/WhatsApp Image 2026-11-04 at 10.57.33 PM.jpeg"
  },
  {
    id: "ac-005",
    categoria: "Accesorios",
    nombre: "CLIPONES",
    descripcion: "5 en 1.",
    precio: 95000,
    img: "images/WhatsApp Image 2026-11-05 at 4.05.28 AM (1).jpeg"
  },
  {
    id: "ac-006",
    categoria: "Accesorios",
    nombre: "CLIPONES",
    descripcion: "",
    precio: 90000,
    img: "images/cordoba-clipones.webp"
  },

  // Lentes de contacto (AIR OPTIX y ACUVUE)
  {
    id: "lc-001",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "AZUL.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-002",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "AZUL BRILLANTE.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-003",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX",
    descripcion: "HYDRA GLYDE PLUS.",
    precio: 133900,
    img: "images/WhatsApp Image 2026-11-05 at 4.18.31 AM.jpeg"
  },
  {
    id: "lc-004",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "GRIS.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-005",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "GRIS VIBRANTE.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-006",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "MIEL.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-007",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "PURE HAZEL.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-008",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX",
    descripcion: "HYDRA GLYDE PLUS.",
    precio: 159000,
    img: "images/WhatsApp Image 2026-11-05 at 4.17.46 AM.jpeg"
  },
  {
    id: "lc-009",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "VERDE.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-010",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX COLORS",
    descripcion: "VERDE ESMERALDA.",
    precio: 55790,
    img: "images/WhatsApp Image 2026-11-05 at 4.14.25 AM.jpeg"
  },
  {
    id: "lc-011",
    categoria: "AIR OPTIX",
    nombre: "AIR OPTIX",
    descripcion: "HYDRA GLYDE PLUS.",
    precio: 89900,
    img: "images/WhatsApp Image 2026-11-05 at 4.16.43 AM.jpeg"
  },
  {
    id: "lc-012",
    categoria: "ACUVUE",
    nombre: "ACUVUE 2",
    descripcion: "Caja de 6 lentes de contacto.",
    precio: 85900,
    img: "images/WhatsApp Image 2026-11-05 at 4.19.45 AM.jpeg"
  },
  {
    id: "lc-013",
    categoria: "ACUVUE",
    nombre: "ACUVUE OAYIS",
    descripcion: "Caja de 6 lentes de contacto - Astigmatismo.",
    precio: 102900,
    img: "images/WhatsApp Image 2026-11-05 at 4.20.38 AM.jpeg"
  },
  {
    id: "lc-014",
    categoria: "ACUVUE",
    nombre: "ACUVUE VITA",
    descripcion: "Caja de 6 lentes de contacto.",
    precio: 164900,
    img: "images/WhatsApp Image 2026-11-05 at 4.21.27 AM (1).jpeg"
  },
  {
    id: "lc-015",
    categoria: "ACUVUE",
    nombre: "ACUVUE MOIST",
    descripcion: "Caja de 30 lentes de contacto.",
    precio: 120900,
    img: "images/WhatsApp Image 2026-11-05 at 4.22.10 AM.jpeg"
  },
  {
    id: "lc-016",
    categoria: "ACUVUE",
    nombre: "ACUVUE OASYS",
    descripcion: "Caja de 6 lentes de contacto.",
    precio: 153900,
    img: "images/WhatsApp Image 2026-11-05 at 4.23.34 AM.jpeg"
  },
  {
    id: "lc-017",
    categoria: "ACUVUE",
    nombre: "ACUVUE OASYS",
    descripcion: "Caja de 30 lentes de contacto.",
    precio: 98900,
    img: "images/WhatsApp Image 2026-11-05 at 4.24.18 AM.jpeg"
  },
  {
    id: "lc-018",
    categoria: "ACUVUE",
    nombre: "ACUVUE OASYS",
    descripcion: "Caja de 6 lentes de contacto.",
    precio: 154000,
    img: "images/WhatsApp Image 2026-11-05 at 4.24.52 AM.jpeg"
  },

  // Líquido de lentes de contacto
  {
    id: "liq-101",
    categoria: "Liquido para Lentes de contacto",
    nombre: "Líquido Único de Limpieza",
    descripcion: "Frasco de 100ml con estuche incluido.",
    precio: 5500,
    img: "images/WhatsApp Image 2026-11-05 at 5.31.38 AM.jpeg"
  },

  // Marcas (MOOD y VOLGA)
  {
    id: "ar-011",
    categoria: "MOOD",
    nombre: "BARI RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.31 AM.jpeg"
  },
  {
    id: "ar-012",
    categoria: "MOOD",
    nombre: "CAPRI RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.31 AM (1).jpeg"
  },
  {
    id: "ar-013",
    categoria: "MOOD",
    nombre: "NAPOLES RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM.jpeg"
  },
  {
    id: "ar-014",
    categoria: "MOOD",
    nombre: "MODENA RX",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (1).jpeg"
  },
  {
    id: "ar-015",
    categoria: "MOOD",
    nombre: "MILAN",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (2).jpeg"
  },
  {
    id: "ar-016",
    categoria: "MOOD",
    nombre: "CALABRIA",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (3).jpeg"
  },
  {
    id: "ar-017",
    categoria: "MOOD",
    nombre: "VERONA",
    descripcion: "Armazón de TR90.",
    precio: 99000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (4).jpeg"
  },
  {
    id: "inf-005",
    categoria: "MOOD",
    nombre: "JADE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.19 AM (2).jpeg"
  },
  {
    id: "inf-004",
    categoria: "MOOD",
    nombre: "OLIVIA",
    descripcion: "Visión cómoda para uso escolar.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.23.42 AM.jpeg"
  },
  {
    id: "ar-019",
    categoria: "MOOD",
    nombre: "AZUL",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM.jpeg"
  },
  {
    id: "ar-018",
    categoria: "MOOD",
    nombre: "MAR",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.32 AM (5).jpeg"
  },
  {
    id: "ar-020",
    categoria: "MOOD",
    nombre: "ALMENDRA RX",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (1).jpeg"
  },
  {
    id: "ar-021",
    categoria: "MOOD",
    nombre: "PIA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (2).jpeg"
  },
  {
    id: "ar-022",
    categoria: "MOOD",
    nombre: "MERY",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (3).jpeg"
  },
  {
    id: "ar-023",
    categoria: "MOOD",
    nombre: "CAMILA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.33 AM (4).jpeg"
  },
  {
    id: "ar-024",
    categoria: "MOOD",
    nombre: "IBIZA",
    descripcion: "Acetato Italiano; Patillas con alma de acero.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-21 at 3.02.34 AM.jpeg"
  },
  {
    id: "inf-001",
    categoria: "MOOD",
    nombre: "CLARA",
    descripcion: "Diseño infantil cómodo y flexible.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.18 AM.jpeg"
  },
  {
    id: "inf-002",
    categoria: "MOOD",
    nombre: "OPHELIA",
    descripcion: "Marco suave y resistente para niños.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-10-19 at 2.18.19 AM.jpeg"
  },
  {
    id: "inf-006",
    categoria: "MOOD",
    nombre: "MARBELLA",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (4).jpeg"
  },
  {
    id: "inf-007",
    categoria: "MOOD",
    nombre: "JAMIE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (1).jpeg"
  },
  {
    id: "inf-008",
    categoria: "MOOD",
    nombre: "MYKONOS",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (2).jpeg"
  },
  {
    id: "inf-009",
    categoria: "MOOD",
    nombre: "MALDIVAS",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.47 PM (3).jpeg"
  },
  {
    id: "inf-010",
    categoria: "MOOD",
    nombre: "FRANCESCA",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM (2).jpeg"
  },
  {
    id: "inf-011",
    categoria: "MOOD",
    nombre: "EMILY",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM.jpeg"
  },
  {
    id: "inf-012",
    categoria: "MOOD",
    nombre: "JULIETTE",
    descripcion: "Estilo colorido y divertido para chicos.",
    precio: 129000,
    img: "images/WhatsApp Image 2026-11-04 at 8.12.48 PM (1).jpeg"
  },
  {
    id: "ar-001",
    categoria: "VOLGA",
    nombre: "ADN2",
    descripcion: "Marco Acetato Italiano; patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (1).jpeg"
  },
  {
    id: "ar-002",
    categoria: "VOLGA",
    nombre: "THIRTY ONE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (2).jpeg"
  },
  {
    id: "ar-003",
    categoria: "VOLGA",
    nombre: "ONE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (3).jpeg"
  },
  {
    id: "ar-004",
    categoria: "VOLGA",
    nombre: "FIFTEEN",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (4).jpeg"
  },
  {
    id: "ar-008",
    categoria: "VOLGA",
    nombre: "OKA",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM (8).jpeg"
  },
  {
    id: "ar-010",
    categoria: "VOLGA",
    nombre: "THIRY FIVE",
    descripcion: "Marco Acetato Italiano; Patillas con alma de acero.",
    precio: 149000,
    img: "images/WhatsApp Image 2026-10-16 at 7.06.13 PM.jpeg"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = PRODUCTS;