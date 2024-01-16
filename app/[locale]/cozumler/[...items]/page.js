import PageContainer from '@/components/PageContainer'
import SolutionsItems from '@/components/SolutionsItems'
import React from 'react'

export default function page({params}) {
  console.log(params)
  return (
    <PageContainer>
      <SolutionsItems item={params.items}/>
    </PageContainer>
  )
}