import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Cerez() {
  const t = useTranslations('cookies');
  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full text-center">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
        {t(`header`)}
        </h2>
        <p className="font-semibold">
          Birçok web sitesi gibi, movita.com.tr’da da (aşağıda kısaca “Portal”
          olarak anılacaktır.) ziyaretçilere reklamlar göstermek, Portal
          üzerinde trafik analizi gerçekleştirmek amacıyla Çerezler
          kullanılmaktadır Smarteq, bu Politika’yı Portal’de hangi Çerezlerin
          kullanıldığını ve ziyaretçilerin bu konudaki tercihlerini nasıl
          yönetebileceğini açıklamak amacıyla hazırlamıştır.
        </p>
      </div>
      <div className="w-full flex justify-center relative">
       

        <Image
          src={"/cerez1.png"}
          width={400}
          height={500}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          Çerez (Cookie) Nedir?
        </h2>
        <p className="font-semibold">
          Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar
          aracılığıyla bilgisayarınıza (ya da akıllı telefon veya tablet gibi
          diğer cihazlarınıza) kaydedilen ve genelde harf ve rakamlard an oluşan
          çok küçük metin dosyalarıdır. Çerezler, ziyaretçilere ilişkin isim,
          cinsiyet veya adres gibi kişisel verileri içermezler. Çerezler,
          ziyaret ettiğiniz web sitesini yöneten sunucular tarafından
          oluşturulurlar. Böylelikle ziyaretçi aynı siteyi ziyaret ettiğinde
          sunucu bunu anlayabilir. Çerezler, web sitesi sahiplerine aynı
          ziyaretçinin siteyi yeniden ziyaret ettiğini gösteren kimlik
          kartlarına benzetilebilir. Çerezler konusundan daha detaylı bilgi için
          www.aboutcookies.org ve www.allaboutcookies.org adreslerini ziyaret
          edebilirisiniz.
        </p>
      </div>
      <div className="w-full flex justify-center relative">
        <Image
          src={"/kvkk.jpg"}
          width={400}
          height={400}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
          <h2 className="font-bold text-accent text-center">
            Çerez (Cookie) Nedir?
          </h2>
          <p className="font-semibold">
            Firmamız; kendisinden çözüm bekleyen müşterilerini yüzde yüz memnun
            eden çözümler sunmayı, sunduğu çözümlerde son teknolojiler
            kullanmayı ve her zaman inovatif yaklaşımlar sergilemeyi,
            oluşturduğu ürünler ile dünyaya ve insana değer katmayı kendisine
            misyon edinmiştir.
          </p>
        </div>

        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">
            Hangi Çerezler Kullanılmaktadır?
          </h2>
          <p className="font-semibold">
            Çerezler, sahipleri, kullanım ömürleri ve kullanım amaçları
            bakımından sınıflandırılabilir. movita.com.tr’de, Portal çerezleri
            kullanılmaktadır. Portal çerezleri, Smarteq tarafından yönetilir.
            Kullanım ömrüne göre, oturum çerezleri ve kalıcı çerezler
            kullanılmaktadır. Oturum çerezleri ziyaretçinin Portal’i terk
            etmesiyle birlikte silinirken, kalıcı çerezler değişen sürelerle
            ziyaretçilerin cihazlarında kalmaktadır.
          </p>
        </div>
        <Image
          src={"/cerez2.jpg"}
          width={400}
          height={400}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
        <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">
            Çerezler Neden Kullanılmaktadır?
          </h2>
          <p className="font-semibold">
            Portalda, Çerezler aşağıdaki amaçlar kapsamında kullanılmaktadır:
            Portalın çalışması için gerekli temek fonksiyonları
            gerçekleştirmek. Örneğin. Portal üyelerinin, üyelik bilgilerine
            giriş yapabilmesi Portal’i analiz etmek ve Portal’in performansını
            arttırmak. Örneğin, Portal’i ziyaret edenlerin sayısının tespit
            edilmesi ve buna göre performans ayarlarının yapılması ya da
            ziyaretçilerin aradıklarını bulmalarının kolaylaştırılması.
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
        <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          Çerez Politikası
        </h2>
        <p className="font-semibold">
          Birçok web sitesi gibi, movita.com.tr’da da (aşağıda kısaca “Portal”
          olarak anılacaktır.) ziyaretçilere reklamlar göstermek, Portal
          üzerinde trafik analizi gerçekleştirmek amacıyla Çerezler
          kullanılmaktadır Smarteq, bu Politika’yı Portal’de hangi Çerezlerin
          kullanıldığını ve ziyaretçilerin bu konudaki tercihlerini nasıl
          yönetebileceğini açıklamak amacıyla hazırlamıştır.
        </p>
      </div>
      
      </div>
    </div>
  );
}
