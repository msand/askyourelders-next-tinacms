import React from 'react'
import Layout from '../components/Layout'

export default function Add(props) {
  return (
    <Layout pathname="add" oneLiner={props.oneLiner} siteTitle={props.title}>
      <section className="add_blurb">
        <h1>Add a story</h1>
        <div>
          <form method="POST" action="/.netlify/functions/staticman/msand/askyourelders-next-tinacms/master/comments">
            <input name="options[redirect]" type="hidden" value="https://askyourelders.org" />
            <input name="options[slug]" type="hidden" value="{{ page.slug }}" />
            <label>
              Name
              <input name="fields[name]" type="text" placeholder="Enter your name" />
            </label>
            <label>
              E-mail
              <input name="fields[email]" type="email" placeholder="Enter your email address" />
            </label>
            <label>
              Message
              <textarea name="fields[message]" placeholder="Enter your message" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <style jsx>{
        //language=CSS
        `
          .add_blurb {
            max-width: 800px;
            border-radius: 5px;
            margin-bottom: 30px;
            background-color: #fff;
            padding: 1.5rem 1.25rem;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
          }
          button {
            display: inline-block;
            padding: 11px 20px;
            border-radius: 3px;
            background-color: #888;
            -webkit-transition: background-color 200ms ease;
            transition: background-color 200ms ease;
            color: #fff;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            text-decoration: none;
          }

          label {
            display: block;
            font-weight: bold;
          }
          input,
          textarea {
            display: block;
            width: 100%;
            padding: 8px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333333;
            vertical-align: middle;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            margin-bottom: 15px;
            margin-top: 8px;
            border-radius: 3px;
            height: auto;
          }
        `
      }</style>
    </Layout>
  )
}

Add.getInitialProps = async function () {
  const config = await import(`../data/config.json`)

  return {
    title: config.default.title,
    oneLiner: config.default.oneLiner,
  }
}
