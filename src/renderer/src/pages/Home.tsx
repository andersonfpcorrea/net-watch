import { Link } from 'react-router-dom'

export function Home(): JSX.Element {
  return (
    <div>
      <h1> This is the Home page</h1>
      <ul>
        <li>
          <Link to="/config">Config Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard Page</Link>
        </li>
      </ul>
    </div>
  )
}
