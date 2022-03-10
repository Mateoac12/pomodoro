import { Link } from 'wouter'

const Logo = () => {
  return (
    <Link to="/">
      <a className="text-xl px-2 py-2 flex-1 lg:text-4xl block font-semibold text-white lg:px-8 lg:py-8">
        Tomatito
      </a>
    </Link>
  )
}

export default Logo
