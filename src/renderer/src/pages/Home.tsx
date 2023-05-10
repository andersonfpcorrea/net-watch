import { Link } from 'react-router-dom'

export function Home(): JSX.Element {
  return (
    <div>
      <h1> This is the Home page</h1>
      <Link to="/config">Config Page</Link>
    </div>
  )
}
