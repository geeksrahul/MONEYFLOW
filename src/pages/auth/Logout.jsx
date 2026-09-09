import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

function Logout() {
  const isLoggedIn = useSelector(state => state.auth.authStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!isLoggedIn) return <Navigate to="/login" />
  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("authStatus");
    localStorage.removeItem("userData");
    navigate("/login");
  }
  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-200'>
      <div className='p-4 bg-white flex flex-col items-center gap-4 rounded-xl'>
        <h2>Are you sure you want to logout ?</h2>
        <button type='button' onClick={logoutUser} className='bg-red-700 text-white px-5 py-1 rounded-md cursor-pointer'> Logout </button>
      </div>
    </div>
  )
}

export default Logout