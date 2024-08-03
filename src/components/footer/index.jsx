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
          <address>
            <p>Brasil</p>
            <p>emailcodex@gmail.com</p>
          </address>
        </div>

        <nav aria-label="Conta" className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Conta</h3>
          <ul>
            <li>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Logar / Registrar
              </p>
            </li>
            <li>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/cartproducts");
                }}
              >
                Carrinho
              </p>
            </li>
            <li>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/favorites");
                }}
              >
                Lista de Desejo
              </p>
            </li>
            <li>Minha conta</li>
          </ul>
        </nav>

        <nav aria-label="Links rápidos" className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Links rápidos</h3>
          <ul>
            <li>
              <a href="https://www.mercadolivre.com.br/" target="_blank" className="cursor-pointer hover:underline">
                Site Oficial
              </a>
            </li>
            <li>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/about");
                }}
              >
                Sobre o Projeto
              </p>
            </li>
            <li>Política de Privacidade</li>
            <li>Termo de Uso</li>
            <li>FAQ</li>
          </ul>
        </nav>

        <div className="text-center md:text-left">
          <h3 className="font-medium text-xl mb-4">Participe</h3>
          <img
            src={QrCodeDiscord}
            alt="QRCode do Discord"
            className="w-22 h-20 mx-auto md:mx-0"
          />
        </div>
      </div>
      <div className="flex justify-center bg-gray-700 p-2">
        <p>&copy; 2024 - Codex Space | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
