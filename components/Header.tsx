import Link from "next/link";

export default function Header(){
    return(
         <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-orange-600">TiffinMate</Link>
          <div className="space-x-6 text-sm font-medium">
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#partners">Partners</Link>
            <Link href="#contact">Contact</Link>
            <Link href='/login'>Login</Link>
          </div>
        </div>
      </nav>
    )
}