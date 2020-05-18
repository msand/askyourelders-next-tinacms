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
              Title
              <input name="fields[title]" type="text" required={true} placeholder="Enter a title" />
            </label>
            <label>
              Text
              <textarea name="fields[message]" required={true} placeholder="Enter your message" style={{ minHeight: 120}} />
            </label>
            <label>
              Elders name (optional)
              <input name="fields[elder]" type="text" placeholder="Enter name of elder" />
            </label>
            <label>
              Author (optional)
              <input name="fields[name]" type="text" placeholder="Enter your name" />
            </label>
            <label>
              E-mail (optional)
              <input name="fields[email]" type="email" placeholder="Enter your email address" />
            </label>
            <label>
              <input name="fields[email]" type="checkbox" required={true} style={{ display: 'inline-block', width: 'auto' }} />
              Agree to share story with all of humanity under the open source{' '}
              <a className="link" href="https://opensource.org/licenses/Apache-2.0">
                Apache-2.0 license
              </a>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <style jsx>{
        //language=CSS
        `
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
