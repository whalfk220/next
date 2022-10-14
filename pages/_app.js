import '~/styles/common/common.css'

import DefaultLayout from '~/layouts/default'

const MyApp = ({ Component, pageProps }) => (
  <DefaultLayout>
    <Component
      {...pageProps}
    />
  </DefaultLayout>
)

export default MyApp
