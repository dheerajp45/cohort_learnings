import { useEffect, useState } from 'react'


export function useTodoTitle(){
      const [todo , setTodo] = useState({})
    
      async function getTodos(){
         const   response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json();
        setTodo(json);
      
      }
    
      useEffect(() =>{
        getTodos();
      },[])
      return todo.title
}

export function useFetch(url) {
    const [data , setData] = useState({});
    const [loading,setLoading] = useState(true);

    async function getData(){

        setLoading(true);

        const res = await fetch(url);
        const json = await res.json();
        setData(json) ;
        setLoading(false)
    } 

    useEffect(()=>{
        getData()
    },[url])

    useEffect(()=>{
        const ten_secs = setInterval(getData,10*1000)
       return function(){
        clearInterval(ten_secs)
      console.log("re fetching the data");}
    },[])
    return {data,loading}
}