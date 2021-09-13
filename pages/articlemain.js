import React from "react"
import Head from "next/head"
import Art01 from "./articles/art01"

export default function Article() {
	return (
		<div>
			<Head>
				<title>เล่นสล็อตออนไลน์ เว็บไหนดี - เล่นสล็อต เว็บไหนดี - มีแจกเครดิตฟรี</title>
				<meta
					name='description'
					content='เล่นสล็อต เว็บไหนดี คืออีกหนึ่งคำถามที่มักจะพบบ่อย เนื่องจากนักพนันส่วนใหญ่กำลังมองหา เว็บเล่นสล็อตที่ดีที่สุด โบนัสแตกบ่อยแตกง่าย ต้องเลือกเล่นเกมส์ค่ายไหน PG SLOT'
				/>
			</Head>

			<div>
				<main className='flex items-center p-10 w-full h-full bg-white'>
					<div className='border-t border-b pt-16 grid grid-cols-2 gap-8'>
						<div className='flex flex-col justify-start'>
							<div
								className='flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden'
								style={{ minHeigth: 320 }}>
								<img
									className='w-full h-full object-cover'
									src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
									alt='nike shoes'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='flex flex-col gap-4'>
								<h1 className='capitalize text-4xl font-extrabold'>Nike shoes</h1>
								<h2 className='text-3xl'>$44</h2>
								<p className='text-lg text-gray-500	'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum
									qui quidem? Veniam accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.
								</p>
								<div className='flex items-center gap-4 my-6 cursor-pointer '>
									<div className='bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center'>Add to bag</div>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-red-400' viewBox='0 0 20 20' fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>

			<div className='min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					<div className='max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
						<h3 className='mb-3 text-xl font-bold text-indigo-600'>Beginner Friendly</h3>
						<div className='relative'>
							<img
								className='w-full rounded-xl'
								src='https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
								alt='Colors'
							/>
							<p className='absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>FREE</p>
						</div>
						<h1 className='mt-4 text-gray-800 text-3xl font-bold cursor-pointer'>Javascript Bootcamp for Absolute Beginners</h1>
						<div className='my-4'>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</span>
								<p>1:34:23 Minutes</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
								</span>
								<p>3 Parts</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
									</svg>
								</span>
								<p>Vanilla JS</p>
							</div>
							<button className='mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg'>Buy Lesson</button>
						</div>
					</div>
					<div className='max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
						<h3 className='mb-3 text-xl font-bold text-indigo-600'>Intermediate</h3>
						<div className='relative'>
							<img
								className='w-full rounded-xl'
								src='https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
								alt='Colors'
							/>
							<p className='absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>$12</p>
							<p className='absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg'>%20 Discount</p>
						</div>
						<h1 className='mt-4 text-gray-800 text-3xl font-bold cursor-pointer'>Write a Gatsby plugin using Typescript</h1>
						<div className='my-4'>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</span>
								<p>1:34:23 Minutes</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
								</span>
								<p>3 Parts</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
									</svg>
								</span>
								<p>TypeScript</p>
							</div>
							<button className='mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg'>Start Watching Now</button>
						</div>
					</div>
					<div className='max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
						<h3 className='mb-3 text-xl font-bold text-indigo-600'>Beginner Friendly</h3>
						<div className='relative'>
							<img
								className='w-full rounded-xl'
								src='https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
								alt='Colors'
							/>
							<p className='absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>$50</p>
						</div>
						<h1 className='mt-4 text-gray-800 text-3xl font-bold cursor-pointer'>Advanced React Native for Sustainability</h1>
						<div className='my-4'>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</span>
								<p>1:34:23 Minutes</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
								</span>
								<p>3 Parts</p>
							</div>
							<div className='flex space-x-1 items-center'>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-indigo-600 mb-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
									</svg>
								</span>
								<p>Vanilla JS</p>
							</div>
							<button className='mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg'>Buy Lesson</button>
						</div>
					</div>
				</div>
			</div>

			<Art01 />
		</div>
	)
}
