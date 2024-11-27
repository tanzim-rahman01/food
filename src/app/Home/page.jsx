"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const page = () => {
  return (
    <>
    <div className="w-full bg-oreng">
      <h1 className="text-center py-[20px] text-[21px] text-wiat">%%   Free shipping on all orders  % %</h1>
    </div>
    <section className="max-w-container m-auto flex items-center justify-between justify-items-center my-[20px] px-[30px] box-shadow: 10px 5px 5px red; ">
      <div className=" me-auto">
      <Image
            src="/logo.jpg"
            alt="Images"
            width={70}
            height={70}
          />
      </div>
      <div className="md:static absolute bg-wiat left-0 top-[9%] md:w-full w-full flex items-center top-[-100%]   ">
        <ul className="flex items-center md:min-h-fit min-h-[100px bg-wiat]  md:flex-row flex-col md:items-center md:ml-[200px] ">
          <li className=" px-[40px] text-[24px] hover:text-green-500">Home</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500"> Our menus</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500"> Meal plans</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500"> Catering</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500" > How it work</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500"> Catering</li>
          <li className=" px-[40px] text-[24px] border-l-2 hover:text-green-500">FAQ</li>
        </ul>
      </div>
      <div className="">
        <ul className='flex gap-3'>
        <li className='text-[21px] bg-green-500 items-center py-[10px] px-[20px] rounded-md'><Link href={"/singUp"}>SingUp</Link></li>
        <li className='text-[21px] bg-green-500 items-center py-[10px] px-[20px]  rounded-md'><Link href={"/Login"}> login</Link></li>
        </ul>
      </div>
    </section>
    <section className=" bg-red-50">
      <div className="max-w-container mx-auto flex flex-col md:flex-row gap-7 items-center justify-center mt-[40px]  p-[50px] ">
      <div>
        <h1 className='text-[72px] '> Keep track of </h1>
        <h1  className='text-[72px] text-green-500'>Fitness Goal</h1>
        <h2 className='text-[46px]'>Order on Simply Good Food</h2>
        <button className='text-[21px] bg-oreng py-[15px] px-[30px] mt-[30px] rounded-md border-none'>Explore Menu</button>
      </div>
      <div>
      <Image className='rounded-[200px]'
            src="/banner.jpg"
            alt="Images"
            width={700}
            height={700}
          />
      </div>
      </div>
    </section>
    <section className='max-w-container mx-auto mt-[50px]'>
      <h1 className='text-center text-[44px] mb-[30px]'> Why Simply Good Food</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 justify-center'>
        <div className='justify-center items-center mx-auto'>
         <Image className='mx-auto '
            src="/foods-1.jpg"
            alt="Images"
            width={200}
            height={200}
          />
          <h1 className='text-[31px] text-center'>Health awareness</h1>
          <p className='text-[21px] w-[500px] text-center'> Our portions are bigger. Meals designed to fill you up 
          with the nutrients you need to perform at your best</p>
        </div>
        <div className='justify-center items-center mx-auto'>
         <Image className='mx-auto '
            src="/foods-1.jpg"
            alt="Images"
            width={200}
            height={200}
          />
          <h1 className='text-[31px] text-center'>Health awareness</h1>
          <p className='text-[21px] w-[500px] text-center'> Our portions are bigger. Meals designed to fill you up 
          with the nutrients you need to perform at your best</p>
        </div>
        <div className='justify-center items-center mx-auto'>
         <Image className='mx-auto '
            src="/foods-1.jpg"
            alt="Images"
            width={200}
            height={200}
          />
          <h1 className='text-[31px] text-center'>Health awareness</h1>
          <p className='text-[21px] w-[500px] text-center'> Our portions are bigger. Meals designed to fill you up 
          with the nutrients you need to perform at your best</p>
        </div>
      </div>
    </section>
    

    <section className="max-w-container mx-auto  mt-[70px] mb-[70px] ">
      <h1 className="text-6xl text-center"> New & Trending menu</h1>
    <div className="grid md:grid-cols-4 sm:grid-cols-1 mt-[50px] justify-between justify-center items-center gap-3 "> 
    <div className="border-[1px] p-[7px] bg-slate-100 rounded-xl">
       <Image className=""
            src="/card-1.webp"
            alt="photo"
            width={400}
            height={400}
          /> 
          <div className="flex gap-4 pt-[10px] ">
          <Image className=""
            src="/star.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <p className="text-yellow-300 text-[24px] ">4.5/4</p>
         </div>
         <h1 className="text-3xl pt-[10px] ml-[6px]"> Heathy Food Name</h1>
         <h4 className="text-[24px] pt-[10px] text-neutral-500 ">100$</h4>
         <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[130px] mt-[20px] ml-[10px]  rounded-xl "> Add to card</button>
         <div className="flex gap-5 pt-[10px] ">
          <p className="text-[21px]"> Protein 49g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]"> Carbs 23g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]">Fat 23g</p>
        </div>
      </div>
      <div className="border-[1px] p-[7px] bg-slate-100 rounded-xl">
       <Image className=""
            src="/card-1.webp"
            alt="photo"
            width={400}
            height={400}
          /> 
          <div className="flex gap-4 pt-[10px] ">
          <Image className=""
            src="/star.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <p className="text-yellow-300 text-[24px] ">4.5/4</p>
         </div>
         <h1 className="text-3xl pt-[10px] ml-[6px]"> Heathy Food Name</h1>
         <h4 className="text-[24px] pt-[10px] text-neutral-500 ">100$</h4>
         <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[130px] mt-[20px] ml-[10px]  rounded-xl "> Add to card</button>
         <div className="flex gap-5 pt-[10px] ">
          <p className="text-[21px]"> Protein 49g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]"> Carbs 23g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]">Fat 23g</p>
        </div>
      </div>
      <div className="border-[1px] p-[7px] bg-slate-100 rounded-xl">
       <Image className=""
            src="/card-1.webp"
            alt="photo"
            width={400}
            height={400}
          /> 
          <div className="flex gap-4 pt-[10px] ">
          <Image className=""
            src="/star.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <p className="text-yellow-300 text-[24px] ">4.5/4</p>
         </div>
         <h1 className="text-3xl pt-[10px] ml-[6px]"> Heathy Food Name</h1>
         <h4 className="text-[24px] pt-[10px] text-neutral-500 ">100$</h4>
         <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[130px] mt-[20px] ml-[10px]  rounded-xl "> Add to card</button>
         <div className="flex gap-5 pt-[10px] ">
          <p className="text-[21px]"> Protein 49g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]"> Carbs 23g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]">Fat 23g</p>
        </div>
      </div>
      <div className="border-[1px] p-[7px] bg-slate-100 rounded-xl">
       <Image className=""
            src="/card-1.webp"
            alt="photo"
            width={400}
            height={400}
          /> 
          <div className="flex gap-4 pt-[10px] ">
          <Image className=""
            src="/star.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <p className="text-yellow-300 text-[24px] ">4.5/4</p>
         </div>
         <h1 className="text-3xl pt-[10px] ml-[6px]"> Heathy Food Name</h1>
         <h4 className="text-[24px] pt-[10px] text-neutral-500 ">100$</h4>
         <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[130px] mt-[20px] ml-[10px]  rounded-xl "> Add to card</button>
         <div className="flex gap-5 pt-[10px] ">
          <p className="text-[21px]"> Protein 49g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]"> Carbs 23g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]">Fat 23g</p>
        </div>
      </div>
    </div>
    </section>
    <section className='flex mx-auto items-center mt-[100px] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 bg-slate-100'>
      <div className='mx-auto text-center'>
        <h1 className='text-[54px] w-[600px]'> Make daily meals healthy and moderate</h1>
        <p className='text-[24px]'> Ingredients are naturally rich and full of taste</p>
        <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[30px]  rounded-xl mt-[20px] ">  Meal plans</button>
      </div>
      <div>
      <Image className=""
            src="/hero.webp"
            alt="photo"
            width={1000}
            height={700}
          /> 
      </div>
    </section>
    <section className='max-w-container mx-auto mt-[50px]'>
      <div className='text-center'>
        <h1 className='text-[56px]'> Popular Frequently Asked Questions</h1>
        <p className='text-[19px] w-[1100px] mx-auto pt-[20px]'> Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery 
          services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy 
          and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>
      </div>
      <div className='max-w-[700px] mt-[30px] mx-auto justify-center items-center flex justify-between bg-slate-50 mb-[20px] rounded-md'>
        <p className='text-[21px] py-[20px] px-[10px]  w-[1000px] '> What are the foods like Steel Yat? How does the mail plan work?</p>
        <Image className=""
            src="/right.svg"
            alt="photo"
            width={50}
            height={50}
          /> 
      </div>
      <div className='max-w-[700px] mt-[30px] mx-auto justify-center items-center flex justify-between bg-slate-50 mb-[20px] rounded-md'>
        <p className='text-[21px] py-[20px] px-[10px]  w-[1000px] '>  How Do I Eat Fresh and Lean??</p>
        <Image className=""
            src="/right.svg"
            alt="photo"
            width={50}
            height={50}
          /> 
      </div>
      <div className='max-w-[700px] mt-[30px] mx-auto justify-center items-center flex justify-between bg-slate-50 mb-[20px] rounded-md'>
        <p className='text-[21px] py-[20px] px-[10px]  w-[1000px] '>  How long do my meals last?</p>
        <Image className=""
            src="/right.svg"
            alt="photo"
            width={50}
            height={50}
          /> 
      </div>
      <div className='max-w-[700px] mt-[30px] mx-auto justify-center items-center flex justify-between bg-slate-50 mb-[20px] rounded-md'>
        <p className='text-[21px] py-[20px] px-[10px]  w-[1000px] '> What if I don't eat them all at once?</p>
        <Image className=""
            src="/right.svg"
            alt="photo"
            width={50}
            height={50}
          /> 
      </div>
      <div className='max-w-[700px] mt-[30px] mx-auto justify-center items-center flex justify-between bg-slate-50 mb-[20px] rounded-md'>
        <p className='text-[21px] py-[20px] px-[10px]  w-[1000px] '>  What's in the food? Is it organic? Is it gluten free?</p>
        <Image className=""
            src="/right.svg"
            alt="photo"
            width={50}
            height={50}
          /> 
      </div>
    </section>

    <section className="bg-slate-50 p-[40px]">
      <div className="max-w-container mx-auto grid md:grid-cols-4 sm:grid-cols-1 mt-[50px] justify-between justify-center items-center ">
        <div>
        <Image className=""
            src="/nav-1.jpg"
            alt="photo"
            width={150}
            height={150}
          /> 
        </div>
        <div>
          <ul>
          <li className="text-[21px]"> Home</li>
          <li className="text-[21px] pt-[10px]"> Our menus</li>
          <li className="text-[21px] pt-[10px]"> Meal plans</li>
          <li className="text-[21px] pt-[10px]"> Catering</li>
          </ul>
        </div>
        <div>
          <ul>
          <li className="text-[21px]"> How it work</li>
          <li className="text-[21px] pt-[10px]"> Testimonials</li>
          <li className="text-[21px] pt-[10px]">FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[29px]"> Subscribe To Our Email Alerts</h1>
        </div>
      </div>
    </section>
    <div className="bg-[#000000] mb-[15px]">
      <h2 className="text-wiat py-[15px] text-[24px] text-center">© All rights reserved by Simply Good Foods</h2>
    </div>
    </>
  )
}

export default page