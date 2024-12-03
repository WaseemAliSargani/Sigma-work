import Link from "next/link"

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between p-6 bg-blue-500 mb-10">
    <div>
      <Link className="text-white text-lg mx-2" href="/">Home</Link>
      <Link className="text-white text-lg mx-2" href="/about">About</Link>
      <Link className="text-white text-lg mx-2" href="/contact">Contact</Link> 
      <Link  className="text-white text-lg btn2" href="/adminlogin"> Sign in</Link>
    </div>

   </nav>
  )
}

export default Navbar
 