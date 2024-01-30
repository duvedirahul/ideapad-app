import axios from 'axios';
import { create } from 'zustand';

const authStore = create((set) => ({
    // states
    loginForm: {
        email: '',
        password: ''
    },
    signupForm: {
        email: '',
        password: ''
    },
    loggedIn: null,
    // functions
    updateLoginForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })
    },
    login: async () => {
        try {
            const { loginForm } = authStore.getState();
    
            // Ensure that both email and password are provided
            if (!loginForm.email || !loginForm.password) {
                alert('Please provide both email and password');
                return;
            }
    
            // Call the login API
            const response = await axios.post('/login', loginForm);
    
            if (response.status === 200) {
                // Clear the state and mark the user as logged in
                set((state) => {
                    return {
                        loginForm: {
                            email: '',
                            password: ''
                        },
                        loggedIn: true
                    };
                });
            } else {
                alert('Wrong Email or Password');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred during login');
        }
    },
    // check if session have authorization
    checkAuth: async () => {
        try {
            await axios.get('/check-auth');
            // now set the loggedIn state to true
            set({ loggedIn: true });
        } catch (error) {
            set({ loggedIn: false });
        }
    },
    logout: async () => {
        try {
            await axios.get('/logout');
            // now set the loggedIn state to false
            set({ loggedIn: false });
        } catch (error) {
        }
    },
    updateSignupForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                }
            }
        })
    },
    signup: async () => {
        // get email and password from state 
        const { signupForm } = authStore.getState();

        try {
            await axios.post('/signup', signupForm);
            // clear the state
            set({
                signupForm: {
                    email: '',
                    password: ''
                }
            });
            alert('Signup Successfull!!');

        } catch (error) {
            console.log(error);
        }
    }
}))

export default authStore;