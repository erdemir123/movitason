import asti from "../public/partner/asti.png"
import astor from "../public/partner/astor.png"
import aygaz from "../public/partner/aygaz.png"
import bmc from "../public/partner/bmc.png"
import bmm from "../public/partner/bmm.png"
import ısın from "../public/partner/ısındaylight.png"
import raykent from "../public/partner/raykent.png"
import Image from "next/image";

export const partner = [
    {
      icon: <Image src={asti} alt="AI Icon" width={100} height={100} className="w-full h-full b"/>,
      title: 'A.Ş.T.İ Koop.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon:<Image src={astor} alt="AI Icon" width={100} height={100} className="w-full h-full "/> ,
      title: 'AStor Transformatör',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={aygaz} alt="AI Icon" width={100} height={100} className="w-full h-full "/>,
      title: 'AYGAZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={bmc} alt="AI Icon" width={100} height={100} className="w-full h-full "/>,
      title: 'BMC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sfg',
    },
    {
      icon: <Image src={bmm} alt="AI Icon" width={100} height={100} className="w-full h-full "/>,
      title: 'Bmm Araç Takip Sistemleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={ısın} alt="AI Icon" width={100} height={100} className="w-full h-full "/>,
      title: 'IŞIN Daylight',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <Image src={raykent} alt="AI Icon" width={100} height={100} className="w-full h-full "/>,
      title: 'RAYKENT Lojistik',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];