
const Signup = () => {
  return (
    
    <>
    <form action="POST" className="w-1/2">
            <div className="mb-4 pb-5">
              <h1 className="text-3xl font-semibold">Sign In</h1>
              <h2 className="font-serif pt-4">Welcome! Please Sign In.</h2>
            </div>

            <div className="mb-6 w-7/8">
              <label className="block text-gray-700 mb-1" htmlFor="username">
                Email
              </label>
              <input
                required
                autoComplete="off"
                className="form-input shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="Name"
                placeholder="Name"
              />
              <label
                className="block text-gray-700 mt-4 mb-1"
                htmlFor="username"
              >
                Password
              </label>
              <input
                required
                autoComplete="off"
                className="form-input shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="Name"
                placeholder="Name"
              />
            </div>
            <div className="flex justify-between pb-3">
              <label className="md:w-1/2 block  ">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="">Remember me</span>
              </label>
              <a href="#!" className="text-blue-700 font-bold">
                Forgot Password?
              </a>
            </div>
            <button className="rounded-lg bg-blue-600 text-white w-full p-3 mt-5 font-semibold shadow-xl">
              Sign In
            </button>
            <div className=" flex justify-center pt-10">
              Don't have an account?{" "}
              <span>
                <a href="#!" className="text-blue-700">
                  Sign Up
                </a>
              </span>
            </div>
          </form>
    </>

  )
}

export default Signup