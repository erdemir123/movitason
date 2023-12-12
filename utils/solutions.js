import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
  } from "react-icons/rx";
import carprivate from "../public/privateCar.svg"
import mınıbus from "../public/mınıbus.svg"
import bus from "../public/bus.svg"
import military from "../public/military.svg"
import truck from "../public/truck.svg"
import schoolbus from "../public/schoolbus.svg"
import citybus from "../public/citybus.svg"
import Image from "next/image";
export const solutions = [
    {
      icon: <Image src={carprivate} alt="AI Icon" width={50} height={50}/>,
      title: 'Taksi ve Özel Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon:<Image src={mınıbus} alt="AI Icon" width={45} height={45}/> ,
      title: 'Minibüs ve Midibüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={bus} alt="AI Icon" width={45} height={45}/>,
      title: 'Şehirler Arası Otobüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={mınıbus} alt="AI Icon" width={45} height={45}/>,
      title: 'Zırhlı Taşıma Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sfg',
    },
    {
      icon: <Image src={military} alt="AI Icon" width={45} height={45}/>,
      title: 'Güvenlik Kuvvetleri Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={truck} alt="AI Icon" width={45} height={45}/>,
      title: 'Yük ve Eşya Taşıyan Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={schoolbus} alt="AI Icon" width={45} height={45}/>,
      title: 'Okul Servisleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={citybus} alt="AI Icon" width={45} height={45}/>,
      title: 'Belediye ve Halk Otobüsleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];