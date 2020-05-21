import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useLocalMarkdownForm } from 'next-tinacms-markdown'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
} from 'react-share'

import Layout from '../../components/Layout'
import { NextSeo } from 'next-seo'
import { description, title as site_name, url } from '../../data/config'

function reformatDate(fullDate) {
  const date = new Date(fullDate)
  return date.toDateString().slice(4)
}

const truncate = (input) => (input.length > 170 ? `${input.substring(0, 160)}...` : input)

export default function BlogTemplate(props) {
  const { markdownFile, oneLiner, title, slug } = props
  const formOptions = {
    fields: [
      {
        label: 'Hero Image',
        name: 'frontmatter.hero_image',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: (filename) => `../static/${filename}`,

        // Decide the file upload directory for the post
        uploadDir: () => '/src/public/static/',

        // Generate the src attribute for the preview image.
        previewSrc: (data) => `/static/${data.frontmatter.hero_image}`,
      },
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'frontmatter.date',
        label: 'Date',
        component: 'date',
      },
      {
        name: 'frontmatter.author',
        label: 'Author',
        component: 'text',
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
    ],
  }

  const [post] = useLocalMarkdownForm(markdownFile, formOptions)
  const postUrl = `https://askyourelders.org/blog/${slug}`
  const { markdownBody, frontmatter } = post
  const seo_description = truncate(markdownBody || description)

  return (
    <Layout siteTitle={title} oneLiner={oneLiner}>
      <NextSeo
        {...{
          title,
          description: seo_description,
          canonical: postUrl,
          openGraph: {
            type: 'website',
            url: postUrl,
            title,
            description: seo_description,
            images: [
              {
                url: url + frontmatter.hero_image,
              },
              {
                url: url + 'static/opengraph.png',
                width: 1200,
                height: 630,
                alt: oneLiner,
              },
            ],
            site_name,
          },
        }}
      />
      <article className="blog">
        <figure className="blog__hero">
          <img src={frontmatter.hero_image} alt={`blog_hero_${frontmatter.title}`} />
        </figure>
        <div className="blog__info">
          <h1>{frontmatter.title}</h1>
          <h3>{reformatDate(frontmatter.date)}</h3>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={markdownBody} />
        </div>
        <h2 className="blog__footer">Written By: {frontmatter.author}</h2>
        <div className="share">
          <EmailShareButton url={postUrl}>
            <EmailIcon size={32} round={true} /> &nbsp;Share
          </EmailShareButton>
          <FacebookShareButton url={postUrl}>
            <FacebookIcon size={32} round={true} /> &nbsp;Share
          </FacebookShareButton>
          <InstapaperShareButton url={postUrl}>
            <InstapaperIcon size={32} round={true} /> &nbsp;Share
          </InstapaperShareButton>
          <LineShareButton url={postUrl}>
            <LineIcon size={32} round={true} /> &nbsp;Share
          </LineShareButton>
          <LinkedinShareButton url={postUrl}>
            <LinkedinIcon size={32} round={true} /> &nbsp;Share
          </LinkedinShareButton>
          <LivejournalShareButton url={postUrl}>
            <LivejournalIcon size={32} round={true} /> &nbsp;Share
          </LivejournalShareButton>
          <MailruShareButton url={postUrl}>
            <MailruIcon size={32} round={true} /> &nbsp;Share
          </MailruShareButton>
          <OKShareButton url={postUrl}>
            <OKIcon size={32} round={true} /> &nbsp;Share
          </OKShareButton>
          <PinterestShareButton url={postUrl}>
            <PinterestIcon size={32} round={true} /> &nbsp;Share
          </PinterestShareButton>
          <PocketShareButton url={postUrl}>
            <PocketIcon size={32} round={true} /> &nbsp;Share
          </PocketShareButton>
          <RedditShareButton url={postUrl}>
            <RedditIcon size={32} round={true} /> &nbsp;Share
          </RedditShareButton>
          <TelegramShareButton url={postUrl}>
            <TelegramIcon size={32} round={true} /> &nbsp;Share
          </TelegramShareButton>
          <TumblrShareButton url={postUrl}>
            <TumblrIcon size={32} round={true} /> &nbsp;Share
          </TumblrShareButton>
          <TwitterShareButton url={postUrl}>
            <TwitterIcon size={32} round={true} /> &nbsp;Share
          </TwitterShareButton>
          <ViberShareButton url={postUrl}>
            <ViberIcon size={32} round={true} /> &nbsp;Share
          </ViberShareButton>
          <VKShareButton url={postUrl}>
            <VKIcon size={32} round={true} /> &nbsp;Share
          </VKShareButton>
          <WeiboShareButton url={postUrl}>
            <WeiboIcon size={32} round={true} /> &nbsp;Share
          </WeiboShareButton>
          <WhatsappShareButton url={postUrl}>
            <WhatsappIcon size={32} round={true} /> &nbsp;Share
          </WhatsappShareButton>
          <WorkplaceShareButton url={postUrl}>
            <WorkplaceIcon size={32} round={true} /> &nbsp;Share
          </WorkplaceShareButton>
        </div>
      </article>
      <style jsx>
        {`
          .blog h1 {
            margin-bottom: 0.7rem;
          }

          .blog__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
          }
          .blog__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }

          .blog__info {
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          .blog__info h1 {
            margin-bottom: 0.66rem;
          }
          .blog__info h3 {
            margin-bottom: 0;
          }

          .blog__body {
            width: 100%;
            padding: 0 1.25rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify;
          }
          .blog__body a {
            padding-bottom: 1.5rem;
          }
          .blog__body:last-child {
            margin-bottom: 0;
          }
          .blog__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
          }
          .blog__body p {
            color: inherit;
          }
          .blog__body ul {
            list-style: initial;
          }
          .blog__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }

          .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .blog__footer h2 {
            margin-bottom: 0;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .blog__footer a svg {
            width: 20px;
          }

          @media (min-width: 768px) {
            .blog {
              display: flex;
              flex-direction: column;
            }
            .blog__body {
              max-width: 800px;
              padding: 0 2rem;
            }
            .blog__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .blog__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .blog__hero {
              min-height: 600px;
              height: 75vh;
            }
            .blog__info {
              text-align: center;
              padding: 2rem 0;
            }
            .blog__info h1 {
              max-width: 500px;
              margin: 0 auto 0.66rem auto;
            }
            .blog__footer {
              padding: 2.25rem;
            }
          }

          @media (min-width: 1440px) {
            .blog__hero {
              height: 70vh;
            }
            .blog__info {
              padding: 3rem 0;
            }
            .blog__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
      </style>
    </Layout>
  )
}

BlogTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `src/posts/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    slug,
    title: config.default.title,
    oneLiner: config.default.oneLiner,
  }
}
