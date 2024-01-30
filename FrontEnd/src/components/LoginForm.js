import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";
import '../styles/loginForm.css'

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // login check
            await store.login();
            // navigate to home page if login successfull
            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }
  return (
    // <div className="login-form-container">
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       value={store.loginForm.email}
    //       onChange={store.updateLoginForm}
    //       type="text"
    //       name="email"
    //       id= "loginEmail"
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
    //       value={store.loginForm.password}
    //       onChange={store.updateLoginForm}
    //       type="password"
    //       name="password"
    //       id= "loginPassword"
    //     />
    //     <button  id ="loginBtn"type="submit">Login</button>
    //   </form>
    // </div>

    <form onSubmit={handleLogin} class="max-w-lg mx-auto border p-6 mt-4 h-[60vh] shadow-lg flex flex-col justify-around ">
  <div>
          <h1 className='text-black text-center text-3xl font-bold my-2'>Login</h1>
          <div>
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email </label>
    <input 
    value={store.loginForm.email}
          onChange={store.updateLoginForm}
          type="text"
          name="email"
          id= "loginEmail"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email..." required /></div>
                  <div>
  <label for="passoword" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>

  <input 
    value={store.loginForm.password}
          onChange={store.updateLoginForm}
          type="password"
          name="password"
          id= "loginPassword"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password..." required />
                  </div>
                  </div>
  <button id=""  type="submit" class="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Login</button>
  

</form>
  );

}
