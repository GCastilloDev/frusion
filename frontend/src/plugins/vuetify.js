import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FFE200',
        secondary: '#D91A2A',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#41B523',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
});
