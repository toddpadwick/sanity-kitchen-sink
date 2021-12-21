export default {
  widgets: [
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
                  buildHookId: '61c1faaeb6d7c8214d337964',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yfwr11vi',
                  apiId: '85162584-59ae-44de-914b-24468f5a512b'
                },
                {
                  buildHookId: '61c1faaf09216825e7c476f8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kbh6c1mj',
                  apiId: '016bb2dd-e969-4eb0-977a-fbbbb46313d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toddpadwick/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kbh6c1mj.netlify.app', category: 'apps'}
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
