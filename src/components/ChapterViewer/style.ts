import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../../theme'

const useJSS = createUseStyles({
  Bounder: {
    backgroundColor: colors.background,
    color: colors.text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflow: 'hidden',
    width: sizes.chapterViewerWidth,
    height: '90%',
    flexGrow: '3',
    flexShrink: '3',
    flexDirection: 'column',
  },

  CVContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'inherit',
      borderStyle: 'inset',
    },
    width: `calc(${sizes.chapterViewerWidth} - 20px)`,
    height: '50vmin',
    flexGrow: '3',
    flexShrink: '3',
    flexDirection: 'column',
    //margin: '10px',
    padding: '10px',
    borderStyle: 'none',
  },

  CVInnerContainer: {
    //backgroundColor: colors.secondary,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    width: `calc(${sizes.chapterViewerWidth} - 20px)`,
    flexDirection: 'column',
    marginLeft: '10px'
  },

  CVHeader: {
    //backgroundColor: colors.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
    position: 'relative',
    bottom: '2px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    width: `calc(${sizes.chapterViewerWidth} - 5px)`,
    flexDirection: 'column',
    fontSize: 'calc(20px + 2vmin)',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderStyle: 'none none solid none',
  },

  Chapter: {
    //backgroundColor: (colors: Colors) => colors.primary,
    //flexGrow: '1',
    //flexShrink: '1',
    //flexBasis: '0',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: `calc(${sizes.chapterViewerWidth} - 20px)`,
    //alignItems: 'center',
  },

  ChapterName: {
    //borderColor: 'white',
    //borderStyle: 'solid',
    padding: '5px',
    fontSize: 'calc(10px + 2vmin)',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  SubChapterBounder: {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '0',
    alignItems: 'flex-start',
    position: 'relative',
    left: '20px'
  },

  SubChapter: {
    //backgroundColor: (colors: Colors) => colors.primary,
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(5px + 2vmin)',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export default useJSS;