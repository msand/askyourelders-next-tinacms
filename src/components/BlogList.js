import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FacebookIcon, FacebookShareButton } from 'react-share'

const BlogList = (props) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  const posts = props.allBlogs

  return (
    <>
      <ul className="list">
        {posts.length > 0 &&
          posts.map((post) => (
            <li className="post-wrapper">
              <div className="hero_image">
                <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
                  <a>
                    <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
                  </a>
                </Link>
                <FacebookShareButton url={`https://askyourelders.org/post/${post.slug}`}>
                  <p style={{ alignItems: 'center', display: 'flex' }}>
                    <FacebookIcon size={20} round={true} /> &nbsp;Share
                  </p>
                </FacebookShareButton>
              </div>
              <div className="blog__info">
                <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
                  <a>
                    <h2>{post.document.data.title}</h2>
                    <h3> {reformatDate(post.document.data.date)}</h3>
                    <p>
                      <ReactMarkdown source={truncateSummary(post.document.content)} />
                    </p>
                  </a>
                </Link>
              </div>
            </li>
          ))}
      </ul>
      <style jsx>
        {`
          a:hover {
            opacity: 1;
          }
          a:hover li div.hero_image img {
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
          a:hover li .blog__info h2,
          a:hover li .blog__info h3,
          a:hover li .blog__info p {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
          .hero_image {
            overflow: hidden;
            min-width: 160px;
            padding-right: 1.25rem;
            display: grid;
          }
          .hero_image img {
            object-fit: contain;
            object-position: 50% 50%;
            opacity: 1;
            transition: opacity 0.3s ease;
            min-height: 100%;
          }
          .blog__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
          }
          .blog__info h2,
          .blog__info h3,
          .blog__info p {
            transform: translateX(0px);
            transition: transform 0.5s ease-out;
          }
          li {
            opacity: inherit;
            display: flex;
            flex-direction: column;
          }
          h2 {
          }
          h3 {
            display: inline-block;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #aaa;
            font-size: 10px;
            line-height: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          p {
            max-width: 900px;
          }
          @media (min-width: 768px) {
            li {
              flex-direction: row;
            }
            .hero_image img {
              min-width: 100%;
              width: auto;
            }
            .blog__info {
              min-width: 66%;
            }
          }
          @media (min-width: 1280px) {
            .blog__info {
            }
            h3 {
              margin-bottom: 1.2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogList
