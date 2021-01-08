import React from 'react'
import is_iranian from "../region_check";

const Hire = () => {
  if(is_iranian){
    return (
      <section className="showcase sm:h-2/4">
      <div className="overlay flex flex-col items-center justify-center">
        <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row pt-10">
          <div className="bg-blue-500 py-8 rounded lg:px-5 lg:pt-16 sm:pt-1">
            <h2 className="text-white text-center text-4xl font-semibold mb-5 lg:text-6xl">
              برای من پیام بزار
            </h2>
            <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl sm:text-base">
              توی کمتر از یک روز<br/> باهاتون تماس میگیرم
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
              name="name"
              id="name"
              placeholder="نام"
              required
              className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            />
            <input
              type="number"
              name="email"
              id="email"
              placeholder="شماره تماس"
              required
              className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="8"
              placeholder="پیام"
              required
              className="h-20 lg:h-52 text-center md:resize-y sm:resize-y py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            ></textarea>
            <input
              type="submit"
              value="ارسال"
              className="bg-blue-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-blue-800"
            />
          </form>
        </div>
      </div>
    </section>
  )
  }
  else{
    return (
      <section className="showcase sm:h-2/4">
      <div className="overlay flex flex-col items-center justify-center">
        <div className="flex flex-col w-9/12 h-9/12 lg:w-auto lg:flex-row pt-10">
          <div className="bg-blue-500 py-8 rounded lg:px-5 lg:pt-16 sm:pt-1">
            <h2 className="text-white text-center text-3xl font-semibold mb-5 lg:text-6xl">
              Write a message for me 
            </h2>
            <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl sm:text-base">
              I'll reply in <br/> less than 1 day
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
              name="name"
              id="name"
              placeholder="name"
              required
              className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="8"
              placeholder="message"
              required
              className="h-20 lg:h-52 text-center md:resize-y sm:resize-y py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
            ></textarea>
            <input
              type="submit"
              value="submit"
              className="bg-blue-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-blue-800"
            />
          </form>
        </div>
      </div>
    </section>
  )
  }
}

export default Hire
