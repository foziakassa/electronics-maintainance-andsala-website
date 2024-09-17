import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from './Header/Header';
import Footer from './Footer/Footer';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
        <NextIntlClientProvider messages={messages} locale={locale}>

      <body>
          <Header/>
          {children}
          <Footer/>
      </body>
      </NextIntlClientProvider>

    </html>
  );
}