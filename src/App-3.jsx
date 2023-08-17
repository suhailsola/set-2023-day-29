import { useForm } from "react-hook-form";

function App() {
  // return handlers function
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("firstName"));

  return (
    // fragment, can also use div
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-[500px] p-4 rounded bg-white border-black border">
        <h1 className=" font-bold text-center">My third react form</h1>
        <form className="space-y-2 mt-2 " onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="Insert your first name"
            className="border border-black rounded block w-full p-2"
            type="text"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className=" text-sm text-red-500">
              First Name is required
            </span>
          )}
          <label htmlFor="">Last Name:</label>
          <input
            placeholder="Insert your last name"
            className="border border-black rounded block w-full p-2"
            type="text"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className=" text-sm text-red-500">Last Name is required</span>
          )}
          <label htmlFor="">Email:</label>
          <input
            placeholder="Insert your email"
            className="border border-black rounded block w-full p-2"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-sm text-red-500">Email is required</span>
          )}
          <label htmlFor="">Phone Number:</label>
          <input
            placeholder="Insert your number"
            className="border border-black rounded block w-full p-2"
            type="text"
            {...register("phoneNo", { required: true })}
          />
          {errors.phoneNo && (
            <span className=" text-sm text-red-500">
              Phone Number is required
            </span>
          )}
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
