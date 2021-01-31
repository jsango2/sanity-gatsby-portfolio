export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60165b05970bcfb3b44a24ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1ci5gavw',
                  apiId: '2f01836e-3a5a-4268-b28f-d813433046b1'
                },
                {
                  buildHookId: '60165b05cb006f8c3b89b50e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fif3qs9c',
                  apiId: 'ac1c4ff5-cdfd-4f61-9625-efea7b8822cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jsango2/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fif3qs9c.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
