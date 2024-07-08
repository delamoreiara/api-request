import './App.css'
import RoutesPage from '../Route/routes';

export interface Post {
  id: number;
  title: string;
}

function Request() {
return(
<>
  <header>
    <nav>
      <ul>
        <li>
          <a href={'/'}>All Posts</a>
        </li>
        <li>
          <a href={'/get-id-post/'}>Selected ID</a>
        </li>
        <li>
          <a href={'/update-data/'}>Update ID</a>
        </li>
        <li>
          <a href={'/post-data/'}>New Post</a>
        </li>
        <li>
          <a href={'/delete-post/'}>Delete Post</a>
        </li>
      </ul>
    </nav>
  </header>
<body>
<div>
    <RoutesPage/>
  </div>
</body>
</>
)
}
export default Request