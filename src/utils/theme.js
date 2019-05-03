export default {
  getters: {
    getColor: (color, props) => (
      props ? props.theme.colors[color] : ({ theme }) => theme.colors[color]
    ),

    getActiveColor: (color, props) => (
      props ? props.theme.colors.activeColors[color] : ({ theme }) => theme.colors.activeColors[color]
    ),

    getHoverColor: (color, props) => (
      props ? props.theme.colors.hoverColors[color] : ({ theme }) => theme.colors.hoverColors[color]
    )
  },

  colors: {
    background: '#F2F2F2',
    text: '#5a6169',
    icon: '#abb6bf',
    lightGrey: '#e9ecef',
    darkGrey: '#becad6',
    border: '#e1e5eb',
    primary: '#007bff',
    secondary: '#5a6169',
    success: '#17c671',
    danger: '#c4183c',
    warning: '#ffb400',
    info: '#00b8d8',
    dark: '#212529',
    white: '#ffffff',
    royalBlue: '#674eec',
    java: '#1adba2',
    salmon: '#ff4169',
  },
  hoverColors: {
    lightGrey: '#e9ecef',
    primary: '#006fe6',
    secondary: '#4e545b',
    success: '#14af64',
    danger: '#ad1535',
    warning: '#e6a200',
    info: '#00a2bf',
    dark: '#16181b',
    white: '#ffffff',
    royalBlue: '#5337ea',
    java: '#17c491',
    salmon: '#ff2855',
    border: '#b3bdcc',
  },
  activeColors: {
    primary: '#0062cc',
    secondary: '#42484e',
    lightGrey: '#FBFBFB',
    success: '#129857',
    danger: '#97122e',
    warning: '#cc9000',
    info: '#008da5',
    dark: '#0a0c0d',
    white: '#007bff',
    royalBlue: '#3f20e7',
    java: '#15ad80',
    salmon: '#ff0e41',
  },
}