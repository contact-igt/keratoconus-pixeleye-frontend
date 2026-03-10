import useUTMSource from "@/hooks/useUTMSource";
import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Preloader from "@/common/Preloader";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useUTMSource();
  return (
    <>
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
      >
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "t61yg323ge");
        `}
      </Script>

      <Preloader />
      <Component {...pageProps} />
    </>)
}
