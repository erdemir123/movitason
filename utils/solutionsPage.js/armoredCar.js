import img1 from "@/public/solutions/page/armor.png"
import img2 from "@/public/solutions/page/armor.jpg"
import Image from "next/image";
export const armoredCar = [
  {
    header: "Zırhlı Taşıma Araçları",
    content: [
      "Zırhlı taşıma araçlarınızın izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak zırhlı taşıma araçlarınızın 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Uzaktan araç kapılarını kilitleme özelliği olası bir saldırı durumunda araç kapılarının kilitlenmesini ve merkez onayı olmadan hiçbir şekilde açılmamasını sağlar.",
      "Akıllı filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Araç sürücülerinizin Intercom ile ücretsiz ve sesli görüşme yaparak merkez ile iletişim halinde olmasını sağlayabilirsiniz.",
      "RFID ile sürücü kontrolü yaparak yetkisiz kişinin aracı sürmesini önleyebilirsiniz. Aynı zamanda zırhlı araçlarınızın doğru kişi tarafından açılmasını sağlayabilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];