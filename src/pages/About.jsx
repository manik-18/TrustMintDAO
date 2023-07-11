import React from "react";
import Card from "../components/Card";
import Iframe from "react-iframe";
import Vite from "../asset/Vite.svg";
import ReactImg from "../asset/react.svg";
import TailwindImg from "../asset/tailwindcss.svg";

function About() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb=8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            About Us
          </h1>
          <p className="text-center my-[80px] text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-38 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            perferendis iure tempora molestias blanditiis consectetur sapiente
            eius. Doloremque magnam libero facere alias voluptas molestias, nam
            nemo expedita asperiores molestiae reprehenderit ab nostrum
            voluptate officia quod? Deleniti libero dignissimos facilis.
          </p>
          <div>
            <Iframe
              width="992"
              height="558"
              src="https://www.youtube.com/embed/nuORLKIt8Ls"
              title="GFG Hackathon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="mt-[150px] mb-[100px] text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Team Behind Trust Mint
          </h1>
          <Card />
          <h1 className="mt-[150px] mb-[100px] text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Integrated Technologies
          </h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center m-3">
              <img
                src={Vite}
                alt="Image Description"
                className="w-32 h-32"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Vite</p>
            </div>
            <div className="flex flex-col items-center m-3">
              <img
                src={ReactImg}
                alt="Image Description"
                className="w-32 h-32"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">React Js</p>
            </div>
            <div className="flex flex-col items-center m-3">
              <img
                src={TailwindImg}
                alt="Image Description"
                className="w-32 h-32"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <footer class="bg-white dark:bg-gray-900 bottom-0">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com/" class="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8 mr-3"
                    alt="FlowBite Logo"
                  />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Trust Mint
                  </span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://flowbite.com/" class="hover:underline">
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        class="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="" class="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="" class="hover:underline">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="" class="hover:underline">
                  Trust Mint
                </a>
                . Built During Ur Hackathon.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
