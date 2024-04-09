import React from 'react';

function Page7() {
    return (
        <body>
            <header className="container mx-auto my-8 text-center">
                <p className="font-bold">Learning paths based on your answers</p>
                <p>Choose one to get started. You can switch anytime.</p>
            </header>

            <section className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="border-4 h-auto md:h-60 w-full md:w-82 rounded-md p-6 m-6 flex items-center cursor-pointer hover:shadow-md">
                        <div>
                            <p><span className="text-red-500 font-bold">MOST POPULAR</span><br /><span className="font-bold">Foundational Math</span><br />Build your foundational skills in algebra, geometry, and probability.</p>
                        </div>
                        <img className="rounded ml-6 mt-4 md:mt-0 h-40 w-30 md:h-48 md:w-auto" src="https://media.istockphoto.com/id/1125094908/photo/reality-of-consciousness.webp?b=1&s=170667a&w=0&k=20&c=2NmCj3nphhHGaAOwpLgZT7hTy4xjqEWHK5Sk7j9TIqo=" alt="Foundational Math" />
                    </div>

                    <div className="border-4 h-auto md:h-60 w-full md:w-82 rounded-md p-6 m-6 flex items-center cursor-pointer hover:shadow-md">
                        <div>
                            <p><span className="font-bold">Mathematical Thinking</span><br />Build your foundational skills in algebra, geometry, and probability.</p>
                        </div>
                        <img className="rounded ml-6 mt-4 md:mt-0 h-40 w-30 md:h-48 md:w-auto" src="https://media.istockphoto.com/id/1125094908/photo/reality-of-consciousness.webp?b=1&s=170667a&w=0&k=20&c=2NmCj3nphhHGaAOwpLgZT7hTy4xjqEWHK5Sk7j9TIqo=" alt="Mathematical Thinking" />
                    </div>
                </div>
            </section>
    </body>
    );
}

export default Page7;
