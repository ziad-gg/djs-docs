import { defineUserConfig, defaultTheme } from 'vuepress';
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
    ['link', { rel: 'icon', href: 'https://styles.redditmedia.com/t5_3eu72/styles/communityIcon_mkcebxqhkfs41.png' }]
  ],
  theme: defaultTheme({
    'logo': 'https://styles.redditmedia.com/t5_3eu72/styles/communityIcon_mkcebxqhkfs41.png',
    colorModeSwitch: true,
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
    registerComponentsPlugin({
      components: {
        StartButton: path.join(__dirname, '/components/StartButton.vue')
      }
    }),
  ],

  
})