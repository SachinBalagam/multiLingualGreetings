import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeGreetingId: languageGreetingsList[0].id}

  onClickButton = event => {
    this.setState({activeGreetingId: event.target.value})
  }

  render() {
    const {activeGreetingId} = this.state
    const filteredGreeting = languageGreetingsList.filter(
      each => each.id === activeGreetingId,
    )

    return (
      <div className="app-container">
        <div className="main-container">
          <h1>Multilingual Greetings</h1>
          <ul className="buttons-container">
            {languageGreetingsList.map(each => {
              const isActive = each.id === activeGreetingId
              const activeTab = isActive ? 'active' : ''
              return (
                <li key={each.id}>
                  <button
                    type="button"
                    className={`each-button ${activeTab}`}
                    onClick={this.onClickButton}
                    value={each.id}
                  >
                    {each.buttonText}
                  </button>
                </li>
              )
            })}
          </ul>
          <div>
            <img
              src={filteredGreeting[0].imageUrl}
              alt={filteredGreeting[0].imageAltText}
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
