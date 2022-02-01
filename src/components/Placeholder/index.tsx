interface Props {
  id: string
  w: number
  h: number
  primaryColor?: string
  secondaryColor?: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Placeholder = ({
  id,
  w,
  h,
  primaryColor = '#eaeaea',
  secondaryColor = '#dadada',
  rounded = 'full',
}: Props) => {
  return (
    <div className={`overflow-hidden rounded-${rounded} w-max`}>
      <svg width={w} height={h}>
        <defs>
          <linearGradient id={id}>
            <stop stopColor={primaryColor} offset="20%" />
            <stop stopColor={secondaryColor} offset="50%" />
            <stop stopColor={primaryColor} offset="70%" />
          </linearGradient>
        </defs>
        <rect width={w} height={h} fill={primaryColor} />
        <rect id={`r-${id}`} width={w} height={h} fill={`url(#${id})`} />
        <animate
          xlinkHref={`#r-${id}`}
          attributeName="x"
          from={-w}
          to={w}
          dur="1s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  )
}

export default Placeholder
