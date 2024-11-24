"use client"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Link from 'next/link';
import useSWR, {Fetcher} from 'swr'

export default function ViewDetailBlog({params} : {params: {id:string}}) {
    console.log("check props", params)

    const fetcher: Fetcher<IBlog,string> = (url:string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    })
  

    return (
        
        <div>
            <Container>
                <div>
                    <Link href= '/blogs'> Go back</Link>
                </div>
                <Card className="text-center my-3">
                <Card.Header>{data?.title}</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    {data?.content}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-muted">{data?.author}</Card.Footer>
                </Card>
            </Container>
        </div>
    )
}