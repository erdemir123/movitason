
import HomeContainer from '@/components/HomeContainer';

export default function Home({params: { locale }}) {
  console.log(locale)
  return (
    <main className="h-[100vh] w-full relative ">
     <HomeContainer locale={locale}/>    
   </main>
  )
}
