'use client'

import { FormattedMessage } from 'react-intl'
import styles from './page.module.css'

export default function Home() {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>
        <FormattedMessage id="home.title" />
      </h1>
      <p className={styles.description}>
        <FormattedMessage id="home.welcome" />
      </p>
    </header>
  )
}
