// Write your code here
const RepositoryItem = props => {
  const {item} = props
  
  return (
    <li className="list-container">
      <img src={item.avatar_url} className="avatar" />
      <p>{item.stars_count}</p>
      <p>{item.forks_count}</p>
      <p>{item.issues_count}</p>
    </li>
  )
}
export default RepositoryItem
