import {
  useRouter,
} from 'next/router'
import {
  AnimatePresence,
} from 'framer-motion'

import Header from '~/components/Common/Header'
import Footer from '~/components/Common/Footer'
import Gnb from '~/components/Common/Gnb'

const DefaultLayout = ({children}) => {
  const router = useRouter()

  return (
    <AnimatePresence
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
      exitBeforeEnter
    >
      <div id="wrapper" key={router.pathname}>
        <Header />
        <Gnb />
        {children}
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default DefaultLayout
