import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Page5() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    
    const handleContinue = () => {
        setLoading(true);
        
        setTimeout(() => {
           
            window.location.href = '/page7';
        }, 2000);
    };
    const goBack = () => {

        window.history.back();
    };

    return (
        <div>
            <header className="mt-8">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mx-3 md:mx-9 m-4" onClick={goBack}>Back</button>
            </header>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="h-12 md:h-auto mb-4 md:mb-0 rounded-full overflow-hidden">
                        <img src="https://plus.unsplash.com/premium_photo-1683140811960-956e5bbf858e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D" alt='#' className="h-12 md:h-auto w-auto rounded-full" />
                    </div>
                    <div className="w-full md:w-80 ml-0 md:ml-6">
                        <p className="font-bold text-center md:text-left">You're on your way!</p><br></br>
                        <div className="flex justify-center md:justify-start">
                            <i className="fas fa-star text-red-500 "></i>
                            <i className="fas fa-star text-red-500"></i>
                            <i className="fas fa-star text-red-500"></i>
                            <i className="fas fa-star text-red-500"></i>
                            <i className="fas fa-star text-red-500"></i>
                        </div>
                        <br></br>
                        <p className="text-center md:text-left">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."<br />- Jacob S.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5 mb-3">
                    {loading ? (
                        navigate("/loader")
                    ) : (
                        <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4" onClick={handleContinue}>
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page5;
