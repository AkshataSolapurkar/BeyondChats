import Image from "next/image";
import dummylogo from "../../../public/dummy logo.jpg"
import Link from "next/link";
interface AuthFormProps {
  buttonText: string;
  descriptionText: string;
  signupText: string;
  signupLink: string;
  logintext?: string;
  buttonlinks?: string;
}

export default function AuthForm({
  buttonText,
  descriptionText,
  signupText,
  logintext,
  signupLink,
  buttonlinks
}: AuthFormProps) {
  return (
    <div className="w-full text-black lg:w-1/2 flex flex-col bg-white p-8">
      <Image src={dummylogo} alt="logo" width={90} height={90} className="text-left" />
      <div className="w-full flex flex-col py-10 px-8">
        <h1 className="text-4xl text-black font-bold mb-2">Hey, Hello 👋</h1>
        <p className="text-gray-600 mb-[10%]">{descriptionText}</p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-sm mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder=""
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder=""
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="peer hidden" />
              <div className="h-4 w-4 rounded-md border border-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-[#5cabf9] peer-checked:via-[#5e7ef9] peer-checked:to-[#9b8cfb]" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <Link href="/userRegister">
            <button className="w-full bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              {buttonText}
            </button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-600">or</span>
        </div>

        <button className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center">
          <img
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
            alt="Google"
            className="w-6 h-6 mr-2"
          />
          Sign in with Google
        </button>

        <div className="mt-4 text-center">
          <span className="text-gray-600">{signupText} </span>
          <Link href={signupLink} className="text-blue-600 hover:underline">
            {logintext}
          </Link>
        </div>
      </div>
    </div>
  );
}
