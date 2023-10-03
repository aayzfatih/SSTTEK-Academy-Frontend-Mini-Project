import { useState } from "react";

function Settings() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [age, setAge] = useState(null);
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: name,
      surName: surName,
      age: age,
    };
    setUsers([...users, newUser]);
    setSurname("");
    setName("");
    setAge("");
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4"></div>
            <div className="mx-auto max-w-[700px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex flex-col items-center gap-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Adiniz
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 w-64 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Soyadiniz
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 w-64 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    value={surName}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Yasiniz
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-2 w-64 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <button className="bg-blue-500 w-64 text-white hover:bg-blue-700 mt-4 p-3 rounded-full">
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Settings;
