import type { ConfigProviderThemeVars } from 'vant'
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

console.log('fullConfig', fullConfig.theme)

export const themeVars: ConfigProviderThemeVars = {
  primaryColor: fullConfig.theme.accentColor.primary,
  sliderActiveBackground: fullConfig.theme.accentColor.primary,
  sliderBarHeight: '4px',
  radioCheckedIconColor: fullConfig.theme.accentColor.primary
}
