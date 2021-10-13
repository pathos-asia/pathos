import Link from 'next/link'

export default function Appbar() {
  return (
    <>
      <div className="absolute left-0 right-0 inline-flex items-center justify-center mx-auto group bottom-4">
        <button className="fixed w-8 h-8 text-2xl text-center rounded-full bg-coolGray-900 text-coolGray-100 group-hover:rotate-45">+</button>
        <div className="absolute top-0 bottom-0 hidden w-screen h-screen transition duration-300 bg-coolGray group-hover:block">
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              home
            </a>
            </Link>
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              about
            </a>
            </Link>
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              features
            </a>
            </Link>
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              makers
            </a>
            </Link>
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              subscribe
            </a>
            </Link>
          <Link href="/">
            <a className="block w-full text-center h-1/6 bg-coolGray-900 text-coolGray-100 hover:bg-coolGray-800">
              contact
            </a>
            </Link>
        </div>
      </div>

    </>
  )
}
