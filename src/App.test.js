import React from 'react'
import renderer from 'react-test-renderer'

import App from './App.js'
import List from './components/List.js'

describe('Item', () => {
  const item = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
  ]

  it('renders all properties', () => {
    const component = renderer.create(<List list={item} />)

    // test for component url
    expect(component.root.findByType('a').props.href).toEqual(
      'https://reactjs.org'
    )

    // test for component author
    expect(component.root.findAllByType('span')[0].props.children).toEqual(
      '"Author: " <strong>Jordan Walke</strong>'
    )
  })
})
