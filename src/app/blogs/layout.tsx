

export const metadata = {
  title: 'Blogs list',
  description: 'Blog ne',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
   {children}
   </> 
  )
}
