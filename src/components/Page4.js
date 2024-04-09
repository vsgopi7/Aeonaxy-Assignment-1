import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Page4() {
    const [selectedOption, setSelectedOption] = useState(null);

    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const goBack = () => {

        window.history.back();
    };

    return (
        <body >
            <header className="mt-8">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mx-3 md:mx-9 m-4" onClick={goBack}>Back</button>
            </header>
            <div className="mt-9">
                <header className="my-5 text-center">
                    <div className="font-bold text-2xl my-3">What is your math comfort level?</div>
                    <div className="font-normal text-sm">Choose the highest level you feel confident in - you can always adjust later.</div>
                </header>

                <section className="flex flex-wrap justify-center">
                    <div className={`border-4 h-40 w-50 rounded-md p-4 m-4 md:m-8 cursor-pointer ${selectedOption === 'arithmetic' ? 'shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('arithmetic')}>
                        <p>5 <span className="font-light">✕</span> 1/2 = ?</p>
                        <p className="font-semibold">Arithmetic</p>
                        <p className="font-light">Introductory</p>
                    </div>
                    <div className={`border-4 h-40 w-50 rounded-md p-4 m-4 md:m-8 cursor-pointer ${selectedOption === 'basicAlgebra' ? 'shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('basicAlgebra')}>
                        <p>3x + 5 = 4</p>
                        <p className="font-semibold">Basic Algebra</p>
                        <p className="font-light">Introductory</p>
                    </div>
                    <div className={`border-4 h-40 w-50 rounded-md p-4 m-4 md:m-8 cursor-pointer ${selectedOption === 'intermediateAlgebra' ? 'shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('intermediateAlgebra')}>
                        <p><i class="fas fa-square-root-alt fa-2x"></i> =  ?</p>
                        <p className="font-semibold">Intermediate Algebra</p>
                        <p className="font-light">Foundational</p>
                    </div>
                    <div className={`border-4 h-40 w-50 rounded-md p-4 m-4 md:m-8 cursor-pointer ${selectedOption === 'calculus' ? 'shadow-red' : ''}`} onClick={() => handleOptionClick('calculus')}>
                        <p ><span className='font-extrabold text-3xl'>&int;</span>x dx = ?</p>
                        <p className="font-semibold">Calculus</p>
                        <p className="font-light">Advanced</p>
                    </div>
                </section>
                
                
            </div>
            {!selectedOption ? (
                <div className="flex justify-center mt-5 mb-3">
                    <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">Continue</button>
                </div>
             ) : (
                <div className="flex justify-center mt-5 mb-3">
                    <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">
                        <Link to='/page5'>Continue</Link>
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

export default Page4;
