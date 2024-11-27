import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <div className="w-full bg-oreng">
      <h1 className="text-center py-[20px] text-[21px] text-wiat">%%   Free shipping on all orders  % %</h1>
    </div>
    <section className="max-w-container mx-auto flex items-center justify-items-center my-[20px] px-[30px] box-shadow: 10px 5px 5px red; ">
      <div className=" me-auto">
      <Image
            src="/logo.jpg"
            alt="Images"
            width={70}
            height={70}
          />
      </div>
      <div className="md:static absolute bg-wiat left-0 top-[9%] md:w-full w-full flex items-center top-[-100%]  ">
        <ul className="flex items-center md:min-h-fit min-h-[100px bg-wiat]  md:flex-row flex-col md:items-center md:ml-[200px]">
          <li className="px-[40px] text-[24px] hover:text-green-500"><Link href="/Home">Home</Link></li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500"> Our menus</li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500"> Meal plans</li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500"> Catering</li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500" > How it work</li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500"> Catering</li>
          <li className="px-[40px] text-[24px] border-l-2 hover:text-green-500">FAQ</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
      <Image className=""
            src="/user.jpg"
            alt="Images"
            width={40}
            height={40}
          /> 
          <Image className="cursor-pointer md:hidden "
            src="/list.svg"
            alt="Images"
            width={40}
            height={40}
          /> 
      </div>
    </section>
    <section className="max-w-container mx-auto justify-center flex flex-col md:flex-row  gap-8 mt-[70px]">
      <div>
        <div className="flex gap-4">
        <Image className="text-[20px] text-red-400"
            src="/left.svg"
            alt="photo"
            width={20}
            height={20}
          /> 

        <p className="text-[20px] text-red-400">Black</p>
        </div>
      <Image className="rounded-xl"
            src="/food-1.webp"
            alt="photo"
            width={860}
            height={860}
          /> 
      </div>
      <div className="mt-[30px]">
        <h1 className="text-5xl pb-[30px]"> Heathy Food Name</h1>
        <div className="flex gap-4 ">
         <Image className=""
            src="/star.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <p className="text-yellow-300 text-[24px]">4.5/4</p>
        </div>
        <div className="items-center justify-center pt-[20px]">
        <div className="flex gap-5">
          <p className="text-[21px]"> Protein 49g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]"> Carbs 23g</p>
          <p className="text-[24px]"> /</p>
          <p className="text-[21px]">Fat 23g</p>
        </div>
        <h4 className="text-[34px] pt-[20px] text-neutral-500 ">100$</h4>
          <p className="text-black w-[500px] text-[21px] pt-[15px]">Crispy baked panko breaded chicken topped with a 
            savory general tsos sauce, served on a bed of brown rice 
            alongside a cup of broccoli.</p>
            <button className="text-[21px] text-wiat bg-green-500 py-[10px] px-[190px] mt-[20px] items-center text-center justify-center"> Add to card</button>
          <div className="flex mt-[20px] justify-between ">
            <div className="">
            <p className="text-[21px]"> Ingredients</p>
            <p className="text-[21px] mt-[20px]"> Instructions</p>
            </div>
            <div>
            <Image className=""
            src="/right.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
          <Image className="mt-[20px]"
            src="/right.svg"
            alt="photo"
            width={24}
            height={24}
          /> 
            </div>
          </div>
        </div>
      </div>

    </section>


    <section className="max-w-container mx-auto  mt-[70px] mb-[70px] ">
      <h1 className="text-6xl"> Related products</h1>
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
          <h1 className="text-[29px]"> Subscribe To Our Email Alerts</h1>gi
        </div>
      </div>
    </section>
    <div className="bg-[#000000] mb-[15px]">
      <h2 className="text-wiat py-[15px] text-[24px] text-center">© All rights reserved by Simply Good Foods</h2>
    </div>
    </>
)}



