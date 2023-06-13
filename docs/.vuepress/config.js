import { defineUserConfig, defaultTheme } from 'vuepress';
import { tocPlugin } from '@vuepress/plugin-toc';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

import path from 'node:path';


export default defineUserConfig({
  lang: 'en-US',
  title: 'handler.djs',
  description: 'handler.djs documention',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: '/styles/index.css' }],
    ['link', { rel: 'icon', href: 'https://media.discordapp.net/attachments/942512293277757472/1109594448356200538/D.png?width=180&height=180' }]
  ],
  theme: defaultTheme({
    'logo': 'https://media.discordapp.net/attachments/942512293277757472/1109594448356200538/D.png?width=180&height=180',
    colorModeSwitch: true,
    colorMode: 'auto',
    repo: 'https://github.com/ziad-gg/handler.djs',
    docsRepo: 'https://github.com/ziad-gg/djs-docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    sidebarDepth: 1,
    backToHome: "OOOps this Page is not found do you know what are you doing",
    sidebar: {
      '/': [
     
        {
          text: 'Guide',
          children: ['/guide/Introduction.md', '/guide/README.md'],
        },
        {
          text: "CLASS",
          children: [
            '/guide/Application.md', 
            '/guide/CommandBuilder.md', 
            '/guide/EventsBuilder.md', 
            '/guide/Validation.md'
          ],
          collapsible: false,
          activeMatch: true
        },
        {
          text: "Manager",
          children: [
            '/guide/BaseManager.md',
            '/guide/MessageManager.md',
            '/guide/InteractionManager.md',
          ]
        }
      ]
    },
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'Api',
        link: 'https://discord.com/developers/docs/intro',
      },
      {
        text: 'Support',
        link: '/',
        children: [
          {
            text: 'discord',
            link: 'https://discord.com'
          }
        ]
      },
    ],
  }),
  
  plugins: [
    tocPlugin({
      componentName: "All",
    }),
    prismjsPlugin({
      preloadLanguages: ['markdown', 'jsdoc', 'yaml', 'tsdocs', 'ts']
    }),
    shikiPlugin({
      theme: 'dark-plus',
      langs: ['js', 'ts', 'bash', 'cmd']
    }),
    nprogressPlugin(),
    registerComponentsPlugin({
      components: {
        StartButton: path.join(__dirname, '/components/StartButton.vue')
      }
    }),
  ],

  
})