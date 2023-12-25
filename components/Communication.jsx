import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapMovita"), {
  ssr: false,
});

export default function Communication() {
  return (
    <div className="bg-primary/30 xl:py-6 rounded-md mt-1 py-24 flex flex-col justify-center items-center gap-4 md:px-4 ">
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:px-4 bg-red-100/20">
        <div className="w-full">
          <DynamicMap />
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-28 md:mb-4 mt-4 w-full border border-slate-500">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              İsminiz <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="isim"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Konu <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mesaj <span className="text-red-500">*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Mesaj Gönder
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex justify-between item-center flex-col xl:flex-row bg-red-100/20 md:py-2 md:px-2 rounded-md">
        <div className="flex gap-6 ">
          <p className="font-bold text-accent">
            Adres: <br />
            <span>
              Macun Mahallesi Batı Bulvarı 177. Cadde Batı İş Merkezi No:28/66
              Yenimahalle/ANKARA
            </span>
          </p>
        </div>
        <div className="flex gap-4 flex-col xl:flex-row">
          <p className="font-bold text-accent">
            Telefon: <br className="hidden md:block" />
            <span>+ 90 (850) 557 7627</span>
          </p>
          <p className="font-bold text-accent">
            Email: <br className="hidden md:block" />
            <span>bilgi@movita.com.tr</span>
          </p>
        </div>
      </div>
    </div>
  );
}
