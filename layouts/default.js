export default function DefaultLayout({children}) {
  return (
    <>
      <header>Header</header>
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  )
}
