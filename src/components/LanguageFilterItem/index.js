// Write your code here
const LanguageFilterItem = props => {
  const {item, changeParam} = props
  const sort = () => {
    changeParam(item.id)
  }
  return (
    <li>
      <button onClick={sort}>{item.language}</button>
    </li>
  )
}
export default LanguageFilterItem
