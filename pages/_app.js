import "tailwindcss/tailwind.css"
import Navbar from "./navbar"

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-gradient-to-r from-yellow-500 to-red-600 h-screen'>
			<Navbar />
			<Component {...pageProps} />
			<footer className='flex items-center justify-center w-full bottom-1'>
				<a className='flex items-center justify-center' href='/' target='_blank' rel='noopener noreferrer'>
					Powered by <img src='/img/logo1.png' alt='pg slot' width={100} height={100} />
				</a>
			</footer>
		</div>
	)
}

export default MyApp
