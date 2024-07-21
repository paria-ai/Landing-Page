import { FaLongArrowAltDown } from "react-icons/fa";
import { useRef } from "react";
import { GiMountaintop } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Header from "./assets/component/Header";
import Main from "./assets/component/Main";
const footer=[
  {name:'About Us'},
  {name:'Contributors & Writers'},
  {name:'Write For Us'},
  {name:'Contact Us'},
  {name:'Privacy Policy'}
]
const more=[
  {name:'The Team'},
  {name:'Jobs'},
  {name:'press'},
]

function App() {
  const ref= useRef(null);
  const handleClick=()=>{
    ref.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <div className="m-3 ">
      <div className="bg-[url('./img/image2.jpeg')] bg-no-repeat bg-cover pb-24 ">
      <Header/>
      <div className="w-full pt-3 mt-24 ">
        <div className="w-1/2 m-auto mt-16">
          <p className="font-mono text-yellow-300 font-bold text-sm p-3"> _____ A HIKING GUIDE </p>
         <p className="font-serif md:text-6xl p-2 text-slate-900 text-4xl">Be Prepared For The Mountains And Beyond!</p>
         <button className="font-mono flex font-bold text-sm p-2 text-slate-800 scroll-smooth focus:scroll-m-11 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 
          duration-300 hover:text-slate-50" onClick={handleClick}>scroll down <FaLongArrowAltDown className="size-5 "/></button>
        </div>
        </div>
      </div>
      <div className="my-2">
        <Main/>
        <div className="md:flex flex-row mt-12">
        <div className="basis-2/4">
        <GiMountaintop className="size-12 text-slate-50 ml-5"/>
          <p className="font-sans font-bold text-2xl text-slate-500 pt-6">Get out there & discover your next slope,mountain & destianation!</p>
        </div>
        <div className="basis-1/4 ">
          <p className="font-serif ml-6 text-xl font-bold text-yellow-300 pt-5">More on The Bloge</p>
          {footer.map(item =>
          // eslint-disable-next-line react/jsx-key
          <a href="#" className="block ml-6 py-2 font-bold text-slate-50 text-sm hover:text-yellow-300">{item.name}</a>
          )}
        </div>
        <div className="basis-1/4">
          <p className="font-serif ml-6 text-xl font-bold text-yellow-300 pt-5" ref={ref}>More on Us</p>
          {more.map(item => 
          // eslint-disable-next-line react/jsx-key
          <a href="#" className="block ml-6 py-2 font-bold text-slate-50 text-sm hover:text-yellow-300">{item.name}</a>
          )}
          
          <div className="flex ml-6 py-3">
          <a href="#" className="pr-5" ><FaInstagram className="text-slate-50 size-5 hover:text-yellow-300"/></a>
          <a href="#" ><FiTwitter className="text-slate-50 size-5 hover:text-yellow-300" /></a></div>
        </div>
      </div> 
      </div>
    </div>
  )
}

export default App
