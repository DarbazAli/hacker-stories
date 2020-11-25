const { default: List } = require('./List')

const title = 'React'

const App = () => {
  return (
    <div>
      <h1>Hello {title}</h1>
      <br />

      <List />
    </div>
  )
}

export default App
