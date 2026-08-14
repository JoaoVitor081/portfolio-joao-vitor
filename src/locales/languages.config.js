export const languagesConfig = [
    { code: 'pt', label: 'PT-BR', nativeName: 'Português', active: true },
    { code: 'en', label: 'EN', nativeName: 'English', active: true },
    { code: 'fr', label: 'FR', nativeName: 'Français', active: false },
    { code: 'es', label: 'ES', nativeName: 'Español', active: false },
  ]
  
  export const activeLanguages = languagesConfig.filter((lang) => lang.active)
  export const comingSoonLanguages = languagesConfig.filter((lang) => !lang.active)