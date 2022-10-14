import Link from 'next/link'

const Gnb = () => (
  <nav id="gnb">
    <Link href="/">
      Home
    </Link>
    <Link href="/test">
      API Test
    </Link>
  </nav>
)

export default Gnb
