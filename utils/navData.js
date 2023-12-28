import { IoHomeOutline } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { RiArtboard2Fill } from "react-icons/ri";
import { SiGoogleoptimize } from "react-icons/si";
import { TbApps } from "react-icons/tb";
import { TbArrowGuide } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";

export const navData = [
    {name:"home",path:"/",icon:<IoHomeOutline/>,poKey:"home"},
    {name:"Kurumsal",path:"/kurumsal",icon:<GoProjectRoadmap/>,poKey:"instutional"},
    {name:"Ürünlerimiz",path:"/urunler",icon:<RiApps2Line/>,poKey:"product"},
    {name:"Çözümlerimiz",path:"/cozumler",icon:<RiArtboard2Fill/>,poKey:"solutions"},
    {name:"Rota Optimizasyonu",path:"/rota_optimizasyonu",icon:<SiGoogleoptimize/>,poKey:"route_optimization"},
    {name:"Uygulamalar",path:"/uygulamalar",icon:<TbApps/>,poKey:"apps"},
    {name:"Kılavuz",path:"/kilavuz",icon:<TbArrowGuide/>,poKey:"guide"},
    {name:"İletişim",path:"/iletisim",icon:<TiContacts/>,poKey:"communication"}
    ]
    