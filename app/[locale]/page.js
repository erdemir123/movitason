import HomeContainer from '@/components/HomeContainer';

export default function Home({params: { locale }}) {
 
  return (
    <main className="h-[100vh] w-full relative ">
     <HomeContainer locale={locale}/>    
   </main>
  )
}