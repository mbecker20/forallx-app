const grey = '#282c34' // grey
const secondary = '#281c34' //purple
const tertiary = '#182c54' // blue

export interface Colors {
  [index: string]: string
}

export const colors: Colors = {
  grey: grey,
  background: 'white',
  text: 'black',
  secondary: secondary,
  tertiary: tertiary,
}

export interface Sizes {
  [index: string]: string
}

export const sizes: Sizes = {
  topbarHeight: '80px',
  sidebarWidth: '280px',
  chapterViewerWidth: '270px',
}

