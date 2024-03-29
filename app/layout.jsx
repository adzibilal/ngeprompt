import '@styles/global.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title: 'Ngeprompt',
    description: 'Temukan & Bagikan Prompts AI'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
