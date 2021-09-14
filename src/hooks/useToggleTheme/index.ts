import { replaceStyleVariables } from 'vite-plugin-theme/es/client'

export const useToggleTheme = (color = '#007acc') => {
  const toggleTheme = async() => {
    await replaceStyleVariables({
      colorVariables: [color],
    })
  }

  return {
    toggleTheme,
  }
}
