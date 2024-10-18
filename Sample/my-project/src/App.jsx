import Post from "./Post"

function App() {

  let postOne="Jack Dowsen"
  let postTwo="Bruce Wayne"
  let postThree="will Jacks"


  return (
    <div>
      <h1>React Components!!</h1>
      <Post name={postOne}></Post>
      <Post> name={postTwo}</Post>
      <Post> name={postThree}</Post>
      
    </div>
  )
}

export default App