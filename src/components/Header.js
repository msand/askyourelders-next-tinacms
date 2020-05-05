import Link from 'next/link'

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>{props.siteTitle}</h1>
        </Link>
        <Link
          href={`${
            typeof window !== 'undefined' && window.location.pathname == '/add'
              ? '/'
              : '/add'
          }`}
        >
          <h1>{`${
            typeof window !== 'undefined' && window.location.pathname == '/add'
              ? 'Close'
              : 'Add a story'
          }`}</h1>
        </Link>
        <p className="one-liner">{props.oneLiner}</p>
        <Link
          href={`${
            typeof window !== 'undefined' &&
            window.location.pathname == '/about'
              ? '/'
              : '/about'
          }`}
        >
          <h1>{`${
            typeof window !== 'undefined' &&
            window.location.pathname == '/about'
              ? 'Close'
              : 'About'
          }`}</h1>
        </Link>
      </nav>
      <style jsx>
        {`
          h1 {
            font-family: 'Nanum Brush Script';
          }
          h1:hover {
            cursor: pointer;
          }
          .one-liner {
            font-family: 'Architects Daughter', sans-serif;
          }
          nav {
            padding: 1.5rem 1.25rem;
            border-bottom: 1px solid #ebebeb;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            align-items: center;
          }
          nav div {
            padding: 1.5rem 1.25rem;
          }
          img {
            margin-bottom: 0;
          }
          @media (min-width: 768px) {
            .header {
              height: 100vh;
              position: fixed;
              left: 0;
              top: 0;
            }
            .nav {
              padding: 2rem;
              width: 30vw;
              height: 100%;
              border-right: 1px solid #ebebeb;
              border-bottom: none;
              flex-direction: column;
              align-items: flex-start;
            }
            nav div {
              padding: 2rem 0;
            }
          }
        `}
      </style>
    </header>
  )
}
