import Link from "next/link"
import Navbar from "./nav"


export const getStaticProps=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    if(!data){
        return{
            redirect:{
                destination:'/',
                permanent:false,
            }
        }
    }
    return{
        props:{
            data,
        },
        // revalidate:10 --> ISR
    }
}
const users=({data})=>{
    return(
        <>
        <Navbar/>

        {
            data.slice(0,5).map((elem)=>{
                return(
                    <div key={elem.id} style={{backgroundColor:'whitesmoke',color:'black',marginTop:'10px', marginLeft:'155px', padding:'10px', width:'80%'}}>
                        
                        <h3 style={{backgroundColor:'black',color:'whitesmoke', width:'20px', marginLeft:'34rem', padding:'7px',width:'27px'}}>{elem.id}</h3>
                        
                        <Link href={`/${elem.id}`} passHref>
                        <h2 style={{marginLeft:'28rem', cursor:'pointer'}}>{elem.name}</h2>
                        </Link>
                        

                    </div>
                )
            })
        }
        </>
    )
}

export default users
