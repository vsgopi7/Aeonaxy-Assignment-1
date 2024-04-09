import React from 'react';

function Loader() {
    return (
        <body>
            <div className="h-screen flex justify-center items-center">
                <i class="fas fa-spinner fa-spin fa-3x"></i>
                <div className="font-bold text-center sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
                    Finding learning path recommendations for you based on your responses
                </div>
            </div>
        </body>
    );
}

export default Loader;
