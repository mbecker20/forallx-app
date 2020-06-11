import { createUseStyles } from 'react-jss'
import { colors, sizes } from '../theme'

const useJSS = createUseStyles({
  TopBar: {
    backgroundColor: colors.grey,
    width: '100vw',
    height: sizes.topbarHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(20px + 2vmin)',
    color: 'white',
    position: 'absolute',
    top: '0px',
    left: '0px',
    userSelect: 'none',
    zIndex: '100'
  },

  SideBar: {
    backgroundColor: colors.background,
    borderStyle: 'none solid',
    borderColor: 'black',
    height: `calc(100vh - ${sizes.topbarHeight})`,
    width: sizes.sidebarWidth,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0px',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    textOrientation: 'upright',
    position: 'absolute',
    top: '80px',
    left: '0px',
    userSelect: 'none',
    zIndex: '99',
    boxSizing: 'borderBox',
  },
  
  Router: {
    backgroundColor: colors.tertiary,
    height: `calc(100vh - ${sizes.topbarHeight})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'absolute',
    top: sizes.topbarHeight,
    overflow: 'hidden',
  },
})

export default useJSS;