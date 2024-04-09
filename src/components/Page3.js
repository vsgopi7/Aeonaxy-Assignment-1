import React from 'react';
import { Link } from 'react-router-dom';

function Page3() {
  const goBack = () => {
    // Navigate back to the previous page
    window.history.back();
  };
  return (
    <body>
      <header className="px-2 py-1 md:px-4 md:py-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-1 md:m-2" onClick={goBack}>Back</button>
      </header>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto mb-1 md:mb-2">
          <img src="https://media.istockphoto.com/id/1079123280/photo/balista-catapult-3d-visualization-illustration.jpg?s=612x612&w=0&k=20&c=vvdZI8qVWxr5bRqJZ17Q2PEVpIAgjygnIK-V_tyUYVw=" alt="" className="w-full rounded-lg" />
        </div>
        <div className="w-full max-w-md px-2 md:px-4">
          <h2 className="font-bold text-xl mb-2 md:mb-3">You're in the right place</h2>
          <p className="text-gray-800">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
        </div>
      </div>
      <div className="flex justify-center mt-1 md:mt-2 mb-2 md:mb-3">
        <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">
          <Link to='/page4'>Continue</Link>
        </button>
      </div>
    </body>
  );
}

export default Page3;
