"use client" // phai khai bao tag client component de su dung hook, event, thay doi du lieu lien tuc
import { useRouter } from "next/navigation"
import Button from 'react-bootstrap/Button';

export default function Facebook() {
    const router = useRouter()
    return(
        <div> Facebook page
            <div>
                <Button variant="success">Hoi dan IT</Button>
                <button onClick= {() => router.push('/')} >back home</button>
            </div>
        </div>
    )
}