import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import Header from './Header.jsx'

describe('Header', () => {
  it('renders the blog name from the myBlog prop', () => {
    const markup = renderToStaticMarkup(createElement(Header, { myBlog: 'My Blog' }))

    expect(markup).toContain('<h1>My Blog</h1>')
  })
})
