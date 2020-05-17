import Link from 'next/link'

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <section>
          <Link href="/">
            <h1>{props.siteTitle}</h1>
          </Link>
          <Link href="/about">
            <h1 className={props.pathname === 'about' ? 'selected' : ''}>About</h1>
          </Link>
        </section>
        <Link href="/add">
          <h1 className={props.pathname === 'add' ? 'selected' : ''}>Add a story</h1>
        </Link>
      </nav>
      <style jsx>
        {
          //language=CSS
          `
            .selected {
              font-weight: bold;
              color: #3278bd;
            }

            header {
              padding: 10px;
              background-color: #fff;
            }

            header,
            section,
            nav {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }

            nav {
              flex: 1;
              max-width: 728px;
              align-items: center;
              justify-content: space-between;
            }

            img {
              margin-bottom: 0;
            }

            h1 {
              font-family: 'Nanum Brush Script';
              font-weight: normal;
              line-height: 100%;
              font-size: 24px;
              padding: 15px 0;
              margin: 0;
            }

            section h1 {
              padding-right: 20px;
            }

            h1:hover {
              cursor: pointer;
            }

            .one-liner {
              font-family: 'Architects Daughter', sans-serif;
            }
          `
        }
      </style>
    </header>
  )
}
