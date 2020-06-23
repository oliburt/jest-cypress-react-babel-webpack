import React from 'react'
import PropTypes from 'prop-types'
import { render as rtl } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { dark } from '../src/themes'

function render(ui, { theme = dark, ...options } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtl(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { render }
