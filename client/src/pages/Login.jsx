import { useEffect, useState } from "react";
import { loginUser } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import toast from "react-hot-toast";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUser} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            setUser(data.user);
            toast.success(`Giriş başarılı, hoş geldin ${data.user.username}`);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Giriş Yap
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email adresi
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Şifre
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Üye değil misiniz?{' '}
                    <NavLink to={"/register"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Hemen üye olun!
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;