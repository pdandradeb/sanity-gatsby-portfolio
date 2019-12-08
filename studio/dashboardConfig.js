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
                  buildHookId: '5ded2238e80676b8310b4781',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t5zrhxw1',
                  apiId: '061ba05f-c6de-4a4b-8f49-430230c3ad3b'
                },
                {
                  buildHookId: '5ded2238fb9d928929764b50',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t3dwym1o',
                  apiId: 'f9653d39-007c-4eff-8dfe-ea1bda54ec02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdandradeb/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t3dwym1o.netlify.com',
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
