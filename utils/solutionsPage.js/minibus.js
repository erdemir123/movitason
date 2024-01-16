import img1 from "@/public/solutions/page/minibus.png"
import img2 from "@/public/solutions/page/minibus.jpg"
import Image from "next/image";
export const minibus = [
  {
    header: "Minibüsler ve Midibüsler",
    content: [
      "Minibüs ve midibüslerinizin izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak minibüs ve midibüslerinizin 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Akıllı filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Durak ve rota raporlama özelliği ile minibüs ve midibüslerin güzergah üzerindeki hareket saatleri, belirlenen noktalara zamanında ulaşıp ulaşmama, katedilen mesafe gibi bilgilere erişebilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Yolcu bilgilendirme anons sistemi ile yolcular seyahat esnasında bulunduğu durağı, bir sonraki durağın neresi olduğunu dinamik görseller ve sesli bilgilendirme ile anlık takip edebilecekler.",
      "Araç sürücülerinizin Intercom ile ücretsiz ve sesli görüşme yaparak merkez ile iletişim halinde olmasını sağlayabilirsiniz.",
      "IP Kamera ile yolcuların sayımını yaparak minibüs ve midibüse gün içinde kaç kişinin bindiğini öğrenebilirsiniz.",
      "Minibüs ve midibüs durmadan kapı açılma uyarısı yaparak yolcularınızın daha güvenli bir şekilde araçtan inmesini sağlayabilirsiniz.",
      "Dolmuş-Durak Otomasyonu minibüs ve midibüslerin varması gereken bir durağa erken veya geç gidip gitmediği kontrolü ile personellerinize ceza puanı uygulaması yapabilirsiniz."
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];