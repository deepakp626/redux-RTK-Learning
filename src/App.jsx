import './App.css'
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from "./services/post"

function App() {
  const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(5)
  // const responseInfo = useGetPostByLimitQuery(2)
  // const [deletePost,responseInfo] = useDeletePostMutation()
  // const [createPost, responseInfo] = useCreatePostMutation()

  // const [updatePost, responseInfo] = useUpdatePostMutation()
  // console.log(updatePost)x
  console.log(responseInfo)

  console.log(responseInfo)
  console.log("data", responseInfo.data)
  console.log("Success", responseInfo.isSuccess)

  const newpost = {
    title: "this is new title",
    body: 'this is new body',
    userId: 1,
  }

  const updatePostData = {
    id: 1,
    title: "this is update post title",
    body: 'this is update post body',
    userId: 1,
  }

  if (responseInfo.isLoading) return <div> Loading ...</div>
  if (responseInfo.isError) return <h2>An  Error pccured : {responseInfo.error.error}</h2>
  return (
    <>
      <h1>Redux toolkit - RTK Query (Get All data)</h1>
      // Get all data
      {
        responseInfo.data.map((post)=>
        <div key={post.id}>
          <h2>{post.id} : {post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
        )
      }

      <h1>Get  limited data</h1>
      {
        responseInfo.data.map((post)=>
        <div key={post.id}>
          <h2>{post.id} : {post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
        )
      }

      <h1>geting single data</h1>
      <div className='App'>
      <h2>{responseInfo.data.id} : {responseInfo.data.title}</h2>
          <p>{responseInfo.data.body}</p>
      </div>

      <h1>Delete Data</h1>
      <button onClick={()=> deletePost(2)}>Delete 2nd post</button>


      <h1>Create Data</h1>
      <button onClick={() => {createPost(newpost)}}>Create post</button>

      <h1>Update Data</h1>
      <button onClick={() => { updatePost(updatePostData) }}>Update post</button>
    </>
  )
}

export default App
