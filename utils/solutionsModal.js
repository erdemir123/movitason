
import taksi from "../public/solutions/1.jpg"
import minibus from "../public/solutions/2.jpg"
import zirh from "../public/solutions/3.jpg"
import yuk from "../public/solutions/4.jpg"
import otobus from "../public/solutions/5.jpg"
import police from "../public/solutions/8.jpg"
import belediye from "../public/solutions/6.jpg"
import Image from "next/image"


export const solutionsModal = [
    {
      icon: <Image src={taksi} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Taksi ve Özel Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
     
    },
    {
      icon:<Image src={minibus} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/> ,
      title: 'Minibüsler ve Midibüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"MNVR_PRO"
    },
    {
      icon: <Image src={otobus} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Şehirler Arası Otobüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"MNVR_AI"
    },
    {
      icon: <Image src={zirh} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Zırhlı Taşıma Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Arac_Takip_Cihazi"
    },
    {
      icon:<Image src={police} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Güvenlik Kuvvetleri Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Akilli_Direk"
    },
    
    {
      icon:<Image src={yuk} alt="AI Icon" style={{objectFit: "contain"}} width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Yük ve Eşya Taşıyan Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Akilli_Direk"
    },
  
    {
      icon:<Image src={belediye} alt="AI Icon"  width={"auto"} height={"auto"} className="w-full h-[90%] bg-cover"/>,
      title: 'Belediye ve Halk Otobüsleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Akilli_Direk"
    },
  ];