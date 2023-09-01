console.log('Person 1: shows the ticcket')
console.log('Person 2: shows the ticcket')

const preMovie=async ()=>{
    const wifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ticket')
        },3000)
    })

    const getPopcorn=new Promise((resolve,reject)=>{
        resolve('popcorn')
    })

    const getColdDrink=new Promise((resolve,reject)=>{
        resolve('Cold Drink')
    })
    let getTicket=await wifeBringsTicket;
    console.log("Wife : I have the tickets")
    console.log("Husband : Ok we can go in ")
    console.log("Wife : I am hungry, I need popcorn")

    let popcorn=await getPopcorn;
    console.log(`Husband: Hey dear, I got some ${popcorn}`)
    console.log("Husband : We can go in")
    console.log("Wife : No, I need some coke")
    
    let coldDrink=await getColdDrink;
    console.log(`Husband: Hey dear, I got some ${coldDrink}`)
    console.log("Husband : We can go in")
    console.log("Wife : Yes, Its getting late")

    return getTicket
}

preMovie().then((t)=>console.log(`Person 3 shows the ${t}`))
console.log("Person 4 : shows the ticket")