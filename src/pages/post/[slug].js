import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { NextSeo } from 'next-seo'

import Layout from '../../components/Layout'
import { description, oneLiner, title as site_name } from '../../data/config'
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WeiboShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share'

function reformatDate(fullDate) {
  const date = new Date(fullDate * 1000)
  return date.toDateString().slice(4)
}

const truncate = (input) => (input.length > 170 ? `${input.substring(0, 160)}...` : input)

export default function PostTemplate(props) {
  const { jsonFile, slug } = props
  const { data } = jsonFile
  const { title, message, elder, name, date } = data
  const url = `https://askyourelders.org/post/${slug}`
  const seo_description = truncate(message || description)
  return (
    <Layout siteTitle={site_name} oneLiner={oneLiner}>
      <NextSeo
        {...{
          title,
          description: seo_description,
          canonical: url,
          openGraph: {
            type: 'website',
            url: url,
            title,
            description: seo_description,
            images: [
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
        <div className="blog__info">
          <h1>{title}</h1>
          <h3>{reformatDate(date)}</h3>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={message} />
          <h3 className="blog__footer">Elder: {elder}</h3>
          <h5 className="blog__footer">Written By: {name}</h5>
        </div>
        <div className="share">
          <EmailShareButton url={url}>
            <EmailIcon size={32} round={true} /> &nbsp;Share
          </EmailShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} /> &nbsp;Share
          </FacebookShareButton>
          <InstapaperShareButton url={url}>
            <InstapaperIcon size={32} round={true} /> &nbsp;Share
          </InstapaperShareButton>
          <LineShareButton url={url}>
            <LineIcon size={32} round={true} /> &nbsp;Share
          </LineShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round={true} /> &nbsp;Share
          </LinkedinShareButton>
          <LivejournalShareButton url={url}>
            <LivejournalIcon size={32} round={true} /> &nbsp;Share
          </LivejournalShareButton>
          <MailruShareButton url={url}>
            <MailruIcon size={32} round={true} /> &nbsp;Share
          </MailruShareButton>
          <OKShareButton url={url}>
            <OKIcon size={32} round={true} /> &nbsp;Share
          </OKShareButton>
          <PinterestShareButton url={url}>
            <PinterestIcon size={32} round={true} /> &nbsp;Share
          </PinterestShareButton>
          <PocketShareButton url={url}>
            <PocketIcon size={32} round={true} /> &nbsp;Share
          </PocketShareButton>
          <RedditShareButton url={url}>
            <RedditIcon size={32} round={true} /> &nbsp;Share
          </RedditShareButton>
          <TelegramShareButton url={url}>
            <TelegramIcon size={32} round={true} /> &nbsp;Share
          </TelegramShareButton>
          <TumblrShareButton url={url}>
            <TumblrIcon size={32} round={true} /> &nbsp;Share
          </TumblrShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} /> &nbsp;Share
          </TwitterShareButton>
          <ViberShareButton url={url}>
            <ViberIcon size={32} round={true} /> &nbsp;Share
          </ViberShareButton>
          <VKShareButton url={url}>
            <VKIcon size={32} round={true} /> &nbsp;Share
          </VKShareButton>
          <WeiboShareButton url={url}>
            <WeiboIcon size={32} round={true} /> &nbsp;Share
          </WeiboShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} /> &nbsp;Share
          </WhatsappShareButton>
          <WorkplaceShareButton url={url}>
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

PostTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query
  const data = await import(`../../posts/${slug}.json`)
  const config = await import(`../../data/config.json`)

  return {
    jsonFile: {
      fileRelativePath: `src/posts/${slug}.json`,
      data,
    },
    slug,
    title: config.default.title,
    oneLiner: config.default.oneLiner,
  }
}
