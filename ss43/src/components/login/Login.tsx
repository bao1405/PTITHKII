import React from 'react';
import Login from './Login';
const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-md">
        <div className="w-1/2 md:w-3/5 bg-gray-200">
          <img
            src="https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1000px md:w-1/2 bg-white p-2">
          <h2 className="text-2xl font-semibold mb-6">Đăng nhập</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className='text-right mb-4'> 
                <p><b>Forgot password?</b></p>
            </div>
            <div className="mb-4">
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Đăng nhập
              </button>
            </div>
          </form>
          <hr className="my-5 border-gray-400" />
          <p className="text-center">
            <button
                type="submit"
                className="w-full border border-black bg-white text-black py-2 rounded-lg transition duration-300"
              >
                Đăng ký
              </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
