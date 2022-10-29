import { Html, Head, Main, NextScript } from "next/document";

const _document = () => {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("theme");
            document.documentElement.setAttribute("data-theme", theme);
            console.log(theme);
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
