"use client"
import AppTable from 'react-bootstrap/Table'
import {Button} from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import {  toast } from 'react-toastify';
import { mutate } from 'swr';

interface Iprops {
    blogs: IBlog[]
}

export default function Table (props: Iprops) {
    const {blogs} = props;
    
    const [blog, setBlog] =useState<IBlog|null>(null)

    const [showModalCreate,setShowModalCreate] = useState<boolean>(false)
    const[showModalUpdate, setShowModalUpdate] =useState<boolean>(false)
    const handleDelete = (id:any) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
           
            }).then(res => res.json())
            .then(res => {
                if(res) {          
                   toast.success("Update complete~")
                   
                   mutate('http://localhost:8000/blogs')
                }
                
            });
    }
    return(
        <div>
            <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}
            >
                <h3>Table blogs</h3>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add new</Button>
            </div>
            <AppTable striped bordered hover>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {blogs?.map(item=> {
                        return(
                            <tr key = {item.id} >
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                <Button variant="primary" onClick={ () => {
                                    setBlog(item);
                                    setShowModalUpdate(true);
                                }}>Edit
                                
                                </Button>
                                
                                
                                    <Link href = {`/blogs/${item.id}`} className='btn btn-primary mx-3'>View</Link>
                                 
                                <Button variant="danger" onClick ={() => handleDelete(item.id)}>Delete</Button>
                                </td>
                            </tr>    
                        )
                    })}
                
                
                </tbody>
            </AppTable>
            <CreateModal showModalCreate= {showModalCreate}
            setShowModelCreate= {setShowModalCreate}/>
            <UpdateModal showModalUpdate= {showModalUpdate}
            setShowModalUpdate= {setShowModalUpdate}
            blog ={blog}
            setBlog={setBlog}/>
        </div>
      
    )
}