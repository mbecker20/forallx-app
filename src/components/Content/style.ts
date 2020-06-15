import {createUseStyles} from 'react-jss'
import { colors } from '../../theme'

const useJSS = createUseStyles({
  Content: {
    backgroundColor: colors.background,
    width: '90%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'justify',
    textJustify: 'inter-word',
    flexDirection: 'column',
    fontSize: 'calc(15px + 1vmin)',
    color: colors.text,
    overflowX: 'hidden',
    position: 'absolute',
    top: '0%'
  },
})

export default useJSS;