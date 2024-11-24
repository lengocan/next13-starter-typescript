import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/page.module.css';
import appStype from '@/app/styles/app.module.css';
import hoidanitStype from '@/app/styles/hoidanit.module.css';
import { useEffect } from 'react';
import useSWR from 'swr'
import Table from '@/components/table';
import { Metadata } from 'next';
export default  function Home() {

 

  return (
    <div>
      
      <ul>
        <li className={appStype['red']}><Link href="/facebook">Facebook</Link></li>
        <li className={hoidanitStype['red']}><Link href="/youtube">Youtube</Link></li>
        <li><Link href="/tiktok">Tiktok</Link></li>
      </ul>
     
    </div>
  )
}
export const metadata: Metadata = {
  title: 'Home page',
  description: 'des hello',
}