import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa6";
import { MdDeveloperBoard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
let iconStyles = { color: "#F6931D", fontSize: "2em" }
export const preference = [
    {
      icon: <FaRegEye style={iconStyles}/>,
      title: 'TAKİP SİSTEMİ',
      description: 'Araçlarınızı ve sevdiklerinizi 7/24 canlı izleme ve takip sistemi bir arada.',
    },
    {
      icon:<IoDiamondOutline style={iconStyles}/> ,
      title: 'TSE BELGELİ CİHAZLAR',
      description: 'Cihazlar TSE belgelidir.',
    },
    {
      icon: <RiLightbulbFlashFill style={iconStyles}/>,
      title: 'KOLAY ERİŞİM',
      description: 'Tek Cihaz ile 7/24 Hem araç izleme hem de araç takip sistemi.',
    },
    {
      icon: <FaCar style={iconStyles}/>,
      title: 'ARAÇ TAKİP SİSTEMİ',
      description: 'Anlık araç konumu izleme özelliği . Geçmişe dönük animasyonlu rota görüntüleme. Güncel veya geçmişe dönük filo ve araç raporları sunabilme. Araç bazlı detaylı adres ve seyahat raporları oluşturabilme.',
    },
    {
      icon:<RiListSettingsLine style={iconStyles}/> ,
      title: 'ÖNE ÇIKAN ÖZELLİKLERİMİZ',
      description: 'Tek uygulama, tek sim kartı. Koltuk sensörü ile entegre olacak şekilde çalışabilme yeteneği. SD karta Kayıt ile disklerde oluşan sarsıntı problemlerinin ortadan kalkması.',
    },
    {
      icon: <FaSearchengin style={iconStyles}/>,
      title: 'ÜCRETSİZ DEMO',
      description: 'Alanında uzman mühendisler ve teknik servis konusunda eğitimli personellerden oluşan ekibi ile, yenilikçi ürünler geliştirmeye devam ederken, hızlı ve güvenilir çözümler sunmaktadır',
    },
  
    {
      icon: <FaWrench style={iconStyles}/>,
      title: 'TEKNİK DESTEK',
      description: 'Yüzde yüz yerli yazılım ile sürekli teknik destek.',
    },
    {
      icon: <IoNewspaperSharp style={iconStyles}/>,
      title: 'SEKTÖRLERE YÖNELİK ÇÖZÜMLER',
      description: 'Tüm Sektörlere Hitap Eden Çözümler.',
    },
  ];