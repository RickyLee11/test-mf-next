import dynamic from 'next/dynamic';
 
const HomeMy = dynamic(() => import('../components/bootstrap.js'), {
  loading: () => <p>Loading...</p>,
})
 

export default function Home() {
    return (
    <>
        <HomeMy />
    </>
    )
}