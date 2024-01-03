import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function Bayilik() {
  const t = useTranslations("dealer");
  
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
            {t(`dealer_info`)}
            </h3>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="name"
              >
                 {t(`commertial`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="bayi_adi"
                value={dealer.bayi_adi}
                type="text"
                placeholder={t(`commertial`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tax_name"
              >
                 {t(`tax`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tax_name"
                name="vergi_no"
                value={dealer.vergi_no}
                type="text"
                placeholder={t(`tax`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tax_home"
              >
                {t(`administration`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tax_home"
                name="vergi_dairesi"
                value={dealer.vergi_dairesi}
                type="text"
                placeholder={t(`administration`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="office"
              >
                {t(`office`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="office"
                name="ofis_m2"
                value={dealer.ofis_m2}
                type="text"
                placeholder={t(`office`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="official"
              >
                {t(`representative`)}<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="official"
                name="yetkili"
                value={dealer.yetkili}
                type="text"
                placeholder={t(`representative`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="official"
              >
                {t(`employees`)}<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="official"
                name="calisan_sayisi"
                value={dealer.calisan_sayisi}
                type="text"
                placeholder={t(`employees`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="sales_product"
              >
                {t(`sold`)}<span className="text-red-500">*</span>
              </label>
              <textarea
                cols={20}
                className="shadow  appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="sales_product"
                name="sattigi_urunler"
                value={dealer.sattigi_urunler}
                type="text"
                placeholder={t(`sold`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] p-2 ">
            <h3 className="font-bold mb-4 text-2xl underline">{t(`adress_info`)}</h3>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tel"
              >
                {t(`phone`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="tel"
                type="tel"
                name="telefon"
                value={dealer.telefon}
                placeholder={t(`phone`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="email"
              >
                {t(`email`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={dealer.email}
                placeholder={t(`email`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="web_site"
              >
                {t(`web_site`)} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="web_site"
                type="url"
                name="web_site"
                value={dealer.web_site}
                placeholder={t(`web_site`)}
                onChange={(e)=>setDealer({...dealer, [e.target.name]:e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="adress"
              >
                {t(`adress`)} <span className="text-red-500">*</span>
              </label>
              <textarea
                className="shadow appearance-none border min-h-[240px] rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="adress"
                type="text"
                name="adres"
                value={dealer.adres}
                placeholder= {t(`adress`)}
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
            {t(`submit`)}
          </button>
        </div>
      </form>
    </div>
  );
}
