import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "./assets/login.jpg";
function Login() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "admin" && userName === "admin") {
      navigate("todo");
    } else {
      alert("Hatali giris yaptiniz tekrar deneyiniz");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
        >
          <div className="flex flex-col text-gray-400 py-2">
            <label>Kullanici Adi</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Sifre</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Giris Yap
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
