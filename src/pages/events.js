import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { useLocalMarkdownForm } from 'next-tinacms-markdown'

import Layout from '../components/Layout'
import React from 'react'
import Link from 'next/link'

export default function About(props) {
  const formOptions = {
    fields: [
      {
        name: 'frontmatter.background_color',
        label: 'Background Color',
        component: 'color',
      },
      {
        name: 'markdownBody',
        label: 'About Content',
        component: 'markdown',
      },
    ],
  }
  const [data] = useLocalMarkdownForm(props.markdownFile, formOptions)

  return (
    <Layout
      pathname="events"
      bgColor={data.frontmatter.background_color}
      oneLiner={props.oneLiner}
      siteTitle={props.title}
    >
      <section className="events_blurb">
        <ReactMarkdown source={data.markdownBody} escapeHtml={false} />
      </section>
      <h1>
        <Link href="/add">
          <a className="link">Add a story.</a>
        </Link>
      </h1>
      <style jsx>{`
        .events_blurb {
          max-width: 800px;
          padding: 1.5rem 1.25rem;
        }

        @media (min-width: 768px) {
          .events_blurb {
            padding: 2rem;
          }
        }

        @media (min-width: 1440px) {
          .events_blurb {
            padding: 3rem;
          }
        }
      `}</style>
    </Layout>
  )
}

About.getInitialProps = async function () {
  const content = await import(`../data/events.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `src/data/events.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
    oneLiner: config.default.oneLiner,
  }
}
