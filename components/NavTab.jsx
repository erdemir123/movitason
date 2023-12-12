
import React, {useState } from "react";




export default function NavTab({activeId,changeActiveItem,tabs}) {
    console.log(activeId)
  return (
    <div className="w-[80%] flex  flex-wrap rounded-4 absolute top-28 bg-red-100/20 gap-2 justify-center ">
         {tabs.map((tab,index)=>
         <div key={index} className={`${activeId === tab.id ? "text-accent" : "text-white"} flex justify-center py-1 px-3 text-sm`} onClick={() => changeActiveItem(tab.id)}>
         <p  className={`${activeId === tab.id ? "text-accent" : "text-white"} text-start w-[135px] font-bold flex gap-1 items-center`}>{tab?.image}{tab.name}</p>
       </div>)}
    </div>
  )
}
