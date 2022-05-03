import React from 'react'
import CreatePost from '../components/CreatePost/CreatePost'
import Post from '../components/Post/Post'

export default function Home() {
  return (
    <div>
        <CreatePost/>
        {Array(10).fill(0).map((v,i) => <Post data={{
          id: i + 1,
          name: "user" + v + "" + (i + 1),
          time: new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? 0 + "" + new Date().getMinutes(): new Date().getMinutes())
        }} key={i}/>)}
    </div>
  )
}
