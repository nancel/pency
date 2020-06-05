import {Tenant} from "./types";

export const DEFAULT_TENANT: Omit<Tenant, "id" | "slug"> = {
  phone: "5491173694572",
  color: "cyan",
  title: "Hay Tiendas",
  description: "Armá tu tienda y recibí los pedidos via WhatsApp",
  instagram: "",
  facebook: "",
  twitter: "",
  logo: "",
  banner: "",
  category: "",
  highlight: "",
  fields: [],
  keywords: "haytiendas, tienda, online, whatsapp, delivery, pedidos",
};

export const CATEGORIES = [
  "Accesorios para vehículos",
  "Almacén / Kiosco",
  "Arte / Artesanías",
  "Artículos para bebés",
  "Artículos para mascotas",
  "Autoservicio / Minimercado",
  "Bar",
  "Belleza y cuidado personal",
  "Bicicletería",
  "Calzado",
  "Carnicería",
  "Carpintería",
  "Centro de salud",
  "Cerrajería",
  "Chocolatería",
  "Comida rápida",
  "Concesionaria",
  "Cooperativa",
  "Cotillón",
  "Delivery",
  "Dietética",
  "Electrodomésticos",
  "Establecimiento educativo",
  "Estacionamiento",
  "Fábrica de pastas",
  "Ferretería",
  "Flete",
  "Gomería / Taller mecánico",
  "Heladería",
  "Herramientas y construcción",
  "Herrería y carpintería",
  "Hipermercado / Mayorista",
  "Hogar y decoración",
  "Iluminación",
  "Imprenta",
  "Informática",
  "Inmobiliaria",
  "Instrumentos musicales",
  "Jardinería",
  "Joyería y relojería",
  "Juegos y juguetes",
  "Lavadero de autos",
  "Librería",
  "Lubricentro",
  "Máquinas expendedoras",
  "Marroquinería, cueros y pieles",
  "Motos",
  "Mueblería",
  "Óptica",
  "Organización de eventos",
  "Organización sin fines de lucro",
  "Panadería",
  "Peluquería",
  "Perfumería",
  "Pesca y camping",
  "Pescadería",
  "Pinturería",
  "Restaurante",
  "Ropa y accesorios",
  "Salud / Farmacia",
  "Servicio de diseño y publicidad",
  "Servicio de fotografía",
  "Servicio de reparación de articulos electrónicos",
  "Servicio informático",
  "Servicios de mensajerías.",
  "Servicios de salud",
  "Servicios para el hogar",
  "Servicios profesionales",
  "Supermercado",
  "Teatro",
  "Telefonía y electrónica",
  "Tintorerías y lavadero",
  "Transporte de pasajeros",
  "Venta de autopartes y talleres",
  "Venta de productos de granja",
  "Verdulería",
  "Veterinaria",
  "Viajes y turismo",
  "Vinoteca",
  "Vivero / Florería",
];
