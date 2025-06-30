export default {
  editor: {
    label: {
      en: 'Scroll Area',
      fr: 'Zone de défilement'
    },
    icon: 'scroll',
    bubble: {
      icon: 'scroll'
    }
  },
  triggerEvents: [
    { name: 'scroll', label: { en: 'On scroll', fr: 'Lors du défilement' } },
    { name: 'scrollTop', label: { en: 'On scroll top', fr: 'Lors du défilement en haut' } },
    { name: 'scrollBottom', label: { en: 'On scroll bottom', fr: 'Lors du défilement en bas' } },
    { name: 'scrollEnd', label: { en: 'On scroll end', fr: 'Lors de la fin du défilement' } }
  ],
  properties: {
    // Dimensions
    height: {
      label: { en: 'Height', fr: 'Hauteur' },
      type: 'Text',
      defaultValue: '200px',
      bindable: true,
      section: 'dimensions'
    },
    maxHeight: {
      label: { en: 'Max height', fr: 'Hauteur maximale' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      section: 'dimensions'
    },
    width: {
      label: { en: 'Width', fr: 'Largeur' },
      type: 'Text',
      defaultValue: '100%',
      bindable: true,
      section: 'dimensions'
    },
    maxWidth: {
      label: { en: 'Max width', fr: 'Largeur maximale' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      section: 'dimensions'
    },
    
    // Scroll direction
    vertical: {
      label: { en: 'Vertical scroll', fr: 'Défilement vertical' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'behavior'
    },
    horizontal: {
      label: { en: 'Horizontal scroll', fr: 'Défilement horizontal' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'behavior'
    },
    
    // Scrollbar appearance
    hideScrollbar: {
      label: { en: 'Hide native scrollbar', fr: 'Masquer la barre de défilement native' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'scrollbar'
    },
    
    // Visual indicators
    showIndicators: {
      label: { en: 'Show scroll indicators', fr: 'Afficher les indicateurs de défilement' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'indicators'
    },
    showFadeTop: {
      label: { en: 'Show fade top', fr: 'Afficher le fondu en haut' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'indicators'
    },
    showFadeBottom: {
      label: { en: 'Show fade bottom', fr: 'Afficher le fondu en bas' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'indicators'
    },
    
    // Style classes
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style'
    },
    viewportClass: {
      label: { en: 'Viewport CSS class', fr: 'Classe CSS de la zone d\'affichage' },
      type: 'Text',
      section: 'style'
    },
    contentClass: {
      label: { en: 'Content CSS class', fr: 'Classe CSS du contenu' },
      type: 'Text',
      section: 'style'
    },
    scrollbarClass: {
      label: { en: 'Scrollbar CSS class', fr: 'Classe CSS de la barre de défilement' },
      type: 'Text',
      section: 'style'
    },
    thumbClass: {
      label: { en: 'Thumb CSS class', fr: 'Classe CSS du curseur' },
      type: 'Text',
      section: 'style'
    }
  },
  
  defaultContent: {
    height: '200px',
    maxHeight: '',
    width: '100%',
    maxWidth: '',
    vertical: true,
    horizontal: false,
    hideScrollbar: true,
    showIndicators: false,
    showFadeTop: false,
    showFadeBottom: false,
    customClass: '',
    viewportClass: '',
    contentClass: '',
    scrollbarClass: '',
    thumbClass: ''
  },
  
  settingsOptions: {
    autoByContent: true
  },
  
  actions: [
    {
      label: { en: 'Scroll to top', fr: 'Défiler vers le haut' },
      action: 'scrollToTop'
    },
    {
      label: { en: 'Scroll to bottom', fr: 'Défiler vers le bas' },
      action: 'scrollToBottom'
    },
    {
      label: { en: 'Scroll to position', fr: 'Défiler vers une position' },
      action: 'scrollTo'
    }
  ]
} 