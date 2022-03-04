import Link from 'next/link'
import { ReactElement } from 'react'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'

export default function AboutPage() {
  return (

    <>
      <h1>About Page</h1>


      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{' '}
        <code className={"code"}>pages/index.js</code>
      </p>
    </>

  )
}

AboutPage.getLayout = (page: ReactElement) => <MainLayout><DarkLayout>{page}</DarkLayout></MainLayout>

