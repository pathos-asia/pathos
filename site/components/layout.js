import Meta from './atoms/meta'
import Appbar from '@/components/appbar'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>{children}</div>
      <Appbar />
    </>
  )
}
