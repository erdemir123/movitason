// components/LocaleSwitcher.jsx
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter} from 'next/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router=useRouter()
  const pathname = usePathname()
  console.log("s",locale)


  function handleLocaleChange(e) {
    const nextLocale = e.target.value;
    const newPathname = pathname.replace(/\/(en|tr)(\/.*)?$/, `/${nextLocale}$2`);
    console.log(newPathname);
    router.replace(newPathname); // Router'ı kullanarak sayfayı değiştir
  }

  return (
    <select value={locale} onChange={handleLocaleChange}>
      <option value="en">en</option>
      <option value="tr">tr</option>
    </select>
  );
}
