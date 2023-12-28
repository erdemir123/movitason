"use client"
import NavTab from '@/components/NavTab'
import { tabs } from '@/utils/aboutTabs';
import React,{useState} from 'react'
import Hakkımızda from './Hakkımızda';
import Belgelerimiz from './Belgelerimiz';
import Bayilik from './Bayilik';
import Demo from './Demo';
import Cerez from './Cerez';
import Kvkk from './Kvkk';

export default function Institutional() {
    const [activeId, setActiveId] = useState(1);
 
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
        content = <Cerez/>;
        break;
      case 6:
        content = <Kvkk/>;
        break;
    }
  return (
    <div>
      <NavTab changeActiveItem={changeActiveItem} activeId={activeId} tabs={tabs}/>
      <div className="mt-36 md:mt-24 lg:mt-12 px-2 bg-primary/50 rounded-lg">{content}</div> 
      
    </div>
  )
}
