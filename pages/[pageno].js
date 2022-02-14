import Navbar from "./nav"
 
export const getStaticPaths=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((elem)=>{
        return{
            params:{
                pageno:elem.id.toString(),
            },
        }
    })
    return{
        paths,
        fallback:false ,    
    }
}

export const getStaticProps=async(context)=>{
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return{
        props:{
            data,
        },
    }
}

// .....................Server Side Rendering............................
// export const getServerSideProps=async(context)=>{
//     const id = context.params.pageno;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const data = await res.json()

//     return{
//         props:{
//             data,
//         },
//     }
// }
 const data = ({data}) => {
  return (
    <>
        <Navbar/>
        <div key={data.id} style={{backgroundColor:'black', color:'whitesmoke', width:'70%', marginLeft:'16rem', marginTop:'5rem'}}>
                        
            <h3 style={{backgroundColor:'white', color:"black", marginLeft:'32rem', width:'20px', paddingLeft:'4px', position:'relative', top:'6px'}}>{data.id}</h3>
            <hr /> 
            <h1 style={{marginLeft:'26rem'}}>{data.name}</h1>
                        
            <h2 style={{marginLeft:'23rem', padding:'27px'}}>{data.email}</h2>

            <h3 style={{marginLeft:'32rem'}}>{data.username }</h3>

        </div>
    </>
  )
}
export default data