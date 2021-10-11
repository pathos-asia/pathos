import Layout from '@/components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>pathos, craft your hybrid journaling experience</title>
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <h1 className="text-6xl font-bold">
            pathos, a truly customizable hybrid journaling experience
          </h1>

          <p className="mt-3 text-2xl">
            letting physical and
          </p>
        </main>
      </Layout>
    </>
  )
}
