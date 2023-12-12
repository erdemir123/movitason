"use client";
import React, { useState } from "react";
import NavTab from "@/components/NavTab";
import Hakkımızda from "@/components/Hakkımızda";
import Belgelerimiz from "@/components/Belgelerimiz";
import Bayilik from "@/components/Bayilik";
import Demo from "@/components/Demo";
import Cerez from "@/components/Cerez";
import Kvkk from "@/components/Kvkk";
import PageContainer from '@/components/PageContainer'
import { tabs } from "@/utils/aboutTabs";

export default function page() {
    const [activeId, setActiveId] = useState(1);
  console.log(activeId)
  const changeActiveItem = (id) => {
    setActiveId(id);
  };
  let content = null;
  switch (activeId) {
    case 1:
      content = <Hakkımızda/>;
      break;
    case 2:
      content = <Belgelerimiz/>;
      break;
    case 3:
      content = <Bayilik />;
      break;
    case 4:
      content = <Demo/>;
      break;
    case 5:
      content = <Cerez />;
      break;
    case 6:
      content = <Kvkk/>;
      break;
  }
  return (
    <PageContainer>
      <NavTab changeActiveItem={changeActiveItem} activeId={activeId} tabs={tabs}/>
      <div className="border-red-500 ">{content}</div> 
    </PageContainer>
  )
}
