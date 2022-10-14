import {
  useEffect,
  useState,
} from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import '~/styles/common/common.css'

import DefaultLayout from '~/layouts/default'
import Loading from '~/components/Common/Loading'

const MyApp = ({ Component, pageProps }) => {
  const [
    isLoading,
    setIsLoading,
  ] = useState(false)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    })

    const startLoading = () => {
      NProgress.start()
      // setIsLoading(true)
    }
    const endLoading = () => {
      NProgress.done()
      setIsLoading(false)
    }

    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', endLoading)
    Router.events.on('routeChangeError', endLoading)

    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', endLoading)
      Router.events.off('routeChangeError', endLoading)
    }
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <DefaultLayout>
      <Component
        {...pageProps}
      />
    </DefaultLayout>
  )
}

export default MyApp
