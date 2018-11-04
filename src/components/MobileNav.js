import React, { Component } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { array } from 'prop-types'
import { Transition } from 'react-spring'
import styled, { css } from 'react-emotion'
import BeeLogoSVG from './BeeLogoSVG'
import LogoSVG from './LogoSVG'
import { ButtonLink } from './Button'

const FlyOutMenu = styled.div`
  position: fixed;
  background: #f2c33e;
  color: #424242;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 2rem 4rem;
`

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 2rem;
  margin: 0 -2rem 1rem;
`

class MobileNav extends Component {
  static propTypes = {
    navList: array.isRequired,
  }
  state = {
    toggle: false,
  }

  handleToggle = (e) => {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
  }
  render() {
    const { navList } = this.props
    const { toggle } = this.state
    const { handleToggle } = this
    return (
      <nav
        css={{
          padding: 0,
          height: 70,
          backgroundColor: '#fff',
          zIndex: '1000',
          top: 0,
          position: 'fixed',
          borderBottom: 'none',
          width: '100%',
        }}
      >
        <MenuBar css={{ padding: '0 8vw', margin: 0 }}>
          <LogoSVG />
          <FaBars onClick={handleToggle} css={{ fontSize: '1.5rem' }} />
        </MenuBar>
        <Transition
          items={toggle}
          from={{ transform: 'translate3d(100%, 0,0)' }}
          enter={{ transform: 'translate3d(0%,0,0)' }}
          leave={{ transform: 'translate3d(100%,0,0)' }}
        >
          {toggle =>
            toggle &&
            (props => (
              <FlyOutMenu style={props}>
                <MenuBar>
                  <BeeLogoSVG css={{ width: 35, '.st0': { fill: '#000' } }} />
                  <FaTimes onClick={this.handleToggle} css={{ fontSize: '2rem' }} />
                </MenuBar>
                <ul css={{ marginBottom: '5rem' }}>
                  {navList.map(navItem => (
                    <li key={navItem} css={{ padding: '1rem', marginLeft: '-1rem' }}>
                      {
                        <a
                          href={`#${navItem.toLowerCase().replace(/\s/g, '')}`}
                          css={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                          onClick={handleToggle}
                        >
                          {navItem}
                        </a>
                      }
                    </li>
                  ))}
                </ul>
                <ButtonLink secondary>Book Now</ButtonLink>
              </FlyOutMenu>
            ))
          }
        </Transition>
      </nav>
    )
  }
}

export default MobileNav
