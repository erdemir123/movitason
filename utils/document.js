

import tse_deney from "../public/document/tse_deney.jpg"
import tse_atom_movita from "../public/document/tse_atom_movita.jpg"
import tse_atom_koltuk from "../public/document/tse_atom_koltuk.jpg"
import iso9001belge from "../public/document/iso9001belge.jpg"
import tse_muayene from "../public/document/tse_muayene.jpeg"
import tse_muayene2 from "../public/document/tse_muayene2.jpeg"
import tse_muayene3 from "../public/document/tse_muayene3.jpeg"
import tse_muayene4 from "../public/document/tse_muayene4.jpeg"
import ulasimvelojistik from "../public/document/ulasimvelojistik.jpeg"
import Image from "next/image"

export const document = [
    {
      icon: <Image src={tse_deney} alt="AI Icon" width="auto" height="auto"/>,
      title: 'TS EN 50155',
      description: 'movita MNVR Mobil Kayıt ve Araç Takip Cihazı',
      type:"TS EN"
    },
    {
      icon:<Image src={tse_atom_movita} alt="AI Icon" width="auto" height="auto"/> ,
      title: 'E-MARK(ECE REGÜLASYON-10.05)',
      description: 'movita MNVR Mobil Kayıt ve Araç Takip Cihazı',
      type:"ECE"
    },
    {
      icon: <Image src={tse_atom_koltuk} alt="AI Icon" width="auto" height="auto"/>,
      title: 'E-MARK(ECE REGÜLASYON-10.05)',
      description: 'movita KSS 01 Koltuk Sensörü',
      type:"ECE"
    },
    {
      icon: <Image src={iso9001belge} alt="AI Icon" width="auto" height="auto"/>,
      title: 'İSO 9001',
      description: 'movita İSO 9001 Belgemiz',
    },
    {
      icon: <Image src={ulasimvelojistik} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'ECE R-118 RAPORU',
      description: 'movita Pro500',
    },
    {
      icon: <Image src={tse_muayene} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'TS 3033 EN 60529',
      description: 'movita Pro500',
    },
    {
      icon: <Image src={tse_muayene2} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'TS EN 60068-2-75',
      description: 'movita Pro500',
    },
    {
      icon: <Image src={tse_muayene3} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'TS EN 60068-2-75',
      description: 'movita Pro500',
    },
    {
      icon: <Image src={tse_muayene4} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'TS EN 50155',
      description: 'movita Pro500',
    },
    {
      icon: <Image src={ulasimvelojistik} alt="AI Icon" width={400} height={400} className="w-full h-full "/>,
      title: 'ECER R 10',
      description: 'movita Pro500',
    },
  ];