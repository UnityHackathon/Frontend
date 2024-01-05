import google from "./../assets/google.svg";
import login from "./../assets/images/login.jpg"

const Login = () => {
  return (
    <>
      <div className="flex bg-white sm:m-20 md:m-15  ">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 pt-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to Our Platfom
            </h2>
            <p className="text-gray-400 text-center mt-3">
              Find assistance everywhere you are
            </p>
          </div>
          <div>
            <a href="#">
              <button
                type="submit"
                className="flex w-full justify-center bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-gray-400 shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10 border-b hover:bg-gray-100 transition-all duration-100 pb-2 "
              >
                <img
                  src={google}
                  alt="icon/social"
                  className="h-8 w-8 flex items-center cursor-pointer md:h-6 md:w-6 sm:w-5 sm:h-5 me-1 "
                />
                Log in with Google
              </button>
            </a>
            <p className="text-gray-400 text-center mt-3">
              or
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST">
              <div>
                <div className="mt-2 mb-6">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email adress"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-gray-600 placeholder:text-gray-400  focus:ring-green-600 sm:text-sm sm:leading-6 placeholder:ms-3 ps-1"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-gray-600 placeholder:text-gray-400  focus:ring-green-600 sm:text-sm sm:leading-6 ps-1 mb-10 "
                  />
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 transition-all duration-200 mt-7"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-sm:hidden flex-1">
          <img
            src= {login}
            alt="login-img"
            className="w-auto h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
