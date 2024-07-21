import { GiMountaintop } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
const Header = () => {
    const Links=[
        {name:'Equipment',link:'#'},
        {name:'About us',link:'#'},
        {name:'Blog',link:'#'},
    ]
    const [isOpen,setIsOpen]=useState(false);
    return ( 
      <div className=" w-full">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
          <div className="flex text-2xl cursor-pointer items-center gap-2">
         <a className="text-slate-50"><GiMountaintop className="size-12 hover:text-yellow-300"/></a> 
          </div>
          <div onClick={()=>setIsOpen(!isOpen)} className="right-8 top-6 cursor-pointer md:hidden absolute">
              {
                  isOpen ? <HiMiniXMark className="size-8 text-slate-50 hover:text-yellow-300"/>:<TbMenuDeep className="size-8 text-slate-50 hover:text-yellow-300"/>
              }
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
          md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 
          transition-all duration-500 ease-in ${ isOpen ?'top-16':'top-[-490px] '} `}>
              {
              Links.map(item => (
               // eslint-disable-next-line react/jsx-key
               <li className="my-7 md:my-0 md:ml-8 text-slate-50 hover:text-yellow-300">
                  <a href="#" className="font-sans font-bold ">{item.name}</a>
              </li>))
              }
              <a href="#" className=" flex btn text-slate-50  md:ml-8 md:static hover:text-yellow-300 font-sans font-bold"><MdOutlineAccountCircle className="size-6 text-slate-50 hover:text-yellow-300"/>Account</a>
          </ul>
      </div>
  </div>
     );
}
 
export default Header;