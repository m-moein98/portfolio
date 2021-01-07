import React from 'react'

const Hire = () => {
    return (
        <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
            <div className="bg-blue-500 py-10 rounded lg:px-5 lg:pt-32">
              <h2 className="text-white text-center text-5xl font-semibold mb-5 lg:text-7xl">
                Hire me
              </h2>
              <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl">
                I'll replay in less that one day
              </p>
              <div className="text-white text-center font-semibold lg:text-1xl">
                <p>
                  +989372388043
                </p>
                <p>
                  moein1475963.mmz@gmail.com
                </p>
              </div>
            </div>

            <form
              name="Feedback form"
              method="post"
              className="flex flex-col bg-blue-200 py-5 px-10 rounded lg:w-7/12"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="8"
                placeholder="Enter message"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-blue-800"
              />
            </form>
          </div>
        </div>
      </section>
    )
}

export default Hire
