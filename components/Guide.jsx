"use client";
import { guide } from "@/utils/guideTabs";
import React, { useState } from "react";
import NavTab from "./NavTab";
import StepperService from "./StepperService";
import StepperApp from "./StepperApp";

export default function Guide() {
  const [activeId, setActiveId] = useState(1);

  const changeActiveItem = (id) => {
    setActiveId(id);
  };
  let content = null;
    switch (activeId) {
      case 1:
          content = <StepperService/>;
          break;
          case 2:
          content = <StepperApp/>;
        break;
     
    }

  return (
    <div>
      <NavTab
        changeActiveItem={changeActiveItem}
        activeId={activeId}
        tabs={guide}
      />
      <div className="bg-primary/30 xl:py-16  rounded-md px-4 mt-12 py-14">
        {content}
      </div>
    </div>
  );
}
