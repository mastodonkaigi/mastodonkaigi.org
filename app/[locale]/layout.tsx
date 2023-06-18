import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import Provider from './provider'

export const metadata: Metadata = {
  title: {
    default: 'MastodonKaigi',
    template: '%s - MastodonKaigi',
  },
}

type Params = {
  locale: string
}

type Props = {
  children: ReactNode
  params: Params
}

export default async function GlobalLayout({ children, params }: Props) {
  const { default: messages } = await import(
    `@/locales/${params.locale}`
  ).catch(() => import('@/locales/en'))

  return (
    <html lang={params.locale}>
      <body>
        <Provider locale={params.locale} messages={messages}>
          {children}

          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
