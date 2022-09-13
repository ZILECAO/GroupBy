import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section class="text-white bg-gray-900">
      
      {/* Top Navigation Element */}
      <header class="bg-white">
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
                <svg
                  class="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              <nav class="hidden md:block" aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                <ul class="flex items-center text-sm gap-6">
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>

              <div class="flex items-center gap-4">
                <div class="sm:gap-4 sm:flex">
                  <a
                    class="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                    href="/"
                  >
                    Login
                  </a>

                  <div class="hidden sm:flex">
                    <a
                      class="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                      href="/"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div class="block md:hidden">
                  <button
                    class="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Main Body Element */}
      <div class="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Zile Cao's
    
            <span class="sm:block">
              Portfolio Website
            </span>
          </h1>
    
          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Connect your crypto wallet and claim a free NFT!
          </p>
    
          <div class="flex flex-wrap justify-center mt-8 gap-4">
            <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
              Get Started
            </a>
    
            <a class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Footer Element */}
      <footer class="text-center bg-white">
      <div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="flex justify-center gap-6">
            <a
              class="text-blue-500 hover:text-blue-500/75"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
            </a>

            <a
              class="text-gray-900 hover:text-gray-900/75"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              class="text-pink-600 hover:text-pink-600/75"
              href="/dribbble"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <nav class="p-6 border-4 border-gray-900 rounded-3xl">
            <ul class="flex flex-wrap justify-center text-sm font-bold gap-6">
              <li>
                <a
                  class="text-gray-900 transition hover:text-gray-900/75"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>

              <li>
                <a
                  class="text-gray-900 transition hover:text-gray-900/75"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uses
                </a>
              </li>

              <li>
                <a
                  class="text-gray-900 transition hover:text-gray-900/75"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  class="text-gray-900 transition hover:text-gray-900/75"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>

          <p class="max-w-lg mx-auto text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, natus
            tempore illo laborum nam, modi quam sequi amet quo quasi impedit iure
            eum similique pariatur alias exercitationem, porro perspiciatis esse.
            Corporis odit consequatur sint sequi.

            <span class="block mt-4"> &copy; 2022 Saul Goodman </span>
          </p>
        </div>
      </div>
    </footer>

    </section>  

    
  )
}
