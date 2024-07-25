import ImgForm from "../../assets/image/image-form.jpeg";
import Footer from "../../components/footer";
import Header from "../../components/header";

function SignUp() {
  return (
    <div>
      <Header />
      <div className="flex">
        <img src={ImgForm} className="h-96" />
        <div>
          <h2 className="font-medium text-4xl">Crie sua conta</h2>
          <p>Digite seus dados abaixo</p>
          <form>
            <label htmlFor="fullname">Nome</label>
            <input type="text" id="fullname" name="fullname" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
            <button
              type="button"
              className="bg-red-500 rounded px-[122px] py-4 gap-3 border-2 border-red-500 text-inputBackgroundWhite"
            >
              Criar a conta
            </button>
            <button
              type="button"
              className="bg-white rounded px-[122px] py-4 gap-3 border-2 border-gray-400 text-black"
            >
              Cadastre com o Google
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
