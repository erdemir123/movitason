import img1 from "@/public/solutions/page/security.png"
import img2 from "@/public/solutions/page/security.jpg"
import Image from "next/image";
export const security = [
  {
    header: "Güvenlik Kuvvetleri Araçları",
    content: [
      "Güvenlik kuvvetleri araçlarınızın izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak güvenlik kuvvetleri araçlarınızın 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Akıllı filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Kişiye özel yaka kamerası gerekli durumlarda olayların kaydını alarak caydırıcılık unsuru olarak kullanılabilir.",
      "Araç sürücülerinizin Intercom ile ücretsiz ve sesli görüşme yaparak merkez ile iletişim halinde olmasını sağlayabilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];