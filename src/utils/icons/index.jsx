import React from "react";
import {
  Baby,
  BookOpen,
  Brush,
  Camera,
  Car,
  Clapperboard,
  Construction,
  Drill,
  Dumbbell,
  Factory,
  Gamepad2,
  Gem,
  Guitar,
  HeartPulse,
  Home,
  House,
  KeySquare,
  Martini,
  Monitor,
  PartyPopper,
  PawPrint,
  Refrigerator,
  Shapes,
  Shirt,
  Smartphone,
  SquareLibrary,
  Ticket,
  Tractor,
  UserCog,
  Video,
} from "lucide-react";

export const renderIconByName = (categoryName, size = 48) => {
  switch (categoryName.toLowerCase()) {
    case "celulares e telefones":
      return <Smartphone size={size} />;
    case "informática":
      return <Monitor size={size} />;
    case "acessórios para veículos":
      return <Car size={size} />;
    case "agro":
      return <Tractor size={size} />;
    case "alimentos e bebidas":
      return <Martini size={size} />;
    case "games":
      return <Gamepad2 size={size} />;
    case "animais":
      return <PawPrint size={size} />;
    case "antiguidades e coleções":
      return <SquareLibrary size={size} />;
    case "arte, papelaria e armarinho":
      return <Brush size={size} />;
    case "bebês":
      return <Baby size={size} />;
    case "beleza e cuidado pessoal":
      return <UserCog size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "calçados, roupas e bolsas":
      return <Shirt size={size} />;
    case "câmeras e acessórios":
      return <Camera size={size} />;
    case "carros, motos e outros":
      return <KeySquare size={size} />;
    case "casa, móveis e decoração":
      return <Home size={size} />;
    case "construção":
      return <Construction size={size} />;
    case "eletrodomésticos":
      return <Refrigerator size={size} />;
    case "eletrônicos, áudio e vídeo":
      return <Video size={size} />;
    case "esportes e fitness":
      return <Dumbbell size={size} />;
    case "ferramentas":
      return <Drill size={size} />;
    case "festas e lembrancinhas":
      return <PartyPopper size={size} />;
    case "imóveis":
      return <House size={size} />;
    case "indústria e comércio":
      return <Factory size={size} />;
    case "ingressos":
      return <Ticket size={size} />;
    case "instrumentos musicais":
      return <Guitar size={size} />;
    case "joias e relógios":
      return <Gem size={size} />;
    case "livros, revistas e comics":
      return <BookOpen size={size} />;
    case "música, filmes e seriados":
      return <Clapperboard size={size} />;
    case "saúde":
      return <HeartPulse size={size} />;
    default:
      return null;
  }
};
