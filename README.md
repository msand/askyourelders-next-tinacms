<p align="center">
  <a style="padding-right: 16px;" href="https://tinacms.org">
    <img src="src/public/static/logos/Logo_Ellipse.svg" width="55" height="38">
  </a>
  <a href="https://www.nextjs.org/">
    <img src="src/public/static/logos/next-js.svg" width="55" height="36">
  </a>
</p>
<h1 align="center">
  #AskYourElders
</h1>

> Note: 03.13.20 — A lot of updates were recently made that change some fundamental Tina + Next.js configuration. Specifically the new [Media Store](https://github.com/msand/askyourelders-next-tinacms/commit/207db822a942532c8288f121b2b2cf6fa13ce919), fixing the [router config](https://github.com/msand/askyourelders-next-tinacms/commit/73c1e41f1e947b20ad71cc2ea368854c13f50182), altering how [sidebar options](https://github.com/msand/askyourelders-next-tinacms/commit/2b5dfb5493d98162bec7817bf177f92ce568e973) are passed in, and implemented the next-tinacms helper packages to [create forms](https://github.com/msand/askyourelders-next-tinacms/commit/eb4c1703500444c444b8d16d6255103a93feaf52) on all pages. Everything in the source code should be up to date in line with latest from Tina 🦙.

## About

[![Netlify Status](https://api.netlify.com/api/v1/badges/314f6fb1-b4a6-484a-ad3d-c26663a63bca/deploy-status)](https://app.netlify.com/sites/askyourelders/deploys)

Ask Your Elders is an initiative aiming to connect the people who have lived a full life with the young generations. It is a way to connect with our loved ones that we might not be able to visit during the quarantine time and a way to do something meaningful. 

This blog is statically generated by Next.js, a rendered combination of react components and markdown / json files. It is preconfigured to work with TinaCMS as a way to manage your content. Tina makes changes by editing markdown or json files, uploading media to the correct directory and committing these updates to your repo directly.

The styles were coded & designed by yours truly, using [styled-jsx](https://github.com/zeit/styled-jsx) (which is inherently supported by [Next.js](https://nextjs.org/docs#built-in-css-support)). The font used is [Work Sans](https://fonts.google.com/specimen/Work+Sans). 

The structure of this blog with TinaCMS is based on the documentation, since Next.js is such a flexible framework, there's lots of ways you could approach using Tina with it. Checkout the [documentation](https://tinacms.org/docs/nextjs/overview) for some insight on how this site was setup with Tina + Next.

##  Quick Setup

#### *Set-up Locally*
In your terminal, navigate to where you would like this blog to live, then run 
```bash
#clone the repo
git clone git@github.com:msand/askyourelders-next-tinacms.git

#navigate to the directory
cd askyourelders-next-tinacms

#install dependencies & run dev server with yarn 
yarn install
yarn develop

#or with npm 
npm install
npm run develop
```
This will start a dev server, navigate to localhost:3000. **Note** that the script `dev` doesn't start the git server which you need running to use Tina locally. Use `develop` whenever trying to make edits with Tina. 

## Project Structure 

- Site-level configuration is stored in `data/config.json`. This is editable by Tina when you are on the home page.
- Edit styles within each component or page file within the `<style jsx>` tags. 
- Global styles live in the `Meta` component. 
- `src/posts/`contains all your markdown blog posts.
- `src/static/` is where you images live and will get uploaded.
- `src/pages` is where you page components live. 
- The blog pages are dynamically generated with a `slug` parameter. See the template in `src/pages/blog/[slug].js`. 
- The pages & template are comprised of components from `src/components`.
- The routes are generated in `next.config.js` with `exportPathMap`

## Using Tina as your CMS 🦙

[Tina](https://tinacms.org) is an open-source site editing toolkit for React-based frameworks — Gatsby & Next.js. It's a lightweight but powerful toolkit for creating a content editing interface with JavaScript components. Tina allows you to create an intuitive UI for real-time content editing, built directly into your site. To learn more about using Tina with this starter, head over to the [Tina docs](https://tinacms.org/docs/getting-started/introduction). To get started editing with Tina, get the project up and running locally, open up the UI and navigate around to see what you can edit!

## Deploy Options

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/msand/askyourelders-next-tinacms)

[Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) is a great way to easily deploy sites. 
