import { IoHomeOutline } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { RiArtboard2Fill } from "react-icons/ri";
import { SiGoogleoptimize } from "react-icons/si";
import { TbApps } from "react-icons/tb";
import { TbArrowGuide } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
export const navData = [
    {name:"home",path:"/",icon:<IoHomeOutline/>},
    {name:"Kurumsal",path:"/kurumsal",icon:<GoProjectRoadmap/>},
    {name:"Ürünlerimiz",path:"/urunler",icon:<RiApps2Line/>},
    {name:"Çözümlerimiz",path:"/cozumler",icon:<RiArtboard2Fill/>},
    {name:"Rota Optimizasyonu",path:"/rota_optimizayonu",icon:<SiGoogleoptimize/>},
    {name:"Uygulamalar",path:"/uygulamalar",icon:<TbApps/>},
    {name:"Kılavuz",path:"/kilavuz",icon:<TbArrowGuide/>},
    {name:"İletişim",path:"/iletisim",icon:<TiContacts/>}
    ]
    