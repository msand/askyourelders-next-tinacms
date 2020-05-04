import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useLocalMarkdownForm } from 'next-tinacms-markdown'

import Layout from '../components/Layout'

export default function ThankYou(props) {
	const formOptions = {
		fields: [
			{
				name: 'frontmatter.background_color',
				label: 'Background Color',
				component: 'color'
			},
			{
				name: 'markdownBody',
				label: 'ThankYou Content',
				component: 'markdown'
			}
		]
	}
	const [data] = useLocalMarkdownForm(props.markdownFile, formOptions)

	return (
		<Layout
			pathname='thank-you'
			bgColor={data.frontmatter.background_color}
			siteTitle={props.title}
		>
			<section className='thank_you_blurb'>
				<ReactMarkdown source={data.markdownBody} />
			</section>
			<style jsx>{`
				.thank_you_blurb {
					max-width: 800px;
					padding: 1.5rem 1.25rem;
				}

				@media (min-width: 768px) {
					.thank_you_blurb {
						padding: 2rem;
					}
				}

				@media (min-width: 1440px) {
					.thank_you_blurb {
						padding: 3rem;
					}
				}
			`}</style>
		</Layout>
	)
}

ThankYou.getInitialProps = async function() {
	const content = await import(`../data/thank_you.md`)
	const config = await import(`../data/config.json`)
	const data = matter(content.default)

	return {
		markdownFile: {
			fileRelativePath: `src/data/thank_you.md`,
			frontmatter: data.data,
			markdownBody: data.content
		},
		title: config.default.title
	}
}
