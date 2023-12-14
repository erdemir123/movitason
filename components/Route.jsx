import React from 'react'
import route from "../public/route.png"
import Image from 'next/image'

export default function Route() {
  return (
    <div className="bg-primary/30 xl:py-6 rounded-md mt-1 py-24 flex flex-col justify-center items-center gap-4 md:px-4 ">
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:px-4 bg-red-100/20">
        <div className='w-full'>
            <h2>Rota Optimizasyonu</h2>
        <Image src={route} width={250} height={250} alt="movitaqr" className="w-full" />
        <p>
        Mobil cihazlar ile saha personelinin işlerini ve araçların günlük rotalarını optimize ederek oluşturulan iş ve rota planlarını takip etmenizi sağlar.
        <ol>
            <li>
            Mevcut araç kapasitelerini dikkate alarak gün içerisinde ürünlerin, kişilerin, kargoların, siparişlerin, sevkiyatların optimal rotasını planlamaktadır
            </li>
            <li>
            Saha personelinin günlük rota planlarını oluşturur ve planlara uyulup uyulmadığını QR kod ve Personelin mobil uygulamalar üzerinden raporlaması ile takip etmenizi sağlamaktadır.
            </li>
            <li>
            Gidilecek rotaları navigasyon hizmeti ile personelinize sunmaktadır.
            </li>
            <li>
            Oluşturulan rota planları saha personel tarafından mobil uygulama üzerinden görüntülenebilmektedir.
            </li>
            <li>
            Sisteme kaydedilen tüm rotalar seans ve araç bazlı olarak ayrı ayrı sunulmaktadır.
            </li>
            <li>
            Sisteme kaydedilen tüm rotalar seans ve araç bazlı olarak ayrı ayrı sunulmaktadır.
            </li>
            <li>
            Sisteme kaydedilen tüm rotalar seans ve araç bazlı olarak ayrı ayrı sunulmaktadır.
            </li>
            <li>
            Oluşturulan güzergâhlara gerektiğinde yeni konumlar eklenerek güncel rota üzerinden planlama yapılabilmektedir.
            </li>
            <li>
            Mobil uygulamadan belirlenen konuma ulaşım bilgisi uygulama üzerinden bildirilmektedir.
            </li>
        </ol>
        </p>
        </div>
        <div className='w-full flex flex-col'>
            <h2>Sisteme Faydaları</h2>
       
        <ol>
            <li>
            Şirketin araç filosunun/saha personelinin en uygun şekilde yönetilmesini sağlar.
            </li>
            <li>
            Şirket kaynaklarının verimli/etkin kullanılmasını sağlar.
            </li>
            <li>
            Yakıttan tasarruf sağlar.
            </li>
            <li>
            Hizmetlerin belirli bir kalitede ve standartta verilmesini sağlar.
            </li>
            <li>
            Kullanım kolaylığı sayesinde kullanıcı dostudur.
            </li>
            <li>
            Zamandan tasarruf sağlayarak müşterilerinize ve ofis işlerinize odaklanmanızı sağlar.
            </li>
            <li>
            Çevreye zararlı gaz salınımını azaltır.
            </li>
            <li>
            Müşteri memnuniyetini arttırır.

            </li>
            <li>
            Süreç yönetimini kolaylaştırır.
            </li>
        </ol>

        <Image src={route} width={250} height={250} alt="movitaqr" className="w-full flex-1" />
        </div>
        </div></div> 
  )
}
