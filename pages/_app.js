import "tailwindcss/tailwind.css"
import Navbar from "./navbar"

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-gradient-to-r from-yellow-500 to-red-600 h-screen'>
			<Navbar />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
