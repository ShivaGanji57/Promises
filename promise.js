const posts=[{title:'POST1'}]
const user={
    userPosts:posts,
    userActivityTime:new Date().getTime()
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:post})
            resolve(posts)
        },1000)
    })
}
function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userActivityTime=new Date().getTime()
            resolve(userActivityTime)
        },2000)
    })
}
Promise.all([createPost('POST2'),updateLastActivityTime()]).then(val=>console.log(val))
Promise.all([createPost('POST3'),updateLastActivityTime()]).then(val=>console.log(val))