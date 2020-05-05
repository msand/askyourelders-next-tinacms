import matter from 'gray-matter'
import { useLocalJsonForm } from 'next-tinacms-json'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import PostList from '../components/PostList'

const Index = ({ jsonFile, allBlogs, allPosts }) => {
  const formOptions = {
    fields: [
      {
        name: 'title',
        label: 'Site Title',
        component: 'text',
      },
      {
        name: 'oneLiner',
        label: 'One liner',
        component: 'text',
      },
      {
        name: 'description',
        label: 'Site Description',
        component: 'text',
      },
      {
        name: 'repositoryUrl',
        label: 'Repository Url',
        component: 'text',
      },
    ],
  }
  const [data] = useLocalJsonForm(jsonFile, formOptions)

  return (
    <Layout
      pathname="/"
      siteTitle={data.title}
      oneLiner={data.oneLiner}
      siteDescription={data.description}
    >
      <section>
				<h1>Posted stories</h1>
        <PostList allPosts={allPosts} />
      </section>
      <section>
				<h1>Featured blog posts</h1>
        <BlogList allBlogs={allBlogs} />
      </section>
      <style jsx>
        {`
          h1 {
            margin: 2rem;
            font-family: 'Nanum Brush Script';
          }
        `}
      </style>
    </Layout>
  )
}

export default Index

Index.getInitialProps = async function() {
  const content = await import(`../data/config.json`)
  // get all blog data for list
  const blogs = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        document,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  // get all post data for list
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      return {
        document: { data: value },
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.json$/))

  return {
    jsonFile: {
      fileRelativePath: `src/data/config.json`,
      data: content.default,
    },

    allBlogs: blogs,
    allPosts: posts,
  }
}
