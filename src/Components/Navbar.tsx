import Link from "next/link"

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text">AF</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link href="/about" >About</Link>
        <Link href="/projects" >Projects</Link>
      </nav>
    </header>
  )
}

export default Navbar
