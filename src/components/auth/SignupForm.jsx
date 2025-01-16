import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', formData);
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Welcome Message */}
      <div className="hidden md:flex md:w-1/2 bg-app-dark items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to the community
          </h2>
          <p className="text-gray-400">sign up to explore</p>
          <img
            src="/assets/welcome-icon.png"
            alt="Welcome"
            className="mt-8 max-w-xs mx-auto"
          />
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8">Create your account!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Enter your Username"
                className="w-full p-3 border rounded-lg"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter your Phone"
                className="w-full p-3 border rounded-lg"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#7F3DFF] text-white p-3 rounded-lg"
            >
              Continue
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center mb-4">Sign Up With</p>
            <div className="flex justify-center space-x-4">
              {/* Social login buttons */}
            </div>
            <p className="text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-[#7F3DFF]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;