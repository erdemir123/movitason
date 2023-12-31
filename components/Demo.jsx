import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function Demo() {
  const t = useTranslations("demo");

  const [dealer, setDealer] = useState({
    adi: "",
    soyadi: "",
    telefon1: "",
    telefon2: "",
    email: "",
    aracsayisi: "",
    unvan: "",
    kurum_adi: "",
    aciklama: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    setDealer({
      adi: "",
      soyadi: "",
      telefon1: "",
      telefon2: "",
      email: "",
      aracsayisi: "",
      unvan: "",
      kurum_adi: "",
      aciklama: "",
    });
  };
  return (
    <div className="bg-primary/30 py-2 rounded-md px-4">
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-28 md:mb-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 bg-primary/30 rounded-lg ">
          <div className="w-full md:w-[45%] p-2 ">
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="name"
              >
                {t(`name`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="adi"
                value={dealer.adi}
                type="text"
                placeholder={t(`your_name`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tel1"
              >
                {t(`phone`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tel1"
                name="telefon1"
                value={dealer.telefon1}
                type="text"
                placeholder={t(`your_phone`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tax_email"
              >
                {t(`email`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tax_email"
                name="email"
                value={dealer.email}
                type="text"
                placeholder= {t(`email`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="unvan"
              >
                {t(`title`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="unvan"
                name="unvan"
                value={dealer.unvan}
                type="text"
                placeholder={t(`title`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] p-2">
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="surname"
              >
                {t(`surname`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="surname"
                name="soyadi"
                value={dealer.soyadi}
                type="text"
                placeholder={t(`your_surname`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="tel2"
              >
                {t(`phone_second`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="tel2"
                name="telefon2"
                value={dealer.telefon2}
                type="tel"
                placeholder={t(`phone_second`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="car_count"
              >
                {t(`vehicles`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="car_count"
                name="aracsayisi"
                value={dealer.aracsayisi}
                type="text"
                placeholder= {t(`vehicles`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="kurum_adi"
              >
                {t(`company`)}: <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="kurum_adi"
                name="kurum_adi"
                value={dealer.kurum_adi}
                type="text"
                placeholder= {t(`company`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full md:w-[92%] p-2">
            <div className="mb-4">
              <label
                className="block text-accent text-sm font-bold mb-2"
                htmlFor="description"
              >
                {t(`descriptions`)}: <span className="text-red-500">*</span>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full min-h-[150px] py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="aciklama"
                value={dealer.aciklama}
                type="text"
                placeholder={t(`descriptions`)}
                onChange={(e) =>
                  setDealer({ ...dealer, [e.target.name]: e.target.value })
                }
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
