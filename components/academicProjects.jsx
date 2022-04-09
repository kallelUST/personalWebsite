/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Fintech Project",
    href: "#",
    category: { name: "Academic", href: "#" },
    description:
      "the project consists on developing a marketplace for NFTs trading.",
    technologies: "NextJS, NodeJS, Tailwind and Solidity",
    date: "May 01, 2022",
    datetime: "2022-04-01",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
   
  },
  {
    title: "Dinner Planner",
    href: "#",
    category: { name: "FYP", href: "#" },
    description:
      "Develop a web application that schedules daily meals and the groceries for the user.",
    technologies: "Vue JS, Express JS, Tailwind and Adobe XD",
    date: "June 01, 2022",
    datetime: "2022-06-01",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    
  },
  {
    title: "Operation research Project",
    href: "#",
    category: { name: "Academic", href: "#" },
    description:
      "To locate vaccinations stations and allocate the number of doctors to these station while restricted by constraints (Budget, demand group, supply of manpower…) ",
    technologies: "Python,and libraries such as: numpy, pandas , matplotlib and Gurobi",
    date: "Dec 01, 2020",
    datetime: "2020-12-01",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
   
  },

  {
    title: "Financial engineering Project",
    href: "#",
    category: { name: "Academic", href: "#" },
    description:
      "To assess the viability of financial models during pandemic periods",
    technologies: "Python,and libraries such as: numpy, pandas and matplotlib. \n The focus was on the black scholes model",
    date: "Dec 01, 2020",
    datetime: "2020-12-01",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    
  },

  {
    title: "Prodigy's website ",
    href: "#",
    category: { name: "Academic", href: "#" },
    description:
      "It is the company's website",
    technologies: "Adobe XD and Vue JS",
    date: "June 01, 2021",
    datetime: "2021-06-01",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    
  },

  {
    title: "Machine learning Project",
    href: "#",
    category: { name: "Academic", href: "#" },
    description:
      "Daily trading of stocks using machine learning predictions with python",
    technologies: "Python,and libraries such as:Skcit-learn, numpy, pandas and matplotlib",
    date: "Apr 01, 2020",
    datetime: "2020-0-01",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    
  },
];

export default function Example() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            In this section, you can browse through all projects that I have
            done so far (academic and personal)
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.category.name}
                  </p>

                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>

                  <div className="block mt-8">
                    <p className="text-xl font-semibold text-gray-900">
                      Technologies
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.technologies}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                 
                  <div className="">
                    <p className="text-sm font-medium text-gray-900">
                      Release date
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
