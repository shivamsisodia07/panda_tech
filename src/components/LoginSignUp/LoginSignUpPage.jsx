import {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPass from "./ResetPassword";
import Forgetpassword from "./ForgetPass"
import bg from "../../../public/assets/bg.png";
import ResendLink from "./ResendLink";
import ResetPasswordDone from "./ResetPasswordDone";
const LoginSignUpPage = () => {

 const [currentView, setcurrentView] = useState('login');

 const handleLoginClick=()=>{
  setcurrentView('login')
 }
 const handleSignInClick=()=>{
  setcurrentView('signin');
 }
 const handleForgetPassClick=()=>{
  setcurrentView('forget-pass')
 }
 const handleGetLinkClick=()=>{
  setcurrentView('resend-link')
 }
 const handleSetNewPassClick=()=>{
  setcurrentView('reset-pass');
 }
 const handleResetPassClick=()=>{
  setcurrentView('reset-pass-done')
 }
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-2/3 bg-cover bg-center h-screen  p-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-4xl font-bold text-white">Welcome to PANDA</h1>
      </div>

      <div className="w-1/3 h-screen p-8">
        <div className="flex justify-center items-center gap-3 mb-4">
          <button className="px-4 py-2" onClick={handleLoginClick}>Join PANDA</button>
          <button className="px-4 py-2" onClick={handleSignInClick}>Sign in</button>
        </div>

       {currentView === 'login' && <Login setcurrentView={setcurrentView} onSignInClick={handleSignInClick} onForgetPassClick={handleForgetPassClick} />}
       {currentView === 'signin' && <SignUp setcurrentView={setcurrentView} onForgetPassClick={handleForgetPassClick} />}
       {currentView === 'forget-pass' && <Forgetpassword setcurrentView={setcurrentView} onGetLinkClick={handleGetLinkClick} />}
       {currentView === 'resend-link' && <ResendLink  setcurrentView={setcurrentView} onSetNewPassClick={handleSetNewPassClick} />}
       {currentView === 'reset-pass' && <ResetPass setcurrentView={setcurrentView} onResetPassClick={handleResetPassClick} />}
       {currentView === 'reset-pass-done' && <ResetPasswordDone/>}
       {/* <SignUp></SignUp> */}
       {/* <Forgetpassword></Forgetpassword> */}
       {/* <ResendLink></ResendLink> */}
       {/* <ResetPass></ResetPass> */}
       {/* <ResetPasswordDone></ResetPasswordDone> */}
      </div>
    </div>
  );
};

export default LoginSignUpPage;
