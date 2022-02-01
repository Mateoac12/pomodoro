import { Link } from 'wouter'

const Logo = () => {
  return (
    <Link to="/">
      <a className="text-4xl block font-semibold text-white px-8 py-8 bg-gradient-to-r from-rose-400 to-orange-300">
        Tomatito
      </a>
    </Link>
  )
}

export default Logo
