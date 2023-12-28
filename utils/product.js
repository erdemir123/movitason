
import ai from "../public/ai.svg"
import carFollow from "../public/carFollow.svg"
import car from "../public/car.svg"
import follow from "../public/follow.svg"
import pole from "../public/pole.svg"
import Image from "next/image";
export const product = [
    {
      icon: <Image src={follow} alt="AI Icon" width={45} height={45}/>,
      title: 'MNVR',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"MNVR "
    },
    {
      icon:<Image src={car} alt="AI Icon" width={45} height={45}/> ,
      title: 'MNVR PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"MNVR_PRO"
    },
    {
      icon: <Image src={ai} alt="AI Icon" width={45} height={45}/>,
      title: 'MNVR AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"MNVR_AI"
    },
    {
      icon: <Image src={carFollow} alt="AI Icon" width={45} height={45}/>,
      title: 'ARAÇ TAKİP CİHAZI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Arac_Takip_Cihazi"
    },
    {
      icon:<Image src={pole} alt="AI Icon" width={45} height={45}/>,
      title: 'AKILLI DİREK',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Akilli_Direk"
    },
  ];