import PageContainer from "@/components/PageContainer";
import Product from "@/components/Product";
import React from "react";


export default function page({params: { locale }}) {
  
  return (
    <PageContainer>
      <Product locale={locale}/>
    </PageContainer>
  );
}