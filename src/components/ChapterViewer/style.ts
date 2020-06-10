import { createUseStyles } from 'react-jss'
import colors from '../../theme'

const useJSS = createUseStyles({
  Bounder: {
    backgroundColor: colors.grey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflow: 'hidden',
    width: '30vh',
    height: '50vmin',
    flexGrow: '3',
    flexShrink: '3',
    flexDirection: 'column',
  },

  CVContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '220px',
    height: '50vmin',
    flexGrow: '3',
    flexShrink: '3',
    flexDirection: 'column',
    margin: '10px',
  },

  CVInnerContainer: {
    //backgroundColor: colors.secondary,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    width: '30vh',
    flexDirection: 'column',
    marginLeft: '10px'
  },

  CVHeader: {
    //backgroundColor: colors.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    width: '30vh',
    flexDirection: 'column',
    fontSize: 'calc(20px + 2vmin)',
    paddingTop: '5px',
    paddingBottom: '5px',
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
  },

  ChapterName: {
    //borderColor: 'white',
    //borderStyle: 'solid',
    padding: '5px',
    fontSize: 'calc(10px + 2vmin)',
  },

  SubChapter: {
    //backgroundColor: (colors: Colors) => colors.primary,
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //height: '3vmin'
  },
})

export default useJSS;