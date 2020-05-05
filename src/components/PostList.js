import Link from "next/link";
import ReactMarkdown from "react-markdown";

const PostList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate * 1000)
    return date.toDateString().slice(4);
  }

  const posts = props.allPosts

  return (
    <>
      <ul className="list">
        {posts.length > 1 && posts.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/post/${post.slug}` }}
          >
            <a>
            <li>
              <div className="post__info">
                <h2>{post.document.data.name}</h2>
                <h3> {reformatDate(post.document.data.date)}</h3>
                <p>
                  <ReactMarkdown source={truncateSummary(post.document.data.message)} />
                </p>
              </div>
            </li>
            </a>
          </Link>
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
          a:hover li .post__info h2, a:hover li .post__info h3, a:hover li .post__info p {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
          .hero_image {
            width: 100%;
            height: 33vh;
            overflow: hidden;
            background-color: #000;
          }
          .hero_image img {
            object-fit: cover;
            object-position: 50% 50%;
            opacity: 1;
            transition: opacity 0.3s ease;
            min-height: 100%;
          }
          .post__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem 1.25rem;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
            border-bottom: 1px solid #ebebeb;
          }
          .post__info h2, .post__info h3, .post__info p {
            transform: translateX(0px);
            transition: transform 0.5s ease-out;
          }
          li {
            opacity: inherit;
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 38vh;
            margin-bottom: 0;
          }
          h2 {
            margin-bottom: 0.5rem;
          }
          h3 {
            margin-bottom: 1rem;
          }
          p {
            max-width: 900px;
          }
          @media (min-width: 768px) {
            li {
              min-height: 250px;
              height: 33.333vh;
              flex-direction: row;
            }
            .hero_image {
              height: 100%;
            }
            .hero_image img {
              min-width: 100%;
              height: 100%;
              width: auto;
              min-height: 0;
            }
            .post__info {
              min-width: 70%;
            }
          }
          @media (min-width: 1280px) {
            .post__info {
              padding: 3rem;
            }
            h3 {
              margin-bottom: 1.2rem;
            }
          }

        `}
      </style>
    </>
  );
};

export default PostList;
