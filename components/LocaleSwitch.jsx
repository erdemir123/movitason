import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import tr2 from "/public/tr2.png";
import en2 from "/public/en2.png";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();


  function handleLocaleChange(lang) {
    const newPathname = pathname.replace(/\/(en|tr)(\/.*)?$/, `/${lang}$2`);
    router.replace(newPathname); // Router'ı kullanarak sayfayı değiştir
  }

  return (
    <div className="flex justify-center items-center gap-4 mx-6 cursor-pointer">
      <div onClick={() => handleLocaleChange("tr")} className="w-8 h-8">
        <Image
          src={tr2}
          width={40}
          height={40}
          alt="langTr"
          className="h-full w-full"
        />
      </div>
      <div onClick={() => handleLocaleChange("en")} className="w-8 h-8">
        
        <Image
          src={en2}
          width={40}
          height={40}
          alt="langEn"
          className="h-full w-full"
        />
      </div>
      
    </div>
  );
}
