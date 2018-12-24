// https://umijs.org/config/
import pageRoutes from './router.config';
import webpackplugin from './webpack.plugin';
import defaultSettings from '../src/global';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
      },
      hash: true,
      // polyfills: ['ie11'],
      targets: {
        ie: 9,
      },
    },
  ],
];

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 9,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
    SERVER: process.env.SERVER || 'prod',
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `client-${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  manifest: {
    name: '撩一撩',
    background_color: '#FFF',
    description: '撩一撩',
    start_url: '/index.html',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  },

  chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
};
