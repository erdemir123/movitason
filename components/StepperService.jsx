"use client";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import movitaWeb from "../public/movitaapp.webp";
import movitaCamera from "../public/movitaCameraApp.webp";
import movitaServis from "../public/movitaServisApp.webp";
import movitaAt from "../public/movitaAtApp.webp";
import movitaAppView from "../public/movitaAppView.jpeg";
import wifi from "../public/wifi1.jpg";
import movitaApp2 from "../public/movitaApp2.jpg";
import plane from "../public/plane.gif";
import password from "../public/password.gif";
import download from "../public/download.svg";
import Image from "next/image";
import Link from "next/link";

export default function Stepper({ content }) {
  const steps = ["Yükle", "Wifi", "Şifre", "Giriş", "Uyarı", "Hazır"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    
    setCurrentStep((prev) => (prev === steps.length ? prev : prev + 1));
  };


  const handlePrev = () => {
    setCurrentStep((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-2  ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step border">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-[#F3B664]  text-sm md:font-bold ">{step}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col  lg:flex-row justify-center gap-4 items-center bg-red-100/5 rounded-md">
        {currentStep === 1 && (
          <>
            <div className="w-[240px] flex flex-wrap justify-center gap-4 py-8 ">
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaWeb}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 w-12 h-12"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaCamera}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaServis}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaAt}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaWeb}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaCamera}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaServis}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaAt}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
              <Link
                href="/"
                className="rounded-md border p-1 cursor-pointer relative group"
              >
                <Image
                  src={movitaWeb}
                  alt="AI Icon"
                  width={48}
                  height={48}
                  className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Image src={download} alt="AI Icon" width={24} height={24} />
                </div>
              </Link>
            </div>
            <p className="text-center font-bold text-white">
              Cihazınıza uygun olan movita uygulamasını indirin
            </p>
          </>
        )}
        {currentStep === 2 && (
          <div>
            <div className="flex justify-center py-2 mb-4">
            <Image src={plane} alt="AI Icon" width={320} height={280}  />
            </div>
            <p className="text-center font-bold text-white">
            Telefonunuzu uçak moduna alıp WiFiyi açınız.... <br />
              <span className="text-[12px] text-accent">Eğer Uçak moduna almaz iseniz, cihaz üzerinde sim kartı takılı değilse telefonunuz sizi ağa dahil etmeyecektir.</span>
            </p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <div className="flex justify-center py-2 mb-4">
            <Image src={wifi} alt="AI Icon" width={320} height={280}  />
            </div>
            <p className="text-center font-bold text-white">
            Cihaz adını Wi-fi listesinden seçip şifrenizi giriniz.... <br />
              <span className="text-[12px] text-accent">Cihazın WiFi adı ile şifre birbiri ile aynıdır.Cihazınızın WiFi adına göre şifreyi giriniz.</span>
            </p>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <div className="flex justify-center py-2 mb-4">
            <Image src={movitaAppView} alt="AI Icon" width={200} height={100}  />
            </div>
            <p className="text-center font-bold text-white">
            WiFi ile bağlandıktan sonra, uygulamayı açınız... <br />
              <span className="text-[12px] text-accent">Eğer cihaza ilk defa bağlandıysanız, uygulama size şifre belli etmenizi isteyecektir. Aynı şifreyi 2 kez giriniz.</span>
            </p>
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <div className="flex justify-center py-2 mb-4">
            <Image src={password} alt="AI Icon" width={200} height={100}  />
            </div>
            <p className="text-center font-bold text-white">
            Belirlediğiniz şifreyi unutmayınız... <br />
              <span className="text-[12px] text-accent">Bu şifrenin amacı cihaza yetkisiz kişilerin erişimini engellemektir.</span>
            </p>
          </div>
        )}
        {currentStep === 6 && (
          <div>
            <div className="flex justify-center py-2 mb-4">
            <Image src={movitaApp2} alt="AI Icon" width={200} height={50}  />
            </div>
            <p className="text-center font-bold text-white">
            Daha sonra ilgili menüden istediğiniz işlemi uygulayarsiniz.
            </p>
          </div>
        )}
       
            {/* 
            {currentStep === 6 &&   <p>6</p>}
            {currentStep === 7 &&   <p>7</p>} */}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 hover:text-accent"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        {!complete && (
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 hover:text-accent"
            onClick={handleNext}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
