import {createUseStyles} from 'react-jss'
import { colors } from '../../theme'

const useJSS = createUseStyles({
  Content: {
    backgroundColor: colors.background,
    width: '90%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    fontSize: 'calc(12px + 1vmin)',
    color: colors.text,
    //position: 'absolute',
    overflowX: 'hidden',
    //overflowY: 'visible',
    position: 'absolute',
    top: '0%'
  },
})

export default useJSS;