import Link from 'next/link'

export default function Gnb() {
  return (
    <nav id="gnb">
      <Link href="/">
        Home
      </Link>
      <Link href="/test">
        API Test
      </Link>
    </nav>
  )
}
