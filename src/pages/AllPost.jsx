import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../component'
import appwriteService from "../appwrite/config"

function AllPost() {
    cont [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if (posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>{
                    <div key={post.$id} className='p-2 w-1/4 '>
                        <PostCard post={post}/>
                    </div>
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPost