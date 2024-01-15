import img1 from "@/public/solutions/page/cargo.png"
import img2 from "@/public/solutions/page/cargo.jpg"
import Image from "next/image";
export const cargo = [
  {
    header: "Yük ve Eşya Taşıyan Araçlar",
    content: [
      "Yük ve eşya taşıyan araçlarınızın izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak yük ve eşya taşıyan araçlarınızın 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Akıllı taksi filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Sürücünüzün sürüşe elverişli olmadığı ve şeritten çıkma sıklığının arttığı anlaşıldığında sürücü uyarı sistemi devreye girer ve sesli olarak uyarır.",
      "Ex-proof sayesinde patlama tehlikesi olmadan güvenle araçlarınızda yük ve eşya taşıyabilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="100%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];