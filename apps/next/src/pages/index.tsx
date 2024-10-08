import { Fragment } from 'react'
import { WelcomeScreen } from '@nx-expo-next-tamagui/pages/welcome'
import { WelcomeLayout } from '@nx-expo-next-tamagui/pages/welcome'
import Head from 'next/head'
import type { NextPageWithLayout } from './_app'

export const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Head>
				<title>Welcome Page</title>
			</Head>
			<WelcomeScreen />
		</Fragment>
	)
}

Page.getLayout = page => <WelcomeLayout>{page}</WelcomeLayout>

export default Page
