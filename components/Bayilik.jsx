import React, { useState } from "react";

export default function Bayilik() {
  const [dealer, setDealer] = useState({
    bayi_adi: "",
    vergi_no: "",
    vergi_dairesi: "",
    ofis_m2: "",
    yetkili: "",
    calisan_sayisi: "",
    sattigi_urunler: "",
    telefon: "",
    email: "",
    web_site: "",
    adres: "",
  });
  const handleSubmit=(e)=>{

    e.preventDefault()

    setDealer({
      bayi_adi: "",
      vergi_no: "",
      vergi_dairesi: "",
      ofis_m2: "",
      yetkili: "",
      calisan_sayisi: "",
      sattigi_urunler: "",
      telefon: "",
      email: "",
      web_site: "",
      adres: "",
    })
  }
  return (
    <div className="bg-primary/30 py-2 rounded-md px-4">
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-28 md:mb-4 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 bg-primary/30 rounded-lg">
          <div className="w-full md:w-[45%] p-2">
            <h3 className="font-bold mb-4 text-2xl underline ">
              Bayi Bilgileri
            </h3>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="name"
              >
                Ticari Ünvan <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="bayi_adi"
                value={dealer.bayi_adi}
                type="text"
                placeholder="Ticari Ünvanın"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tax_name"
              >
                Vergi Numarası <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tax_name"
                name="vergi_no"
                value={dealer.vergi_no}
                type="text"
                placeholder="Vergi Numarası"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tax_home"
              >
                Vergi Dairesi <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tax_home"
                name="vergi_dairesi"
                value={dealer.vergi_dairesi}
                type="text"
                placeholder="Vergi Dairesi"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="office"
              >
                Ofis Alanı(M2) <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="office"
                name="ofis_m2"
                value={dealer.ofis_m2}
                type="text"
                placeholder="Ofis Alanı"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="official"
              >
                Bayı Yetkilisi<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="official"
                name="yetkili"
                value={dealer.yetkili}
                type="text"
                placeholder="Bayi Yetkilisi"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="official"
              >
                Çalışan Sayısı<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="official"
                name="calisan_sayisi"
                value={dealer.calisan_sayisi}
                type="text"
                placeholder="Çalışan Sayısı"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="sales_product"
              >
                Satılan Ürünler<span className="text-red-500">*</span>
              </label>
              <textarea
                cols={20}
                className="shadow  appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="sales_product"
                name="sattigi_urunler"
                value={dealer.sattigi_urunler}
                type="text"
                placeholder="Satılan Ürünler"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] p-2 ">
            <h3 className="font-bold mb-4 text-2xl underline">Lokasyon</h3>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tel"
              >
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="tel"
                type="tel"
                name="telefon"
                value={dealer.telefon}
                placeholder="Telefon"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={dealer.email}
                placeholder="Email"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="web_site"
              >
                WEB SITE ADRESI <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="web_site"
                type="url"
                name="web_site"
                value={dealer.web_site}
                placeholder="Web Site Adresi"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="adress"
              >
                Adres <span className="text-red-500">*</span>
              </label>
              <textarea
                className="shadow appearance-none border min-h-[240px] rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="adress"
                type="text"
                name="adres"
                value={dealer.adres}
                placeholder="Adres"
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="bg-accent hover:bg-accent/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Mesaj Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
