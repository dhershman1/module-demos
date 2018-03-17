import {
  VApp,
  VBtn,
  VCard,
  VDataTable,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VJumbotron,
  VList,
  VNavigationDrawer,
  VSubheader,
  VTabs,
  VTextField,
  VToolbar,
  Vuetify,
  transitions
} from 'vuetify';
import {
  scroll,
  touch
} from 'vuetify-directives';
import Vue from 'vue';

Vue.use(Vuetify, {
  theme: {
    primary: '#9c27b0',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  },
  directives: {
    scroll
  },
  components: {
    VApp,
    VCard,
    VDataTable,
    VDivider,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VJumbotron,
    VGrid,
    VSubheader,
    VTabs,
    VToolbar,
    VTextField,
    transitions
  }
});
