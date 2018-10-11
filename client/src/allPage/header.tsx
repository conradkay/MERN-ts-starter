import * as React from 'react'
import { getStylesHeader } from '../exports'
import { State } from '../types'
import { AppBar, withStyles, WithStyles, Toolbar, createStyles, Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = () => createStyles({
  root: { flexGrow: 1, marginBottom: 75, fontSize: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  link: { textAlign: 'center', color: 'white', fontSize: 20, textDecoration: 'none', flexGrow: 1, fontWeight: 400 },
  badge: { top: 1, right: -15, fontSize: 16, color: '#76FF03' },
  tooltip: { fontSize: 15 }
})

type Components = 'home' | 'hackermen' | 'becomeAHackerman' | 'hired' | '404'
interface Props extends WithStyles<typeof styles> {
  currentComponent: Components
  money: number
}
/**
 * @usage: Rendered at top of every point in app as a fixed navigation point.
 * @param {Components}  currentComponent The current path/component rendered, used to underline text in header.
 */
class HeaderComp extends React.Component<Props> {
  render() {
    const { classes, currentComponent, money } = this.props
    return (
      <div className={classes.root}>
        <AppBar color="primary">
          <Toolbar>
            <Link
              style={{ ...getStylesHeader(currentComponent === 'home') }}
              className={classes.link} to={'/'}>Home</Link>
            <Link
              style={getStylesHeader(currentComponent === 'hackermen')}
              className={classes.link} to={'/hackermen'}>Hackermen</Link>
            <Link
              style={getStylesHeader(currentComponent === 'hired')}
              className={classes.link}
              to={'/hired'}>Hired Hackermen</Link>
            <Link
              style={getStylesHeader(currentComponent === 'becomeAHackerman')}
              className={classes.link} to={'/apply'}>Become a Hackerman</Link>
            {/* need to use classes to override Tooltip, DO NOT USE CLASSNAME */}
            <Tooltip
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
              title="Your current money, you get $100 at the start and $250 for each hackerman you create."
            >
              <h2 className={classes.link}>${money}</h2>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
const mapStateToProps = (state: State) => ({
  money: state.money
})
export const Header = connect(mapStateToProps)(withStyles(styles)(HeaderComp))
