import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Top } from '../'

import { store, history } from 'modules'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Top />
      </ConnectedRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
