'use client'
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginForm =  () => {
  const router = useRouter()
  
  // define handle login
  async function handleLogin(userInfo) {
    // define structure object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),

    };
    console.log(newUserInfo)
    // calling next auth service and passing " newUseInfo "
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    // checking is login success nor not 
    if(res?.status == 200) {
      router.push('/todo-list')
    }
  }
  return (
    <main className="pl-10  overflow-hidden h-screen">
      <section className="px-5 mt-6 w-full">
        <div className="flex justify-between">
          <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
        </div>
        <div className="w-auto h-auto flex justify-around mt-10 ">
          <div className="mt-20">
            <div className="w-[400px] h-[450px] mx-20 my-20 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-2 p-5  drop-shadow-lg">
                Login
              </h1>
              <form action={handleLogin} className="max-w-sm m-auto">
                <div className="mb-7">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="mb-7">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mb-7 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>

                <p className=" mb-2 py-2.5 text-sm font-light text-gray-900 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </a>
                </p>

                <div class=" mb-5 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray tracking-wide font-medium bg-white transform translate-y-1/2">
                    Continue with
                  </div>
                </div>
                <button class="mt-9 w-full  font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center ">
                  <div class="bg-white p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">Google</span>
                </button>
              </form>
            </div>

            <p className="text-gray">© 2024 My office . All Rights Reserved</p>
          </div>
          <div className="w-[500px] h-[650px] bg-blue-600 rounded-xl">
            <Image src={"/assets/icons/login.svg"} width={500} height={450} />
          </div>
        </div>
      </section>
    </main>
  );
};
export default loginForm;
