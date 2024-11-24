
export const metadata = {
    title: 'View detail',
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
  