import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Page2() {
  const [selectedOption, setSelectedOption] = useState(null);

  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const goBack = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  return (
    <body>
      <header className="my-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-4" >Back</button>
        <div className="font-bold text-lg sm:text-xl flex justify-center my-3">Which are you most interested in?</div>
        <div className="flex justify-center text-sm">Choose just one. This will help us get you started (but won't limit your experience).</div>
      </header>
      <section>
        <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer ${selectedOption === 'a' ? 'selected-option shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('a')}>
          <img className="w-16 h-12 p-1" src="https://media.istockphoto.com/id/1575060356/photo/colorful-business-data-graph-with-a-few-plotted-lines-with-white-toilet-tiles-as-grids-of.webp?b=1&s=170667a&w=0&k=20&c=hxKAG7la5WzlmQwaUrx9mljJ26KZpmCVqzVZa9dfLZ8=" alt="Learning specific skills to advance my career" />
          <p className="text-center text-2xs ml-1">Learning specific skills to advance my career</p>
        </div>
        <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer ${selectedOption === 'b' ? 'selected-option shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('b')}>
          <img className="w-16 h-12 p-1" src="https://media.istockphoto.com/id/1461610303/photo/a-robotic-hand-is-holding-the-world-with-plexus.webp?b=1&s=170667a&w=0&k=20&c=gmWc6keTtwRtgjUEN1fshz9aAhEi9Ppa0QOr1UzZYck=" alt="Exploring new topics I'm interested in" />
          <p className="text-center text-2xs ml-1">Exploring new topics I'm interested in</p>
        </div>
        <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer ${selectedOption === 'c' ? 'selected-option shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('c')}>
          <img className="w-16 h-12 p-1" src="https://media.istockphoto.com/id/1458664845/photo/learning-math.webp?b=1&s=170667a&w=0&k=20&c=-yi3DIfZm3Ic6PEIujpdkJywiBmsUca89PO_3GvjXuI=" alt="Refreshing my math foundations" />
          <p className="text-center text-2xs ml-1">Refreshing my math foundations.</p>
        </div>
        <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer ${selectedOption === 'd' ? 'selected-option shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('d')}>
          <img className="w-16 h-12 p-1" src="https://media.istockphoto.com/id/1207121866/photo/target.webp?b=1&s=170667a&w=0&k=20&c=Q647vYE1V6n9HksIoOlROXRNfn6-hdkNKUXgaMCwVTs=" alt="Exercising my brain to stay sharp" />
          <p className="text-center text-2xs ml-1">Exercising my brain to stay sharp</p>
        </div>
        <div className={`flex items-center border-2 w-full sm:w-1/2 mx-auto rounded-md my-2 h-auto p-1 cursor-pointer ${selectedOption === 'e' ? 'selected-option shadow-red' : 'hover:shadow-md'}`} onClick={() => handleOptionClick('e')}>
          <img className="w-16 h-12 p-1" src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRoaW5raW5nfGVufDB8fDB8fHww" alt="Something else" />
          <p className="text-center text-2xs ml-1">Something else</p>
        </div>
      </section>
      {!selectedOption ? (
        <div className="flex justify-center mt-5 mb-3">
          <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">Continue</button>
        </div>
      ) : (
        <div className="flex justify-center mt-5 mb-3">
          <button className="border-2 rounded-md bg-blue-500 text-white py-2 px-4">
            <Link to='/page3'>Continue</Link>
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

export default Page2;
