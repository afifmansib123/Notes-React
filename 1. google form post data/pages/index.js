// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import ContactForm from "../components/ContactForm";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-auto justify-center">
      <Image src ="/test.jpeg"  alt = "hello" width={1000} height={1000}></Image>
      
      </div>
      <p className="flex justify-center text-xl font-bold" style={{color: "#FF6800"}}>Text 1 - 10 features down</p>
      <div className="flex flex-auto justify-center mb-5">
      <Image src ="/test.jpeg"  alt = "hello" width={1000} height={1000}></Image>
      
      </div>
      <p className="flex justify-center text-xl font-bold" style={{color: "#FF6800"}}>Text 2 - 12 stores down</p>
      <div className="flex flex-auto justify-center mb-5">
      <Image src ="/test.jpeg"  alt = "hello" width={1000} height={1000}></Image>
      
      </div>
      <p className="flex justify-center text-xl font-bold" style={{color: "#FF6800"}}>Text 3 - D2Plus Pic down</p>
      <div className="flex flex-auto justify-center mb-5">
      <Image src ="/test.jpeg"  alt = "hello" width={1000} height={1000}></Image>
      
      </div>
      <div className="container mx-auto p-4 mb-11">
        {/* Your main content goes here */}
        <div
          className="flex justify-center items-center rounded-3xl mt-24"
          style={{ height: 80 }} 
        >
        {/* Add more content as needed */}
        <ContactForm />

      </div>
    </div>
    <div className="flex flex-auto justify-center mb-5 mt-96">
      <Image src ="/footer.png"  alt = "hello" width={1200} height={300}></Image>
      
      </div>
    </div>
  );
};

export default Home;
