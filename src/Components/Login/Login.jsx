import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [signInLoading, setSignInLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [open, setOpen] = useState(false);

  //   const signInBg = {
  //     background: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)), url(${bg3})`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setSignInLoading(true);
    // User Login Method
    // userSignIn(data?.email, data?.password)
    //   .then((res) => {
    //     PublicAxios.get(`/user-role?email=${res?.user?.email}`)
    //       .then((resp) => {
    //         if (resp.data.role) {
    //           reset();
    //           setSignInLoading(false);
    //           navigate("/");
    //           toast.success("Login Successfully");
    //         }
    //         //  if(resp.data.role === 'admin') {
    //         //   reset();
    //         //   setSignInLoading(false);
    //         //   navigate("/dashboard"); //it will update after complete the admin dashboard
    //         //   toast.success("Login Successfully");
    //         //  }
    //       })
    //       .catch((err) => {
    //         setSignInLoading(false);
    //         toast.error(err.message);
    //       });
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //     setSignInLoading(false);
    //   });
  };

  return (
    <div className="h-[100vh] flex items-center">
      {/* form */}
      <div className="w-full 2xl:w-[500px] 2xl:mx-auto md:rounded-s-2xl 2xl:rounded-2xl bg-[#1C1B1E]">
        <div className="px-8 py-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-2xl font-medium mb-8">
              Login to your dashboard
            </h1>
            <div className="space-y-4">
              {/* email field */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="">Your email</span>
                </div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="foursquarebd@gmail.com"
                  className="p-3 rounded-md bg-[#29282B] text-[#AFADAD] outline-none"
                  required
                />
              </label>
              {/* email field */}

              {/* password field */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="">Your password</span>
                </div>
                <div className="relative">
                  <input
                    type={open ? "text" : "password"}
                    {...register("password")}
                    placeholder="*************"
                    className="p-3 rounded-md bg-[#29282B] text-[#AFADAD] outline-none w-full"
                    required
                  />
                  <span
                    onClick={() => setOpen(!open)}
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    {" "}
                    {open ? (
                      <IoEyeOutline className="text-xl" />
                    ) : (
                      <FaEyeSlash className="text-xl" />
                    )}
                  </span>
                </div>
              </label>
              {/* password field */}
              <div>
                <p className="underline text-right">forget password?</p>
              </div>

              <div>
                <div className="form-control w-full">
                  <button className="text-base flex justify-center items-center bg-white text-black font-medium py-2 rounded-md">
                    {signInLoading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                <div className="form-control w-full mt-6">
                  <button className="text-base flex justify-center items-center border-2 border-white font-medium py-2 rounded-md">
                    {signInLoading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      <span className="flex items-center gap-5">
                        <FcGoogle className="text-2xl"></FcGoogle> Login with
                        google
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* form */}
    </div>
  );
};

export default Login;
