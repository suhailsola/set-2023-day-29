import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // data validation required
    const inputLength = Object.values(event.target).filter(
      (element) => element.nodeName === "INPUT"
    ).length;
    const inputArray = Object.values(formData);
    const allDataSubmit =
      inputArray.length === inputLength && inputArray.every(Boolean);
    if (allDataSubmit) {
      console.log(formData, event.target);
    }
  };

  return (
    // fragment, can also use div
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[500px] p-4 rounded bg-white border-black border">
        <h1 className=" font-bold text-center">My second react form</h1>
        <form className="space-y-2 mt-2 " onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="Insert your first name"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => handleInputChange(e, "firstName")}
          />
          <label htmlFor="">Last Name:</label>
          <input
            placeholder="Insert your last name"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => handleInputChange(e, "lastName")}
          />
          <label htmlFor="">Email:</label>
          <input
            placeholder="Insert your email"
            className="border border-black rounded block w-full p-2"
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleInputChange(e, "email")}
          />
          <label htmlFor="">Phone Number:</label>
          <input
            placeholder="Insert your number"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="number"
            id="number"
            onChange={(e) => handleInputChange(e, "number")}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 px-4 rounded-md block w-full !mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
