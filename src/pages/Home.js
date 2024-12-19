import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
  
    <header className="flex justify-between items-center h-10 bg-gray-800  text-slate-400 ">
      <div >
        <a
          href="/app"
          className="text-slate-400 hover:bg-slate-300 px-3 py-2 rounded"
        >
          App
        </a>
        <a
          href="/themes"
          className="text-slate-400 hover:bg-slate-300 px-3 py-2 rounded"
        >
          Themes
        </a>
        <a
          href="/custom"
          className="text-slate-400 hover:bg-slate-300 px-3 py-2 rounded"
        >
          Custom
        </a>
        <a
          href="/market"
          className="text-slate-400 hover:bg-slate-300 px-3 py-2 rounded"
        >
          MarketPlace
        </a>
        <a
          href="/api"
          className="text-slate-400 hover:bg-slate-300 px-3 py-2 rounded"
        >
          APIs and references
        </a>
      </div>
        <div className="flex items-center justify-around">
            <div className="mx-5">
            <Link className="a" to="/login">Login</Link>                
                  
            </div>
            <div className="mx-5">
            <Link className="a" to="/signup">Signup</Link>
                
              

            
            </div>
            <div className="mx-5">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>

            </div>
        <div className="flex items-center justify-around  rounded-lg p-1">
       

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-l bg-gray-300 border border-gray-700"
        />
      </div>

      </div>
    </header>
    
    
    
  );
};

export default Home;
