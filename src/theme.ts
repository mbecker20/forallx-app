const grey = '#282c34' // grey
const secondary = '#281c34' //purple
const tertiary = '#182c54' // blue

interface Colors {
  [index: string]: string
}

export const colors: Colors = {
  grey: grey,
  background: '#ffe6bf',
  sbBackground: '#ffe6bf',
  text: 'black',
  selectedText: '#007ab3',
  secondary: secondary,
  tertiary: tertiary,
}

interface Sizes {
  [index: string]: string
}

export const sizes: Sizes = {
  topbarHeight: '80px',
  sidebarWidth: '280px',
  chapterViewerWidth: '270px',
}

