import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kyle Redding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Kyle</span>
            <span className="block text-red-700 xl:inline">Redding</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a full stack software engineer with a passion for making the world a better place through code.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="https://github.com/reddiky" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-5">
                My Github
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="https://www.linkedin.com/in/kyledredding/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-5">
                My LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
