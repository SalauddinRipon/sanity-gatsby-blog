export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd163742597f6c03d5d64e4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eu4fqc52',
                  apiId: '966227f7-b14b-4e81-9bc4-79f8b1db63df'
                },
                {
                  buildHookId: '5dd163743a645415c828d3f2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iek2ycjr',
                  apiId: '464362ee-0d57-4063-8a6c-3cf3c8896064'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SalauddinRipon/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iek2ycjr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
