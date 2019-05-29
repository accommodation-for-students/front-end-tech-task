import React from 'react'

const icons = {
  'map-pin': 'M9.237 1.293C8.29.463 6.953 0 5.5 0 4.047 0 2.71.463 1.763 1.293.603 2.298 0 3.83 0 5.713c0 4.1 4.815 8.888 5.027 9.096.13.126.293.19.473.19s.343-.064.473-.19C6.185 14.6 11 9.813 11 5.712c0-1.883-.604-3.415-1.763-4.42zM5.5 8.09c-1.47 0-2.66-1.18-2.66-2.633 0-1.452 1.19-2.633 2.66-2.633 1.47 0 2.66 1.18 2.66 2.633S6.97 8.09 5.5 8.09z',
}

const Icon = ({
  className,
  width,
  height,
  fill,
  viewBox,
  ...props
}) => (
  <svg
    className={className || undefined}
    width={width || undefined}
    height={height || undefined}
    viewBox={viewBox || undefined}
  >
    <path d={icons['map-pin']} fill={fill || undefined} {...props} />
  </svg>
)

export default Icon
