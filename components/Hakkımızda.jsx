import React from "react";
import Image from "next/image";

export default function Hakkımızda() {
  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">HAKKIMIZDA</h2>
        <p className="font-semibold">
          Firmamız kurulduğu günden itibaren yenilikçi uygulamalarıyla ülkemizi
          bilgi teknolojileri alanında dünya ile yarışır kılmak, ülkemizin
          sektördeki dışa bağımlılığını azaltmak hedefiyle hizmet vermektedir.
          Farklı sektörlerdeki müşterileri için bugüne kadar geliştirilmiş olan
          tüm projelerde yenilik, yüksek teknoloji, kalite ve müşteri
          memnuniyeti konularında azami derecede hassasiyet gösterilmektedir.
          Karar destek sistemleri ve kurumsal kaynak yönetim sistemleri i le
          müşterilerine kendi varlıklarını etkili ve verimli bir şekilde
          yönetmesi için özel kurumsal bilişim çözümleri sunanFirmamız
          sektördeki yerini her geçen gün sağlamlaştırmaktadır. Öncelikli olarak
          insan hayatına, ülkesine ve dünyaya katma değerinin yüksek olduğuna
          inandığı Araştırma Geliştirme faaliyetlerini aralıksız devam ettiren
          Firmamız geleceğin bilgi teknolojilerine yön vermeyi ve Türkiyeye bu
          alanda saygınlık kazandırmayı hedeflemektedir.
        </p>
      </div>
      <div className="w-full flex justify-center relative">
      <Image
              src={"/movitaLogo.png"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 absolute z-10 opacity-90 -top-10"
              priority={true}
            />

      <Image
              src={"/mission.jpeg"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
              priority={true}
            />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
          <h2 className="font-bold text-accent text-center">MISYONUMUZ</h2>
          <p className="font-semibold">
            Firmamız; kendisinden çözüm bekleyen müşterilerini yüzde yüz memnun
            eden çözümler sunmayı, sunduğu çözümlerde son teknolojiler
            kullanmayı ve her zaman inovatif yaklaşımlar sergilemeyi,
            oluşturduğu ürünler ile dünyaya ve insana değer katmayı kendisine
            misyon edinmiştir.
          </p>
        </div>
       
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">VIZYONUMUZ</h2>
          <p className="font-semibold">
            Firmamız olarak vizyonumuz; müşteri odaklı bir yaklaşım ile faaliyet
            gösteren, müşterilerine her zaman yüksek kalite çözümler sunan,
            yurtiçinde ve yurtdışında bilişim sektöründe lider bir kuruluş
            haline gelmektir.
          </p>
        </div>
        <Image
              src={"/mission.jpg"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
              priority={true}
            />
        <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">EKIBIMIZ</h2>
          <p className="font-semibold">
            Ekibimizi oluştururken siz müşterilerimizin her türlü istek ve
            beklentisini tam olarak karşılamayı amaçlayan Firmamızın
            prensiplerine uygun bir yol izlemeye çalıştık. Bu sebeple her bir
            çalışanımız sizi memnun etmeyi ve işini en iyi şekilde yerine
            getirmeyi amaçlayan kişilerdir. Proje yöneticileri, yazılım
            mühendisleri, ar-ge mühendisleri, iş analistleri, grafik
            tasarımcılar, sistem ve veri tabanı yöneticileri barındıran
            takımımız genç ve dinamik ancak alanında tecrübeli bireylerden
            oluşmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}
