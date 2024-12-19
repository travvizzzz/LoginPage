import React from "react";



const White= () => {
  return (
    <>

      <section className="flex p-7">
        <div className="flex-1 pr-5 p-20 ">
          <p className="text-4xl font-bold">Build anything</p>
          <p className="text-4xl font-bold">Using programming.</p>
          <br />
          <p className="text-sm">
            Computer programming or coding is the composition of sequences of
            instructions, called programs, that computers can follow to perform
            tasks.[1][2] It involves designing and implementing algorithms,
            step-by-step specifications of procedures, by writing code in one or
            more programming languages.
          </p>
          <br />
          <br />

          <p className="text-lg font-semibold">
            History when programming appear
          </p>
          <br />
          <p className="text-sm">
            Programmable Devices have existed for centuries. As early as the 9th
            century, a programmable music sequencer was invented by the Persian
            Banu Musa brothers, who described an automated mechanical flute
            player in the Book of Ingenious Devices.
          </p>
          <br />

          <p className="text-lg font-semibold">About programming Languages</p>
          <br />
          <p className="text-sm">
            Different programming languages support different styles of
            programming (called programming paradigms). The choice of language
            used is subject to many considerations, such as company policy,
            suitability to task, availability of third-party packages, or
            individual preference.
          </p>
          <br />

          <div class="flex flex-col items-right">
            <div class="flex  space-x-2 mb-2">
              <button className="flex border-2 border-gray-600 rounded-lg px-12 py-2 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
                <p className="font-bold text-gray-500">App</p>
              </button>

              <button className=" flex border-2 border-gray-600 rounded-lg px-11 py-2 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
                <p className="font-bold text-gray-500">Project</p>
              </button>
            </div>

            <div class="flex space-x-2">
              <button class="flex border-2 border-gray-600 rounded-lg px-12 py-2 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <p className="font-bold text-gray-500">Data</p>
              </button>
              <button class=" flex border-2 border-gray-600 rounded-lg px-12 py-2 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                  />
                </svg>
                <p className="font-bold text-gray-500">
                  Link<span className="ml-2"></span>
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-end p-3 rounded-lg">
          <img
            src="image/program1.jpg"
            alt="A depiction of computer programming"
            className="mb-2 w-96 h-60 object-cover"
          />
          <img
            src="image/program4.jpg"
            alt="Historical programming devices"
            className="mb-2 w-96 h-60 object-cover"
          />
          <img
            src="image/program2.jpg"
            alt="Variety of programming languages"
            className="mb-2 w-96 h-60 object-cover"
          />
        </div>
      </section>

      <section className="flex bg-teal-50 p-4 ">
        <div className="w-1/2 font-bold text-3xl pr-7 m-4 ml-16">
          About Developing Guys who create technology
          <br />
          <br />
          <p className="font-semibold text-lg">Front-End</p>
          <p className="text-sm">
            A front-end developer builds the front-end portion of websites and
            web applications—the part users see and interact with. A front-end
            developer creates websites and applications using web languages.
          </p>
          <br />
          <p className="font-semibold text-lg">Back-End</p>
          <p className="text-sm">
            Back-end developers ensure the website performs correctly, focusing
            on databases, back-end logic, application programming interface
            (APIs), architecture, and servers.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-ed w-100 h-100 rounded-lg ">
          <img
            src="image/coding1.jpg"
            alt="A depiction of computer programming"
            className="ml-48 w-80 h-80 m-5 object-cover border-4 border-x-teal-200 border-y-teal-200 rounded-sm"
          />
        </div>
      </section>
      <section className="">
        <section className="flex justify-center ">
          <div className="flex flex-row m-5 p-2  items-center space-x-5">
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition ">
              <img width={100} height={50} src="image/border11.jpg"></img>
              <p>Join a Community</p>
            </p>
            <p className="border-2  font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={50} height={20} src="image/border12.jpg"></img>
              Developer Forums
            </p>
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={90} height={50} src="image/border3.jpg"></img>
              Development Slack
            </p>
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={85} height={50} src="image/border14.jpg"></img>
              @ShopifyDevs on IG
            </p>
          </div>
        </section>
        <section className="flex justify-center ">
          <div className="flex flex-row m-5 p-2  items-center space-x-5">
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition ">
              <img width={70} height={50} src="image/border15.jpg"></img>
              <p>Developer Change</p>
            </p>
            <p className="border-2  font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={50} height={50} src="image/border16.jpg"></img>
              YouTube Channels
            </p>
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={100} height={50} src="image/border17.jpg"></img>
              @Telegram Channel
            </p>
            <p className="border-2 font-semibold border-gray-300 rounded-lg px-6 py-12 bg-white text-gray-700 hover:bg-gray-300 hover:text-white transition">
              <img width={100} height={20} src="image/border18.jpg"></img>
              Facebook Live Vlogs
            </p>
          </div>
        </section>
      </section>

      <section className="flex justify-center space-x-16 bg-stone-100 p-14">
        <div>
          <p className="font-semibold text-xs">New and updates</p>
          <br></br>
          <p className="font-light text-zinc-400 text-sm">
            Developer Changelog
          </p>
          <p className="font-light text-zinc-400 text-sm">programming status</p>
          <p></p>
        </div>
        <div>
          <p className="font-semibold text-xs">Blogs</p>
          <br />
          <p className="font-light text-zinc-400 text-sm">Partner Blog</p>
          <p className="font-light text-zinc-400 text-sm">Engineer Blog</p>
          <p className="font-light text-zinc-400 text-sm">UX Blog</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Community</p>
          <br />
          <p className="font-light text-zinc-400 text-sm">Developer forums</p>
          <p className="font-light text-zinc-400 text-sm">Partner Slack</p>
          <p className="font-light text-zinc-400 text-sm">Facebook</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Social</p>
          <br />
          <p className="font-light text-zinc-400 text-sm">Facebook</p>
          <p className="font-light text-zinc-400 text-sm">YouTube</p>
          <p className="font-light text-zinc-400 text-sm">Instagram</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Eventes</p>
          <br />
          <p className="font-light text-zinc-400 text-sm">Unite</p>
          <p className="font-light text-zinc-400 text-sm">Meetups</p>
          <p className="font-light text-zinc-400 text-sm">Partner Town Hall</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Legal</p>
          <br />
          <p className="font-light text-zinc-400 text-sm">Terms of Service</p>
          <p className="font-light text-zinc-400 text-sm">
            Api Terms of Service
          </p>
          <p className="font-light text-zinc-400 text-sm">Privacy Policy</p>
          <p className="font-light text-zinc-400 text-sm">Partner program</p>
        </div>
        <br/>
      </section>

      <section className="flex m-5 text-zinc-400 font-semibold   text-sm  space-x-5 ml-44 ">
        <p>
        About Programming
        </p>
        <p>
        Developing Guys
        </p>
        <p>
          Carrers
        </p>
        <p>
        Investors
        </p>
        <p>
          Press and Media
        </p>
      
      </section>
    </>
  );
};

export default White;
