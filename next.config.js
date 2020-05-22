const glob = require('glob')

module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  exportPathMap: async function() {
    const routes = {
      '/about': { page: '/about' },
      '/add': { page: '/add' },
      '/events': { page: '/events' },
      '/': { page: '/' },
      '/thank-you': { page: '/thank-you' },
    }
    // get all .{md, json} files in the posts dir
    const blogs = glob.sync('src/posts/**/*.md')

    const posts = glob.sync('src/posts/**/*.json')

    // remove path and extension to leave filename only
    const blogSlugs = blogs.map(file =>
      file
        .split('/')[2]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim()
    )

    const postSlugs = posts.map(file =>
      file
        .split('/')[2]
        .replace(/ /g, '-')
        .slice(0, -5)
        .trim()
    )

    // add each blog and post to the routes obj
    blogSlugs.forEach(blog => {
      routes[`/blog/${blog}`] = { page: '/blog/[slug]', query: { slug: blog } }
    })

    postSlugs.forEach(post => {
      routes[`/post/${post}`] = { page: '/post/[slug]', query: { slug: post } }
    })

    return routes
  },
}
