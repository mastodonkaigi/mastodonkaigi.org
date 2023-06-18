import Negotiator from 'negotiator'
import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

const DEFAULT_LANGUAGE = 'en'
const AVAILABLE_LANGUAGES = ['en', 'ja']

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')

  if (!acceptLanguage) {
    return DEFAULT_LANGUAGE
  }

  const negotiator = new Negotiator({
    headers: {
      'accept-language': acceptLanguage,
    },
  })
  const language = negotiator.language(AVAILABLE_LANGUAGES)

  return language ?? DEFAULT_LANGUAGE
}

export function GET(request: NextRequest) {
  const locale = getLocale(request)

  redirect(new URL(`/${locale}`, request.url).toString())
}
