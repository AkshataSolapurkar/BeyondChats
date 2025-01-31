import { GridBackground } from "@/components/backgroundlogin";
import AuthForm from "@/components/authcomponents/authform";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col lg:flex-row">
       {/* Right Section (Auth Form) */}
       <AuthForm
        buttonText="Sign Up"
        descriptionText="Enter Details Below to Registor"
        signupText="Have a account?"
        signupLink="/login"
        logintext="Login"
      />
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <GridBackground />
        <div className="max-w-2xl w-full">
          <div className="backdrop-blur-md bg-white/10 p-8 md:p-12 shadow-lg">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold">
                <span className="text-white">▶ AI Agent </span>
                <div className="flex flex-col">
                  <span className="text-white"> for creating Chatbot</span>
                  <span className="text-slate-800">for Websites.</span>
                </div>
              </h1>
              <p className="text-slate-800 text-lg md:text-xl">
                Add your own AI chatbot to your website in minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
