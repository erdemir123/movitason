import img1 from "@/public/solutions/page/council.png"
import img2 from "@/public/solutions/page/council.jpg"
import Image from "next/image";
export const council = [
  {
    header: "Belediye ve Halk Otobüsleri",
    content: [
      "Belediye ve halk otobüslerinin izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak belediye ve halk otobüslerinin 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "Yolcu bilgilendirme anons sistemi ile yolcular seyahat esnasında bulunduğu durağı, bir sonraki durağın neresi olduğunu dinamik görseller ve sesli bilgilendirme ile anlık takip edebilecekler.",
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Akıllı taksi filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Araç içinde bulunan ekrana WI-FI ve multimedya reklamlar ile tanıtım videoları koyarak yolcuların dikkatini çekebilir ve izlemesini sağlayabilirsiniz.",
      "RFID teknolojisi ile araçlarınızın hareketleri hakkında sürekli olarak bilgilendirilerek sürücü performansını değerlendirmesi yapabilirsiniz.",
      "IP Kamera ile yolcuların sayımını yaparak belediye ve halk otobüsüne gün içinde kaç kişinin bindiğini öğrenebilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];