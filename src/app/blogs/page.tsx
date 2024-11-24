"use client"
import Table from "@/components/table"
import useSWR from 'swr'

export default function Blogs() {
    const fetcher = (url:string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    })
  
  
    if(isLoading) {
      return(
        <div>Loading...</div>
      )
    }
    return(
        <div>Blogs page
        <div>{data?.length}</div>
         <Table blogs={data?.sort((a:any, b:any) => b.id - a.id)}/>
        </div>
    )
}