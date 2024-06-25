import { themeVars } from './../src/theme/index';
import type { Preview } from '@storybook/vue3'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { createApp } from 'vue'
import App from '../src/App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { ConfigProvider } from 'vant'
import '../src/style.css'
import 'vant/lib/index.css';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

library.add(fas, far, fab)
dom.watch()

app.use(pinia)
app.use(ConfigProvider)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

const preview: Preview = {
  decorators: [
    (Story) => ({
      components: { ConfigProvider },
      data() {
        return {
          themeVars: themeVars
        }
      },
      template: `
        <ConfigProvider :themeVars="themeVars">
          <story />
        </ConfigProvider>
      `,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
