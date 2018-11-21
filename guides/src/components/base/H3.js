import * as React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash.kebabcase'

import HeaderLink from './HeaderLink'

const H3 = ({ children }) => (
  <h3
    id={kebabCase(children)}
    className="flex w-100 relative overflow-visible items-center hide-child f4 dark-gray"
  >
    <HeaderLink text={children} />
    <span>{children}</span>
  </h3>
)

H3.propTypes = {
  children: PropTypes.node.isRequired
}

export default H3
