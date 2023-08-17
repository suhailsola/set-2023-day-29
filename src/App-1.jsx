import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleSubmit = () => {
    console.log({ firstName, lastName, email, phoneNo });
  };

  return (
    // fragment, can also use div
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[500px] p-4 rounded bg-white border-black border">
        <h1 className=" font-bold text-center">My first react form</h1>
        <div className="space-y-2 mt-2 ">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="Insert your first name"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => handleFirstName(e)}
          />
          <label htmlFor="">Last Name:</label>
          <input
            placeholder="Insert your last name"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => handleLastName(e)}
          />
          <label htmlFor="">Email:</label>
          <input
            placeholder="Insert your email"
            className="border border-black rounded block w-full p-2"
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleEmail(e)}
          />
          <label htmlFor="">Phone Number:</label>
          <input
            placeholder="Insert your number"
            className="border border-black rounded block w-full p-2"
            type="text"
            name="number"
            id="number"
            onChange={(e) => handlePhoneNo(e)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white p-2 px-4 rounded-md block w-full !mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
