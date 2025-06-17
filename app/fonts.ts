
import localFont from 'next/font/local'

  src: '../public/fonts/PPNeueMontrealMono-Regular.woff2',
  weight: '400',
})

  src: '../public/fonts/PPNeueMontreal-Medium.woff2',
  weight: '500',
})

export const departureMono = localFont({
  src: '../public/fonts/DepartureMono-Regular.woff2',
  weight: '400',
  variable: '--font-departure-mono',
})


export const ppNeueMontrealMedium = localFont({
  src: '../public/fonts/PPNeueMontreal-Medium.woff2',
  weight: '500',
  variable: '--font-ppneue-medium',
})


export const ppNeueMontrealRegular = localFont({
  src: '../public/fonts/PPNeueMontreal-Regular.woff2',
  weight: '400',
  variable: '--font-ppneue-regular',
})
