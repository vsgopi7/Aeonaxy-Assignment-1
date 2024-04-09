import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Page1() {
    const [selectedOption, setSelectedOption] = useState(null);

    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <body>
            <header className="my-5">
                <div className="font-bold text-lg sm:text-xl flex justify-center my-3">Which describes you best? </div>
                <div className="flex justify-center text-sm">This will help us personalize your experience.</div>
            </header>
            <section>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'student' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('student')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://plus.unsplash.com/premium_photo-1683147827412-ccb35e0d4880?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudCUyMGtpZCUyMHdpdGglMjBiYWclMjBjYXJ0b29uJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Student or soon to be enrolled" />
                    <p className="text-center text-2xs ml-1">Student <span className="font-light">or soon to be enrolled</span></p>
                </div>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'professional' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('professional')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFuJTIwY2FydG9vbiUyMGltYWdlfGVufDB8fDB8fHww" alt="Professional pursuing a career" />
                    <p className="text-center text-2xs ml-1">Professional <span className="font-light">pursuing a career</span></p>
                </div>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'parent' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('parent')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://plus.unsplash.com/premium_photo-1681914828644-ee8dc367706a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFyZW50JTIwbWFuJTIwY2FydG9vbiUyMGltYWdlfGVufDB8fDB8fHww" alt="Parent of a school-age child" />
                    <p className="text-center text-2xs ml-1">Parent <span className="font-light">of a school-age child</span></p>
                </div>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'learner' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('learner')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://plus.unsplash.com/premium_photo-1673514503017-78fb0f2331f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZWxvbmclMjBsZWFybmVyJTIwY2FydG9vbiUyMGltYWdlfGVufDB8fDB8fHww" alt="Lifelong learner" />
                    <p className="text-center text-2xs ml-1">Lifelong learner </p>
                </div>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'teacher' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('teacher')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://media.istockphoto.com/id/1813247518/photo/cute-cartoon-teacher-pointing-to-empty-space.webp?b=1&s=170667a&w=0&k=20&c=hoUsFqO_5tudsiDPseoXtMEJZ8xn6drnbD3mBN9BiYY=" alt="Teacher" />
                    <p className="text-center text-2xs ml-1">Teacher </p>
                </div>
                <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer hover:shadow-md ${selectedOption === 'other' ? 'border-red-500 shadow-red' : 'border-gray-300'}`} onClick={() => handleOptionClick('other')}>
                    <img className="w-16 h-12 p-1 rounded-lg" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Other" />
                    <p className="text-center text-2xs ml-1">Other </p>
                </div>
            </section>
            {!selectedOption ? (
                <div className="flex justify-center mt-5 mb-3">
                    <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">
                        Continue
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mt-5 mb-3 ">
                    <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4 ">
                        <Link to='/page2'>Continue</Link>
                    </button>
                </div>
            )}
            <style>{`
                .shadow-red {
                    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5);
                }
            `}</style>
        </body>
    );
}

export default Page1;
