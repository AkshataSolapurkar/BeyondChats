import { GridBackground } from "@/components/backgroundlogin";
export default function Home() {
    return (
        <div className="min-h-screen w-full relative flex flex-col lg:flex-row">
  
        {/* Left Section */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <GridBackground />
          <div className="max-w-2xl w-full">
            <div className="backdrop-blur-md bg-white/10 p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold">
                  <span className="text-white">▶ Digital platform</span>
                  <div className="flex flex-col">
                    <span className="text-white">for distance</span>
                    <span className="text-slate-800">learning.</span>
                  </div>
                </h1>
                <p className="text-slate-800 text-lg md:text-xl">
                  You will never know everything but you will learn more
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
       
        <div className="w-full lg:w-1/2 flex bg-white flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Digital platform for distance learning.</h1>
          <p className="text-center text-gray-600 mb-6">You will never know everything. But you will know more.</p>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <span className="text-gray-600">or</span>
          </div>
          
          <button className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center">
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
    );
  }
  