import Image from "next/image";
import React from "react";

export default function Kvkk() {
  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full text-center">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          Kişisel Verilerin İşlenme Politikası
        </h2>
        <p className="font-semibold">
          SMARTEQ BİLİŞİM.(Bundan sonra kısaca “Şirket” olarak anılacaktır)
          sizlere ait kişisel verilerinizin ve özel bilgilerinizin korunması
          bizim için değerlidir. Bu nedenle SMARTEQ BİLİŞİM. ile ilişkili
          şahıslara ait kişisel verilerin 6698 sayılı Kişisel Verilerin
          Korunması Kanunu’na (“KVKK”) uygun olarak işlenerek, muhafaza edilmesi
          hususunda gereken bütün gayret ve özeni gösteriyoruz. Veri Sorumlusu
          sıfatıyla SMARTEQ BİLİŞİM. kişisel verilerinizle ilgili bütün
          işlemlerde verilerinizin korunması için gereken idari ve teknik
          tedbirler almakta, KVK Kanunu doğrultusunda, kişisel verilerinizi
          aşağıda açıklanan şartlarda ve mevzuatta öngörülen sınırlar dahilinde
          işlemektedir. İnternet sitemizin ziyaret edilmesi sırasında kaydedilen
          kişisel bilgiler, Kişisel Verilerin Korunmasına ilişkin mevzuat
          gereğince işlenmektedir. Bu konuda yine sayfamızda bulabileceğiniz
          Gizlilik Politikamızı inceleyiniz. Ancak önemle belirtelim ki, SMARTEQ
          BİLİŞİM. internet sitesinde yapılan yönlendirmelerde (link verilen)
          diğer internet sitelerindeki veri güvenliği konusunda bir garanti
          sunulamamaktadır. Bu konuda ilgili sayfanın veri güvenliği ile ilgili
          politikası dikkatlice incelenmelidir.
        </p>
      </div>
      <div className="w-full flex justify-center relative">
        <Image
          src={"/kvkk1.jpg"}
          width={400}
          height={500}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          HUKUKİ NİTELİK VE KAPSAM
        </h2>
        <p className="font-semibold">
          6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10’uncu
          maddesi, verileri işlenen kimselerin onayları alınırken kendisinin
          aydınlatılmasını istemiştir. Madde başlığı “Veri Sorumlusunun
          Aydınlatma Yükümlülüğü” ’dür. KVKK hükümlerine göre SMARTEQ BİLİŞİM.
          “Veri Sorumlusu” dur. Bu çerçevede, aydınlatma yükümlülüğü ile veri
          sahiplerini veri sorumlusunun kimliği, kişisel veri işleme amaçları,
          kişisel verilerin aktarıldığı kişiler ve aktarma amaçları, kişisel
          verilerin toplanmasının hukuki sebepleri, kimlere aktarılabileceği ve
          yöntemleri, kişisel veri sahibinin veri sorumlusuna yönelteceği
          güncelleme, silinme ya da anonimleştirme gibi KVK Kanunu’nun 11’inci
          maddesinde sayılan hakları konusunda bilgilendirme yükümlülüğü
          getirmiştir. Veri Sorumlusu sıfatıyla SMARTEQ BİLİŞİM. Kişisel
          Verilerin İşlenmesine İlişkin Aydınlatma Metni ile KVKK’nin 10’uncu
          maddesi hükmü uyarınca kişisel verilerinizi mevzuatta öngörülen
          sınırlar ve şartlar dahilinde işlediği hususunda veri sahiplerini
          bilgilendirmekte ve aydınlatmaktadır.
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
            VERİ SORUMLUSUNUN KİMLİĞİ
          </h2>
          <p className="font-semibold">
            KVK’nin 3’üncü maddesinin 1’inci fıkrasının (ı) bendinde veri
            sorumlusu, “Kişisel verilerin işleme amaçlarını ve vasıtalarını
            belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden
            sorumlu olan gerçek veya tüzel kişiler” olarak tanımlanmıştır. Bu
            çerçevede veri sorumlusu, internet sayfasını ziyaret ettiğiniz
            SMARTEQ BİLİŞİM.’dir. Beştepe Mahallallesi Nergiz Sokak No:7/2 Via
            Flat Yenimahalle/ANKARA bilgi@movita.com.tr
          </p>
        </div>

        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">VERİ İŞLEYEN</h2>
          <p className="font-semibold">
            Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel
            verileri işleyen gerçek veya tüzel kişi KVKK m. 3’te “Veri İşleyen”
            olarak tanımlanmıştır.
          </p>
        </div>
        <Image
          src={"/kvkk2.jpeg"}
          width={400}
          height={400}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
        <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">
            KİŞİSEL VERİLERİNİZİN İŞLENME AMAÇLARI
          </h2>
          <p className="font-semibold">
            Kişisel verileriniz KVK Kanunu’ndaki ilkeler doğrultusunda; SMARTEQ
            BİLİŞİM. tarafından sunulan ürün ve hizmetlerden haberdar
            olabilmeniz, sizlerin daha iyi yararlandırılması; SMARTEQ BİLİŞİM.
            tarafından sunulan ürünlerin/hizmetlerin kalitesinin artırılması,
            müşterilerimizin ihtiyaçları, beğenileri ve kullanım
            alışkanlıklarına göre özelleştirilerek sunumu ve önerilmesi; Sizleri
            hizmetlerimiz konusunda bilgilendirebilmek ve gerekli durumlarda da
            sizleri aydınlatılması; İnsan kaynakları politikalarımızın en iyi
            şekilde planlanması ve uygulanması; ticari ortaklıklarımızın ve
            stratejilerimizin doğru olarak planlanması ve yürütülmesi;
            Şirketimizin ve iş ortaklarımızın hukuki, ticari ve fiziki
            güvenliğinin temini, Şirket kurumsal işleyişinin sağlanması,
            Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri en iyi
            şekilde faydalandırmak için çalışmaların yapılması, Veri
            güvenliğinin sağlanması, veri tabanlarının oluşturulması, şirketimiz
            internet sitesinde sunulan hizmetlerin geliştirilmesi, Şirketimize
            talep ve şikayetlerini iletenler ile iletişime geçilmesi, Şirketimiz
            internet sitesinde oluşan hataların giderilmesi ve internet
            sitemizden paylaşılmış olan Gizlilik Politikasında yer alan
            hükümlerin uygunluğunun sağlanması, Şirkete ait stratejilerin
            belirlenmesi amaçlarıyla KVKK’nin 5. ve 6. maddelerinde belirtilen
            kişisel veri işleme şartları kapsamında işlenir.
          </p>
        </div>
        <div className="w-full flex justify-center relative">
          

          <Image
            src={"/kvkk3.webp"}
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
              KİŞİSEL VERİLERİ İŞLEMEYE İLİŞKİN İLKELERİMİZ
            </h2>
            <p className="font-semibold">
              SMARTEQ BİLİŞİM. olarak; Hukuka ve dürüstlük kurallarına uygun
              işlemeyi, Doğru ve güncelliği sağlama gayretinde olmayı, Belirli,
              açık ve meşru amaçlar için işlenmeyi, İşlendikleri amaçla
              bağlantılı, sınırlı ve ölçülü olmayı, İlgili mevzuatta öngörülen
              veya işlendikleri amaç için gerekli olan süre kadar muhafaza
              edilmeyi ilke edindik.
            </p>
          </div>

          <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="font-bold text-accent text-center">
              KİŞİSEL VERİLERİN İŞLENME YOLLARI
            </h2>
            <p className="font-semibold">
              Verileriniz, SMARTEQ BİLİŞİM. ’de ancak açık rızanız ya da Kanuna
              uygunluk hallerinden birinin varlığı halinde tutulur ve işlenir.
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
              KİŞİSEL VERİLERİNİZİ TOPLAMAMIZIN YÖNTEMİ VE HUKUKİ SEBEBİ
            </h2>
            <p className="font-semibold">
              Kişisel verileriniz, Şirketimiz tarafından verilen hizmet, ürün ya
              da ticari faaliyete bağlı olarak değişkenlik gösterebilmekle; KVK
              Kanunu m. 4, 5 ve 6’ya uygun bir şekilde, otomatik ya da otomatik
              olmayan yöntemlerle, ofisler, çağrı merkezi, internet sitesi,
              sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla
              sözlü, yazılı ya da elektronik olarak toplanabilecek,
              güncellenerek işlenebilecektir. Kişisel verileriniz, her türlü
              sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen
              amaçlar doğrultusunda Şirketçe sunduğumuz ürün ve/veya hizmetlerin
              belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda
              Şirketimizin sözleşme ve yasadan doğan yükümlülüklerini eksiksiz
              ve doğru bir şekilde yerine getirebilmesi amacı ile edinilir. Bu
              hukuki sebeple toplanan kişisel verileriniz KVK Kanunu’nun 5. ve
              6. maddelerinde belirtilen kişisel veri işleme şartları ve
              amaçları kapsamında bu Aydınlatma Metninde belirtilen amaçlar
              dahilinde de işlenebilmekte ve aktarılabilmektedir.
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
              İŞLENEN KİŞİSEL VERİLERİN KİMLERE VE HANGİ AMAÇLA AKTARILABİLECEĞİ
            </h2>
            <p className="font-semibold">
              Şirketimizde KVK Kanunu’na uygun olarak toplanan ve işlenen
              kişisel verileriniz, sadece işin yapılabilmesi amacıyla ve
              gizlilik sözleşmeleri eşliğinde; SMARTEQ BİLİŞİM., kişisel
              verileri çözüm ortaklarına ve sorumlulukların yerine
              getirilmesinde yardımcı konumundaki şirketlere aktarılabilecektir.
            </p>
          </div>
          <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="text-accent font-bold text-center my-2 ">
              BAŞVURUNUN YAPILMASI
            </h2>
            <p className="font-semibold">
              KVK Kanunu’nun 13. maddesinin 1. fıkrası gereğince, aynı kanunun
              11. maddesinde belirtilen haklarınızı kullanmak ile ilgili
              talebinizi kayıtlı elektronik posta (KEP) adresi ya da şirketimize
              daha önce bildirdiğiniz ve sistemimizde kayıtlı bulunan elektronik
              posta adresini kullanmak suretiyle, [astorenerji@hs02.kep.tr]
              adresine ya da yazılı olarak şahsen, noter veya iadeli taahhütlü
              posta vasıtasıyla iletebilirsiniz. Gerekli açıklamalara ve ilgili
              forma KVK Başvuru ve Bilgi Talep Formundan erişebilirsiniz.
              Başvuruda; Adınız, soyadınız ve başvuru yazılı ise imzanız,
              Türkiye Cumhuriyeti vatandaşı iseniz T.C. kimlik numarası, yabancı
              iseniz uyruğunuz, pasaport numaranız veya varsa kimlik numaranız,
              Tebligata esas yerleşim yeri veya iş yeri adresiniz, Varsa
              bildirime esas elektronik posta adresiniz, telefon ve faks
              numaranız, Talep konunuzun bulunması gerekmektedir. Konuya ilişkin
              bilgi ve belgeler başvuruya eklenmelidir.
            </p>
          </div>
          <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="text-accent font-bold text-center my-2 ">
              KİŞİSEL VERİ SAHİBİNİN HAKLARI VE BAŞVURU
            </h2>
            <p className="font-semibold">
              Kişisel veri sahipleri olarak, KVK Kanunu m. 11’de sayılan
              haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metninde
              aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz durumunda
              Şirketimiz niteliğine göre, talebi en geç otuz gün içinde ücretsiz
              olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma
              Kurulunca bir ücret öngörülmesi halinde, Şirketimiz tarafından
              belirlenen tarifedeki ücret alınacaktır. Ayrıca yürürlükte olan
              mevzuat uyarınca kişisel verilere ilişkin başvurular veri
              sahibinin bizzat kendisi tarafından yapılmak zorunda olduğundan
              başvurularınızın sadece sizlerle ilgili kısmı cevaplanacak olup,
              eşiniz, yakınınız ya da arkadaşınız hakkında yapılan bir başvuru
              kabul edilmeyecektir. Bu kapsamda kişisel veri sahipleri SMARTEQ
              BİLİŞİM. tarafından internet sayfamızda duyurulan ilgilimize
              başvurarak kendinizle ilgili olarak; Kişisel veri işlenip
              işlenmediğini öğrenme, Kişisel verileri işlenmişse buna ilişkin
              bilgi talep etme, Kişisel verilerin işlenme amacını ve bunların
              amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt içinde
              veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri
              bilme, Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin
              kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
              isteme, KVK Kanununun ve ilgili diğer kanun hükümlerine uygun
              olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin
              ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok
              edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin
              aktarıldığı üçüncü kişilere bildirilmesini isteme, İşlenen
              verilerin münhasıran otomatik sistemler vasıtasıyla analiz
              edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
              çıkmasına itiraz etme, Kişisel verilerin kanuna aykırı olarak
              işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini
              talep etme haklarına sahipsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
