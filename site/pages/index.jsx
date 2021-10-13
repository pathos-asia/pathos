import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/layout'

export default function Index() {
  return (
    <>
      <Layout>
      <Head>
        <title>pathos, craft your hybrid journaling experience</title>
      </Head>

      <main className="relative flex flex-col items-center justify-center flex-1 w-full h-screen px-20 text-center bottom-4">
        <Image src="/icon.png" height="128" width="128" />
        <h1 className="my-2 font-bold text-[5.25rem]">
          pathos
        </h1>
        <p className="text-3xl italic">
          while this moment was preordained, your
          <br />
          choices will define your path ahead</p>
        </main>
        </Layout>
    </>
  )
}
