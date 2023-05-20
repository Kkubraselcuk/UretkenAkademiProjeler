import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Home = ()=>{
    const [data,setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    
    const getData = async()=>{
        let result = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(result.data);
        setIsloading(false)
    }
    
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
            {isLoading ? (
                <span> Loading... </span>
            ) : (
                <ul>
                    {data.map((person)=>(
                        <li key={person.id}>{person.username} : {person.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default Home;