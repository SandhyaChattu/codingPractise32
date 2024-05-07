import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {list: [], param: languageFiltersData[0].id}

  changeParam = id => {
    this.setState({param: id},async () => {
    const {param} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${param}`
    const response = await fetch(url)
    const dbResponse = await response.json()
    console.log(dbResponse)

    this.setState({list: dbResponse})
  }
  )
  
  }
  render() {
    const {list, param} = this.state
    return (
      <div>
        <h1>Popular</h1>
        <div className="list-container">
          <ul>
            {languageFiltersData.map(eachItem => (
              <LanguageFilterItem
                key={eachItem.id}
                item={eachItem}
                changeParam={this.changeParam}
              />
            ))}
          </ul>
        </div>
        <ul>
          {
            list.map(eachItem => (
            <RepositoryItem key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
