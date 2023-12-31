import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TawkToScript from "@/components/TawkToScript";
import { unstable_setRequestLocale, NextIntlClientProvider } from "next-intl";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// Can be imported from a shared config
const locales = ['en', 'tr'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
   
  }
  if (typeof window === 'undefined') {
    const { unstable_setRequestLocale } = await import('next-intl/server');
    unstable_setRequestLocale(locale);
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        
        <NextIntlClientProvider locale={locale}  messages={messages} >
          <Header />
          <Nav locale={locale}/>
          <div className="flex justify-center items-center h-[100%]">
            {children}
          </div>
          <div className="absolute border border-red-500 bottom-16">
            <TawkToScript />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}