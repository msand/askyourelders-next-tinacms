import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useLocalMarkdownForm } from 'next-tinacms-markdown'
import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

function AddStoryForm() {
	const [name,setName] = useState('');
	const [status,setStatus] = useState('');
	const [email,setEmail] = useState('');
	const [message,setMessage] = useState('');
	const [file, setFile] = useState({});

	const onDrop = useCallback(acceptedFiles => {
		console.log(acceptedFiles)
		setFile(acceptedFiles[0])
	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	const encode = (data) => {
		const formData = new FormData();
		Object.keys(data).forEach((k)=>{
			formData.append(k,data[k])
		});
		return formData
	}

	const handleSubmit = e => {
		const data = { "form-name": "add", name, email, message, file }

		fetch("/", {
			method: "POST",
			// headers: { "Content-Type": 'multipart/form-data; boundary=random' },
			body: encode(data)
		})
		.then(() => setStatus("Form Submission Successful!!"))
		.catch(error => setStatus("Form Submission Failed!"));

		e.preventDefault();
	};

	const handleChange = e => {
		const {name, value} = e.target
		if (name === 'name' ){
			return setName(value)
		}
		if (name === 'email' ){
			return setEmail(value)
		}
		if (name === 'message' ){
			return setMessage(value)
		}
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit} action="/thank-you/">
				<p>
					<label>
						Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message" value={message} onChange={handleChange} />
					</label>
				</p>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{
						isDragActive ?
							<p>Drop the files here ...</p> :
							<p>Drag 'n' drop some files here, or click to select files</p>
					}
				</div>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
			<h3>{status}</h3>
		</div>
	);
}

import Layout from '../components/Layout'

export default function Add(props) {
	const formOptions = {
		fields: [
			{
				name: 'frontmatter.background_color',
				label: 'Background Color',
				component: 'color'
			},
			{
				name: 'markdownBody',
				label: 'Add Content',
				component: 'markdown'
			}
		]
	}
	const [data] = useLocalMarkdownForm(props.markdownFile, formOptions)

	return (
		<Layout
			pathname='add'
			bgColor={data.frontmatter.background_color}
			siteTitle={props.title}
		>
			<section className='add_blurb'>
				<ReactMarkdown source={data.markdownBody} />
				<AddStoryForm />
			</section>
			<style jsx>{`
				.add_blurb {
					max-width: 800px;
					padding: 1.5rem 1.25rem;
				}

				@media (min-width: 768px) {
					.add_blurb {
						padding: 2rem;
					}
				}

				@media (min-width: 1440px) {
					.add_blurb {
						padding: 3rem;
					}
				}
			`}</style>
		</Layout>
	)
}

Add.getInitialProps = async function() {
	const content = await import(`../data/add.md`)
	const config = await import(`../data/config.json`)
	const data = matter(content.default)

	return {
		markdownFile: {
			fileRelativePath: `src/data/add.md`,
			frontmatter: data.data,
			markdownBody: data.content
		},
		title: config.default.title
	}
}

