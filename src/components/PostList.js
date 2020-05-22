import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FacebookIcon, FacebookShareButton } from 'react-share'
import { url } from '../data/config'

const PostList = (props) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate * 1000)
    return date.toDateString().slice(4)
  }

  const posts = props.allPosts

  return (
    <>
      <ul className="list">
        {posts.length > 0 &&
          posts
            .slice()
            .reverse()
            .map((post) => (
              <li className="post-wrapper">
                <div className="post__info">
                  <Link key={post.slug} href={{ pathname: `/post/${post.slug}` }}>
                    <a>
                      <h2>{post.document.data.title}</h2>
                      <h3>
                        {post.document.data.name} - {reformatDate(post.document.data.date)}
                      </h3>
                      <p>
                        <ReactMarkdown source={truncateSummary(post.document.data.message)} />
                      </p>
                      <h3>{post.document.data.elder}</h3>
                    </a>
                  </Link>
                  <FacebookShareButton url={url + `/post/${post.slug}`}>
                    <p style={{ alignItems: 'center', display: 'flex' }}>
                      <FacebookIcon size={20} round={true} /> &nbsp;Share
                    </p>
                  </FacebookShareButton>
                </div>
              </li>
            ))}
      </ul>
      <style jsx>
        {`
          margin-bottom: 0;
          a:hover {
            opacity: 1;
          }
          a:hover li div.hero_image img {
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
          a:hover li .post__info h2,
          a:hover li .post__info h3,
          a:hover li .post__info p {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
          .hero_image {
            width: 100%;
            overflow: hidden;
          }
          .hero_image img {
            object-fit: contain;
            object-position: 50% 50%;
            opacity: 1;
            transition: opacity 0.3s ease;
            min-height: 100%;
          }
          .post__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
          }
          .post__info h2,
          .post__info h3,
          .post__info p {
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
            .post__info {
              min-width: 70%;
            }
          }
          @media (min-width: 1280px) {
            .post__info {
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

export default PostList
