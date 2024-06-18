import React, { useState } from 'react';
import axios from 'axios';

function Login({ onSignupClick, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Kirim permintaan login ke server
    axios.post('https://comp-quiz-git-main-kejuus-projects.vercel.app/login', { email, password })
      .then(res => {
        // Jika login berhasil, panggil fungsi onLogin dari props
        onLogin();
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Tampilkan pesan kesalahan jika login gagal
        alert('Login failed. Please check your email and password.');
      });

    // Tambahkan log untuk menampilkan data yang dikirim ke server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignupClick = () => {
    onSignupClick();
  };

  return (
    <div className="flex justify-center items-center bg-primary min-h-screen">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-left font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Password"
            />
          </div>
          <p className="text-sm mt-2">By logging in, you agree to our terms and policy</p>
          <button type="submit" className="bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 ">Log in</button>
          <button type="button" className="border border-gray-300 mt-4 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-50 ml-5" onClick={handleSignupClick}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
