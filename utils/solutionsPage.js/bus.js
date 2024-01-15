import img1 from "@/public/solutions/page/bus.jpg"
import img2 from "@/public/solutions/page/bus.png"
import Image from "next/image";
export const bus = [
  {
    header: "Şehirler Arası Otobüsler",
    content: [
      "Şehirler arası otobüslerinizin izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak şehirler arası otobüslerinizin 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Akıllı filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Yolcular araçlarda yer alan yeni nesil multimedya TV’de dilediklerini izleyebilir.",
      "Araç içi internet özelliği sayesinde yolcular telefonlarından, tabletlerinden veya dizüstü bilgisayarlarından internete kolaylıkla bağlanabilir.",
      "Şerit takibi uyarı sistemi sürücüyü uyararak otobüsün şerit ihlali yapmasına engel olur.",
      "Takip mesafesi uyarı sistemi şehirler arası otobüsün diğer araçlar arasındaki mesafenin azalması durumunda sürücünüzü uyararak mesafenin korunmasını sağlar.",
      "Yolcu bilgilendirme anons sistemi varış noktası ve mola yerlerine kaç km ve ne kadar süre kaldığının bilgisini verir.",
      "IP Kamera ile şehirler arası otobüslerinize günde kaç yolcunun bindiğinin bilgisini öğrenebilirsiniz.",
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];