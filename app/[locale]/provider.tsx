'use client'

import { type ReactNode } from 'react'
import { IntlProvider } from 'react-intl'

type Props = {
  children: ReactNode
  locale: string
  messages: Record<string, string>
}

export default function Provider({ children, locale, messages }: Props) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
