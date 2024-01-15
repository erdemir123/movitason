import img1 from "@/public/solutions/page/school.png"
import img2 from "@/public/solutions/page/school.jpg"
import Image from "next/image";
export const school = [
  {
    header: "Okul Servisleri",
    content: [
      "Okul servislerinizin izleme ve takibini yapmak istiyorsanız doğru yerdesiniz! movita MNVR modeli cihazımız araçlarınızın içine ve dışına yerleştirilen kameralara bağlanarak okul servislerinizin 7/24 izleme ve takibini yapar.",
      "İnternet erişimi olan herhangi bir bilgisayar, tablet ve akıllı telefondan kullanıcı dostu bir arayüz yardımıyla araçlarınızı anlık olarak izlemek artık çok kolay!",
      "movita Araç Takip Sistemleri’nde anlık takibin yanı sıra geçmişe dönük kamera kayıtlarına ulaşmak mümkündür.",
    ],
    header2: "movita Araç Takip Sistemleri’nin Özellikleri",
    especially: [
      "OBD ile araçlarınızın km takibini yaparak yakıttan tasarruf edebilirsiniz.",
      "Acil durumlarda araç içine yerleştirilen panik butonuna basarak hem kendinizin hem de araçta bulunan diğer kişilerin güvenliğini sağlayabilirsiniz.",
      "Uzaktan araç kapılarını kilitleme özelliği olası bir saldırı durumunda araç kapılarının kilitlenmesini ve merkez onayı olmadan hiçbir şekilde açılmamasını sağlar.",
      "Akıllı filo yönetimi ile ek maliyetlere gerek duymadan filonuzu yönetebilir ve verimliliğini artırabilirsiniz.",
      "Öğrenci okul servisine bindiği ve indiği zaman velilere SMS ile bilgilendirme yapılır.",
      "Yeni yasaya uygun üretilen koltuk sensörü ile öğrencilerin oturup oturmadığını ve kemer takıp takmadığını kontrol edebilirsiniz.",
      "Okul servislerinde kullandığımız RFID teknolojisi öğrencilerin servise binme ve inme tespitinin yapılmasını sağlar.",
      "Veliler mobil uygulama ile okul servisinin içerisinde yer alan IP kamera üzerinden servisi izleyebilirler",
      "Araç içerisinde bulunan kameralar ile sürücü davranışlarını izleyebilirsiniz.",
      "Trafik yoğunluğu haritası ile sürücüleriniz alternatif güzergahları kullanabilirler.",
      "Araç içinde bulunan ekrana WI-FI ve multimedya reklamlar ile tanıtım videoları koyarak öğrencilerin dikkatini çekebilir ve izlemesini sağlayabilirsiniz."
    ],
    img1: <Image src={img1} alt="taxi" width="10%" height="60%"/>,
    img2: <Image src={img2} alt="taxi" width="100%" height="60%"/>
  },
];