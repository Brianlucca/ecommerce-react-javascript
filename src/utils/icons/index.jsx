import React from "react";
import {
  Baby,
  Brush,
  Camera,
  Car,
  Gamepad2,
  Headphones,
  Martini,
  Monitor,
  PawPrint,
  Shapes,
  Smartphone,
  SquareLibrary,
  Tractor,
  UserCog,
  Watch,
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
    case "":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    case "brinquedos e hobbies":
      return <Shapes size={size} />;
    default:
      return null;
  }
};
