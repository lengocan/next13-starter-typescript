'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {  toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    showModalCreate: boolean,
    setShowModelCreate: (showModalCreate:boolean) => void;
}

function CreateModal(props: IProps) {
    const {showModalCreate, setShowModelCreate} = props;

    const [title,setTitle] = useState<string>("")
    const [author,setAuthor] = useState<string>("")
    const [content,setContent] = useState<string>("")

    const handleSubmit = () => {
        if(!title) {
            toast.error("Please input title")
            return;
        }
        if(!author) {
            toast.error("Please input author")
            return;
        }
        if(!content) {
            toast.error("Please input content")
            return;
        }
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,author,content})
        }).then(res => res.json())
        .then(res => {
            if(res) {          
               toast.success("Add new complete~")
               handleCloseModal();
               mutate('http://localhost:8000/blogs')
            }
            
        });
        // 
        
    }
    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModelCreate(false);
    }
  return (
    <>
      <Modal show={showModalCreate} onHide={()=> handleCloseModal()}
      size = 'lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="..." 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="..."
                value={author}
                onChange={(e)=>setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} 
                value={content}
                onChange={(e)=>setContent(e.target.value)}/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;