import Header from '~/components/Common/Header'
import Footer from '~/components/Common/Footer'

export default function DefaultLayout({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
