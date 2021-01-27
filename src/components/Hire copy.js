import React, { Component } from 'react';

import is_iranian from "../region_check";

class Hire extends Component{
  
  async postData(name, callData, message){        
    try {
        let result = await fetch('http://127.0.0.1:8000/api/portfolio/', {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "name": name,
                "contact_id": callData,
                "message": message
              }
            )
        });
        console.log('Result:' + result)
      } 
    catch (error) {
          console.log(error)
      }
    }

  constructor(props) {
      super(props);
      this.state ={
          name: "",
          callData:"",
          message:""
      }
      this.handleSubmit = this.handleChange.bind(this);
    }
  handleChange = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
    });
  }
  handleSubmit(event){
      this.postData(this.state.name, this.state.callData, this.state.message);
      event.preventDefault();
    }
  render(){
    if(is_iranian){
      return (
        <section className="showcase sm:h-2/4">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row pt-10">
            <div className="bg-blue-500 py-8 rounded lg:px-5 lg:pt-16 sm:pt-1 font-sans">
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
              onSubmit={this.handleSubmit}
              className="flex flex-col bg-blue-200 py-5 px-10 rounded lg:w-7/12"
            >
              <input
                className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
                type="text"
                name="name"
                placeholder="نام"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <input
                className="text-center py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
                type="text"
                name="callData"
                placeholder="شماره تماس"
                value={this.state.callData}
                onChange={this.handleChange}
                required
              />
              <textarea
                className="h-20 lg:h-52 text-center md:resize-y sm:resize-y py-2 px-4 mb-5 rounded border border-solid border-blue-500 text-blue-500 placeholder-blue-500 font-semibold"
                name="message"
                id="textarea"
                cols="30"
                rows="8"
                placeholder="پیام"
                value={this.state.message}
                onChange={this.handleChange}
                required
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
} 
export default Hire;