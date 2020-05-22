import Head from 'next/head'

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
      </Head>
      <style jsx global>
        {
          //language=CSS
          `
            @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Nanum+Brush+Script&family=Work+Sans&display=swap');

            * {
              box-sizing: inherit;
            }

            html {
              box-sizing: border-box;
              overflow-y: scroll;
            }

            body {
              margin: 0;
              background-color: #f0f0f0;
              font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
              overflow-x: hidden;
              color: #000;
              font-size: 14px;
              line-height: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            a {
              text-decoration: none;
              color: inherit;
              transition: opacity 0.2s ease;
            }

            a:hover {
              transition: opacity 0.2s ease;
              opacity: 0.5;
              text-decoration-color: inherit;
            }

            ul {
              margin: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
            }

            ol {
              margin: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
            }

            ul,
            ol,
            p {
              margin-bottom: 1.45rem;
            }

            img {
              max-width: 100%;
            }

            img,
            figure,
            table,
            fieldset {
              margin-left: 0;
              margin-right: 0;
              margin-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              margin-bottom: 0;
            }

            pre {
              margin-left: 0;
              margin-right: 0;
              margin-top: 0;
              margin-bottom: 1.45rem;
              font-size: 0.85rem;
              line-height: 1.42;
              background: hsla(0, 0%, 0%, 0.04);
              border-radius: 3px;
              overflow: auto;
              word-wrap: normal;
              padding: 1.45rem;
            }

            table {
              font-size: 1rem;
              line-height: 1.45rem;
              border-collapse: collapse;
              width: 100%;
            }

            blockquote {
              margin-left: 1.45rem;
              margin-right: 1.45rem;
              margin-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              margin-bottom: 1.45rem;
            }

            strong {
              font-weight: bold;
            }

            li {
              margin-bottom: calc(1.45rem / 2);
            }

            ol li {
              padding-left: 0;
            }

            ul li {
              padding-left: 0;
            }

            li > ol {
              margin-left: 1.45rem;
              margin-bottom: calc(1.45rem / 2);
              margin-top: calc(1.45rem / 2);
            }

            li > ul {
              margin-left: 1.45rem;
              margin-bottom: calc(1.45rem / 2);
              margin-top: calc(1.45rem / 2);
            }

            blockquote *:last-child {
              margin-bottom: 0;
            }

            li *:last-child {
              margin-bottom: 0;
            }

            p *:last-child {
              margin-bottom: 0;
            }

            li > p {
              margin-bottom: calc(1.45rem / 2);
            }

            code {
              font-size: 0.85rem;
              line-height: 1.45rem;
            }

             {
              /* //TYPOGRAPHY------------------------------------- */
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p {
              font-family: 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
              margin-left: 0;
              margin-right: 0;
              margin-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              margin-bottom: 1.45rem;
              color: inherit;
              text-rendering: optimizeLegibility;
            }

            h1,
            h2 {
              font-weight: 500;
              margin-top: 0px;
              margin-bottom: 15px;
              font-size: 35px;
              line-height: 40px;
              font-weight: 400;
            }

            h1 {
              font-size: 2.1875rem;
              line-height: 1.1875;
            }

            h2 {
              font-size: 1.7rem;
              line-height: 1.2;
            }

            h3 {
              font-size: 1.2rem;
              line-height: 1.1875;
              color: #a0a0a0;
              font-weight: normal;
            }

            p {
              color: #464646;
              margin-top: 0px;
              margin-bottom: 20px;
              font-family: Lato, sans-serif;
              line-height: 160%;
            }

            @media (min-width: 1280px) {
              h1 {
                font-size: 2rem;
                line-height: 1.1875;
              }

              h2 {
                font-size: 1.5rem;
                line-height: 1.1667;
              }

              h3 {
                font-size: 1rem;
                line-height: 1.1875;
                color: #a0a0a0;
                font-weight: normal;
              }

              p {
                line-height: 1.4375;
              }
            }

            ol {
              margin-top: 0px;
              margin-bottom: 10px;
              padding-left: 40px;
              font-family: Lato, sans-serif;
            }

            ul {
              margin-top: 0px;
              margin-bottom: 20px;
              padding-left: 40px;
            }

            .list {
              padding-left: 0;
            }

            li.post-wrapper {
              padding: 20px;
              border-radius: 5px;
              margin-bottom: 20px;
              background-color: #fff;
              box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
            }

            .link a, a.link {
              color: #0574e4;
              text-decoration: underline;
            }
          `
        }
      </style>
    </>
  )
}
