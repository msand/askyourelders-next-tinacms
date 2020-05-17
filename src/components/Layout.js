import Header from './Header'
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section
      className={`layout ${props.pathname == 'info' && 'info_page'}`}
      style={{
        backgroundColor: `${props.bgColor && props.bgColor}`,
        color: `${props.pathname == 'info' && 'white'}`,
      }}
    >
      <Meta siteTitle={props.siteTitle} siteDescription={props.siteDescription} />
      <Header siteTitle={props.siteTitle} pathname={props.pathname} oneLiner={props.oneLiner} />
      <div className="row">
        <div className="sidebar">
          <div className="white-wrapper">
            <h1 className="heading">
              #Ask
              <br />
              Your
              <br />
              Elders
            </h1>
            <p className="site-description">
              Some stories can only be heard by asking and listening. <span className="hashtag text-span">#</span>
              askyourelders
            </p>
            <div className="grey-rule" />
            <div className="social-link-group">
              <a href="#" className="social-icon-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/5eb02de08cf9c4112d826157/5eb02de09b2abe302f99dbe9_social-03.svg"
                  width={25}
                  alt=""
                />
              </a>
              <a href="#" className="social-icon-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/5eb02de08cf9c4112d826157/5eb02de09b2abe651199dc38_social-07.svg"
                  width={25}
                  alt=""
                />
              </a>
              <a href="#" className="social-icon-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/5eb02de08cf9c4112d826157/5eb02de09b2abe704f99dc81_social-18.svg"
                  width={25}
                  alt=""
                />
              </a>
              <a href="#" className="social-icon-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/5eb02de08cf9c4112d826157/5eb02de09b2abee45c99dbf6_social-09.svg"
                  width={25}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <style jsx>
        {
          //language=CSS
          `
            .layout {
              display: flex;
              overflow-x: hidden;
              flex-direction: column;
              min-height: 100vh;
            }
            .layout .info_page {
              color: #ebebeb;
            }
            .sidebar {
              flex: 1;
            }
            .content {
              flex: 3;
            }
            .sidebar,
            .content {
              padding: 0 10px;
            }
            .row {
              width: 100%;
              display: flex;
              max-width: 758px;
              margin: 20px auto;
              justify-content: center;
            }
            .white-wrapper {
              padding: 14px;
              border-radius: 5px;
              background-color: #fff;
              box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
            }
            .heading {
              font-family: 'Nanum Brush Script', sans-serif;
            }
            .site-description {
              margin-bottom: 20px;
              font-family: 'Architects Daughter', sans-serif;
              line-height: 145%;
              text-align: left;
              font-size: 14px;
            }
            .grey-rule {
              width: 90px;
              height: 1px;
              margin-top: 15px;
              margin-bottom: 15px;
              background-color: #c7c7c7;
            }
            .small-heading {
              margin-top: 0px;
              margin-bottom: 15px;
              font-size: 14px;
              line-height: 135%;
              text-align: left;
            }
            .social-icon-link {
              width: 20px;
              margin-right: 12px;
              opacity: 0.36;
              -webkit-transition: opacity 200ms ease;
              transition: opacity 200ms ease;
            }
            img {
              vertical-align: middle;
              display: inline-block;
              max-width: 100%;
            }
            .w-inline-block {
              max-width: 100%;
              display: inline-block;
            }
            @media (min-width: 768px) {
              .layout {
                display: block;
              }
            }
            @media (max-width: 550px) {
              .row {
                flex-direction: column;
              }
              .sidebar {
                margin-bottom: 1rem;
              }
            }
          `
        }
      </style>
    </section>
  )
}
