import { useNavigate } from "react-router";
import QrCodeDiscord from "../../assets/image/ecommerce-react-javascript.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="flex flex-col md:flex-row justify-around p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-xl">Codex Space</h2>
          <h3 className="font-medium text-lg">Se inscreva</h3>
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-medium text-xl mb-4">Suporte</h2>
          <p>Brasil</p>
          <p>emailcodex@gmail.com</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Conta</h3>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Logar / Registar
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/cartproducts");
            }}
          >
            Carrinho
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/favorites");
            }}
          >
            Lista de Desejo
          </p>
          <p>Minha conta</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Links rápidos</h3>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigate("/about");
            }}
          >
            Sobre o projeto
          </p>
          <p>Politica de Privacidade</p>
          <p>Termo de Uso</p>
          <p>FAQ</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Participe</h3>
          <img src={QrCodeDiscord} className="w-22 h-20 mx-auto md:mx-0" />
        </div>
      </div>
      <div className="flex justify-center bg-gray-700 p-2">
        <p>&copy; 2024 - Codex Space | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
