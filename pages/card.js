import React from 'react'

export default function Card() {
    return (
      <>
        <div className="grid h-screen place-items-center relative bg-gradient-to-r">
          <div className="absolute h-4/5 w-9/12 transform bg-gray-100 rounded-full overflow-hidden shadow-xl">
            <div className="absolute h-screen w-80 transform rotate-12 bg-yellow-500 bottom-0 -left-40" />
            <div className="absolute h-screen w-80 transform rotate-12 bg-yellow-400 top-0 -right-40" />
          </div>
          <div className="relative h-96 w-80">
            <div className="card bg-cyan-400 shadow-md inline-block w-80 h-96 rounded-3xl absolute bottom-0 transform -rotate-12" />
            <div className="card bg-indigo-400 shadow-lg inline-block w-80 h-96 rounded-3xl absolute bottom-0 transform -rotate-6" />
            <div className="card bg-pink-500 shadow-lg inline-block w-80 h-96 rounded-3xl absolute bottom-0 transform rotate-6" />
            <div className="card bg-white transition shadow-xl w-80 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center">
              <div className="card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative">
                <h1 className="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-3">Nonsense card</h1>
                <img
                  src="https://images.unsplash.com/photo-1611500730105-02d129cd71f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
                  alt=""
                />
                <button className="card bg-gray-700 hover:bg-gray-600 transition text-white w-full h-1/6 absolute bottom-0 ">Learn more</button>
              </div>
            </div>
          </div>
        </div>

        
      </>
    );
}
