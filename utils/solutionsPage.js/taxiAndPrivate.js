import img1 from "@/public/solutions/page/taxi.png"
import img2 from "@/public/solutions/page/taxi.jpg"
import Image from "next/image";
export const taxi = [
  {
    header: "Taksi ve Özel Araçlar",
    content: [
      "Taksi ve özel araçlarınızın izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak taksi ve özel araçlarınızın 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Akıllı taksi filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Araç sürücülerinizin Intercom ile ücretsiz ve sesli görüşme yaparak merkez ile iletişim halinde olmasını sağlayabilirsiniz.",
      "Taksiye binen-inen kişilerin sayısı ile bu kişilerin taksiye kaç km yol aldırdığının takibini yapabilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];
