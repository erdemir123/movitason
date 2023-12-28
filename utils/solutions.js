
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
      icon: <Image src={carprivate} alt="AI Icon" width={100} height={50}/>,
      title: 'Taksi ve Özel Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Taksi-Ozel-Araclar"
    },
    {
      icon:<Image src={mınıbus} alt="AI Icon" width={100} height={100}/> ,
      title: 'Minibüs ve Midibüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Minibus-Midibusler"
    },
    {
      icon: <Image src={bus} alt="AI Icon" width={100} height={100}/>,
      title: 'Şehirler Arası Otobüsler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Sehirler-Arasi-Otobusler"
    },
    {
      icon: <Image src={mınıbus} alt="AI Icon" width={100} height={100}/>,
      title: 'Zırhlı Taşıma Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sfg',
      href:"Zirhli-Tasima-Araclari"

    },
    {
      icon: <Image src={military} alt="AI Icon" width={100} height={100}/>,
      title: 'Güvenlik Kuvvetleri Araçları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Guvenlik-Kuvvetleri-Araclari"
    },
    {
      icon: <Image src={truck} alt="AI Icon" width={100} height={100} />,
      title: 'Yük ve Eşya Taşıyan Araçlar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Yuk-Esya-Tasiyan-Araclari"
    },
    {
      icon: <Image src={schoolbus} alt="AI Icon" width={100} height={100}/>,
      title: 'Okul Servisleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Okul-Servisleri"
    },
    {
      icon: <Image src={citybus} alt="AI Icon" width={100} height={100}/>,
      title: 'Belediye ve Halk Otobüsleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href:"Belediye-Halk-Otobusleri"
    },
  ];