export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3efa65fa8f523b16808371',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r371igwf',
                  apiId: 'e927ea60-01a3-4021-a1ab-282ef71255e7'
                },
                {
                  buildHookId: '5f3efa6505af3b41f5e676ee',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2nwhc8dg',
                  apiId: '22693f6f-ccc6-472d-acc7-266ad493204e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctorresthrash/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2nwhc8dg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
