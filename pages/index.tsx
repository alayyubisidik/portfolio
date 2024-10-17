import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const redirectUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

          <nav className="flex items-center justify-between mb-40 ">
            <Image src="/image/navbar-logo.png" width={75} height={75} alt="Logo" />
            <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
          </nav>

          <div className="text-center ">
            <div className="flex justify-center mb-16 overflow-hidden  ">
              <Image src="/image/hero-2.jpg" width={240} height={240} className="rounded-full" alt="Image" priority />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Al Ayyubi Sidik</h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Junior Backend Developer</h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software. I enjoy creating tools that make life easier for people.</p>

          </div>

        </div>

      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">Knowledge Seeker</h4>

              <p className="font-normal text-gray-500 text-md">A person who is always eager to learn new things. They are open to acquiring new skills, technologies, or knowledge to continuously improve themselves and their expertise.</p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
                </svg>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">Resilient</h4>

              <p className="font-normal text-gray-500 text-md">Someone who is mentally strong and capable of bouncing back from failures or challenges. They don’t get discouraged easily and always try again, even when facing obstacles.</p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Image width={35} height={35} src="/image/brain.png" alt="Logo" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">Open-Minded</h4>

              <p className="font-normal text-gray-500 text-md">A person who doesn’t quickly judge or reject new ideas. They are willing to listen to perspectives from others and consider different viewpoints when making decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-2">My Skills</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-7">The skills I have acquired</p>

          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Programming Languages</h1>

            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={45} height={45} onClick={() => redirectUrl("https://www.google.com/search?q=golang")} src="/image/tech-stack/go.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[5rem] md:w-auto" alt="" />
              <Image width={40} height={40}  onClick={() => redirectUrl("https://www.google.com/search?q=js")} src="/image/tech-stack/js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer  md:h-[3rem]  md:w-auto" alt="" />
              <Image width={56} height={56} onClick={() => redirectUrl("https://www.google.com/search?q=typescript")} src="/image/tech-stack/typescript.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer  md:h-[3rem] md:w-auto" alt="" />
              <Image width={64} height={64} onClick={() => redirectUrl("https://www.google.com/search?q=php")} src="/image/tech-stack/php.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[5rem] md:w-auto" alt="" />

            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Backend Development</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=golang")} src="/image/tech-stack/go.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[5rem] md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=node+js")} src="/image/tech-stack/nodejs.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
              <Image width={100} height={45} onClick={() => redirectUrl("https://www.google.com/search?q=express+js")} src="/image/tech-stack/express-js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer h-[3rem] md:h-[4rem] md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=laravel")} src="/image/tech-stack/laravel.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem]  md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=rabbit+mq")} src="/image/tech-stack/rabbitmq.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem]  md:w-auto" alt="" />
            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Frontend Development</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=html")} src="/image/tech-stack/html.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3.5rem] md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=css")} src="/image/tech-stack/css.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3.7rem] md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=tailwind")} src="/image/tech-stack/tailwind.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
              <Image width={42} height={42} onClick={() => redirectUrl("https://www.google.com/search?q=js")} src="/image/tech-stack/js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
              <Image width={60} height={60} onClick={() => redirectUrl("https://www.google.com/search?q=typescript")} src="/image/tech-stack/typescript.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem]  md:w-auto" alt="" />
              <Image width={70} height={50} onClick={() => redirectUrl("https://www.google.com/search?q=next+js")} src="/image/tech-stack/next-js.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Database</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=postgre")} src="/image/tech-stack/postgre.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3.5rem] md:w-auto" alt="" />
              <Image width={70} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mysql")} src="/image/tech-stack/mysql.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[5rem] md:w-auto" alt="" />
              <Image width={52} height={52} onClick={() => redirectUrl("https://www.google.com/search?q=mong+db")} src="/image/tech-stack/mongo-db.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Devops</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=docker")} src="/image/tech-stack/docker.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=kubernetes")} src="/image/tech-stack/kubernetes.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
              <Image width={70} height={62} onClick={() => redirectUrl("https://www.google.com/search?q=aws")} src="/image/tech-stack/aws.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Tools</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=git")} src="/image/tech-stack/git.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointe  md:h-[3.5rem] md:w-auto" alt="" />
              <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=postman")} src="/image/tech-stack/postman.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointe  md:h-[3.5rem] md:w-auto" alt="" />
            </div>
          </div>
          <div className="mb-[1rem]">
            <h1 className="font-medium text-gray-700 text-xl md:text-xl mb-2">Games</h1>
            <div className="flex flex-wrap  gap-[1rem] my-[.5rem] px-[1rem] py-[.5rem] items-center bg-gray-200">
              <Image width={72} height={62} onClick={() => redirectUrl("https://www.google.com/search?q=free+fire")} src="/image/tech-stack/ml.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
              <Image width={72} height={62} onClick={() => redirectUrl("https://www.google.com/search?q=mobile+legends")} src="/image/tech-stack/ff.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[4rem] md:w-auto" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-2">Portfolio</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-7">Below is a summary of the places I studied</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-1.png" alt="" className="h-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=golang")} src="/image/tech-stack/go.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto " alt="" />
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=postgre")} src="/image/tech-stack/postgre.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem]  md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=docker")} src="/image/tech-stack/docker.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=kubernetes")} src="/image/tech-stack/kubernetes.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=rabbit+mq")} src="/image/tech-stack/rabbitmq.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=next+js")} src="/image/tech-stack/next-js.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">Zen Computer Microservice</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This online store web application uses a microservice architecture for scalability, handling products, carts, orders, checkout, authentication, and authorization.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/zen-computer-microservices")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-1.png" alt="" className="h-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=golang")} src="/image/tech-stack/go.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mysql")} src="/image/tech-stack/mysql.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=next+js")} src="/image/tech-stack/next-js.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=typescript")} src="/image/tech-stack/typescript.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
                <Image width={24} height={24} onClick={() => redirectUrl("https://www.google.com/search?q=tailwind")} src="/image/tech-stack/tailwind.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[1.5rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">Zen Computer Monolith</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This online store web application uses a monolith architecture, consisting of a single server and client, integrating products, carts, orders, checkout, authentication and authorization.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/zen-computer-monolith")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-3.jpg" alt="" className="h-[100%] w-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=node+js")} src="/image/tech-stack/nodejs.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mongo+db")} src="/image/tech-stack/mongo-db.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=docker")} src="/image/tech-stack/docker.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=kubernetes")} src="/image/tech-stack/kubernetes.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={40} height={40} onClick={() => redirectUrl("https://www.google.com/search?q=nats")} src="/image/tech-stack/nats.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2.5rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=next+js")} src="/image/tech-stack/next-js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">Blog App Microservice</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This blog application uses a microservice architecture with separate services for users, posts, comments, notifications, authentication, and authorization, ensuring scalability and flexibility.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/blog-app-microservice")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-4.png" alt="" className="h-[100%] w-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=laravel")} src="/image/tech-stack/laravel.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mysql")} src="/image/tech-stack/mysql.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=bootstrap")} src="/image/tech-stack/bootstrap.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=js")} src="/image/tech-stack/js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">LetSell Project</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This marketplace website enables users to register as customers or sellers, facilitating product listings, order management, payments, and customer support interactions.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/letsell-project")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-5.png" alt="" className="h-[100%] w-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
              <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=laravel")} src="/image/tech-stack/laravel.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mysql")} src="/image/tech-stack/mysql.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=bootstrap")} src="/image/tech-stack/bootstrap.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=js")} src="/image/tech-stack/js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">Digital Library</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This online library website allows users to browse, borrow, and reserve books, manage their accounts, and access digital resources seamlessly.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/digital-library")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-[100%] h-[11rem] ">
                <Image width={357} height={176} src="/image/portfolio/portfolio-6.png" alt="" className="h-[100%] w-[100%]" />
              </div>

              <div className="flex flex-wrap gap-[.5rem] p-[.2rem] my-[.5rem] justify-center items-center bg-gray-200">
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=node+js")} src="/image/tech-stack/nodejs.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=mysql")} src="/image/tech-stack/mysql.png" className=" hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={48} height={48} onClick={() => redirectUrl("https://www.google.com/search?q=bootstrap")} src="/image/tech-stack/bootstrap.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[3rem] md:w-auto" alt="" />
                <Image width={32} height={32} onClick={() => redirectUrl("https://www.google.com/search?q=js")} src="/image/tech-stack/js.png" className="hover:shadow-md hover:shadow-gray-500 hover:scale-105 cursor-pointer md:h-[2rem] md:w-auto" alt="" />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mt-[1rem] mb-[.2rem]">Geek Themes</h4>

              <p className="font-normal text-gray-500 text-md mb-4">This website offers a wide range of templates and themes for various platforms, enabling users to easily browse, purchase, and download designs for their projects.</p>

              <div className="relative">
                <h6 onClick={() => redirectUrl("https://github.com/alayyubisidik/geek-themes")} className="cursor-pointer font-semibold text-gray-500 text-md relative z-10 hover:text-blue-600">See on Github</h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0 "></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="flex flex-col gap-[3rem]">
            <div className=" mb-[2rem]">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-2">Education</h1>
              <p className="font-normal text-gray-500 text-xs md:text-base">Below is a summary of the places I studied</p>
            </div>

            <div className="flex  items-start gap-[1.5rem]  ">
              <Image width={112} height={112} onClick={() => redirectUrl("https://www.google.com/search?q=smpn+6+cibitung")} src="/image/education/smp-6.jpg" className=" hover:shadow-md cursor-pointer md:h-[10rem] md:w-auto" alt="" />
              <div className="w-[75%]">
                <h1 className="font-normal text-gray-700 text-2xl md:text-3xl mb-3 md:mb-5">Junior High School 6 Cibitung</h1>
                <p className="font-normal text-gray-500 text-sm md:text-base">Exploring various disciplines and extracurricular activities to gain a strong academic foundation in multiple subjects.</p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5rem]  ">
              <Image width={112} height={112} onClick={() => redirectUrl("https://www.google.com/search?q=smkn+3+metro")} src="/image/education/smk-3.jpg" className="hover:shadow-md cursor-pointer  md:h-[10rem] md:w-auto" alt="" />
              <div className="w-[75%]">
                <h1 className="font-normal text-gray-700  text-2xl md:text-3xl mb-3 md:mb-5">Vocational High School 3 Metro - Software Engineering</h1>
                <p className="font-normal text-gray-500 text-sm md:text-base">Exploring various skills programs that align with interests and talents, building a project portfolio that showcases skills and creativity, and gaining hands-on experience through industry internship programs.</p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5rem]  ">
              <Image width={112} height={112} onClick={() => redirectUrl("https://www.google.com/search?q=universitas+dharmawacana")} src="/image/education/dw.png" className="hover:shadow-md cursor-pointer  md:h-[10rem] md:w-auto" alt="" />
              <div className="w-[75%]">
                <h1 className="font-normal text-gray-700  text-2xl md:text-3xl mb-5">Dharmawacana University - Informatics Engineering</h1>
                <p className="font-normal text-gray-500 text-sm md:text-base">Academic and professional development by enhancing knowledge and skills for future careers, focusing on research and innovation through involvement in projects that drive development, and engaging in student organizations to develop leadership and interpersonal skills.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="mb-0 md:mb-[2rem]">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-2">Experience</h1>
            <p className="font-normal text-gray-500 text-xs md:text-base">Competition experience and achievements</p>
          </div>

          <div id="default-carousel" className="relative w-[80%] mx-auto" data-carousel="slide">
            <div className="relative h-[25rem] overflow-hidden rounded-lg md:h-[30rem] ">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/image/experience/lks-prov-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/image/experience/lks-prov-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/image/experience/lks-prov-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/image/experience/lks-prov-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <h1 className="font-medium text-gray-700 text-xl md:text-2xl  text-center mt-[1rem] md:mt-[3rem] mb-[1rem]">LKS Provinsi Lampung - First Place Winner</h1>

          <div id="default-carousel" className="relative w-[80%] mx-auto" data-carousel="slide">
            <div className="relative h-[25rem] overflow-hidden rounded-lg md:h-[30rem] ">
              <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="/image/experience/lksn-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="/image/experience/lksn-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="/image/experience/lksn-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="/image/experience/lksn-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <h1 className="font-medium text-gray-700 text-xl md:text-2xl  text-center mt-[1rem] mb-[2rem]">LKS Nasional Surabaya - Finalis</h1>


        </div>

      </section>

      <footer className="py-7 md:py-10 mb-20 md:mb-25 lg::mb-35">

        <div className="container max-w-screen-xl mx-auto px-4">

          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-2xl md:text-3xl mb-[5rem]">Connect with Me on Social Media</h1>

            <div className="flex gap-[7rem] justify-center items-center ">
                <svg onClick={() => redirectUrl("https://www.linkedin.com/in/al-ayyubi-sidik-553633322/")} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#6b7280" className="hover:shadow-md hover:shadow-gray-600 cursor-pointer bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <svg onClick={() => redirectUrl("https://github.com/alayyubisidik")} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#6b7280" className="bi bi-github cursor-pointer hover:shadow-md hover:shadow-gray-600" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              
                <svg onClick={() => redirectUrl("https://www.instagram.com/al_ayyubi.29/")} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#6b7280" className="bi bi-instagram cursor-pointer hover:shadow-md hover:shadow-gray-600" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
            </div>
          </div>

        </div>

      </footer>

    </>
  );
}
