/* This example requires Tailwind CSS v2.0+ */
import {
  DesktopComputerIcon,
  CurrencyDollarIcon,
  DatabaseIcon,
  ServerIcon,
  ChipIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Front-end",
    icon: DesktopComputerIcon,
    description:
      "I can develop the frontend of web applications by using frameworks such as React Js, Next JS, Vue JS and Typescript",
  },
  {
    name: "Back-end",
    icon: ServerIcon,
    description:
      "I can develop the backend of your app using the Node JS framework: Express JS",
  },
  {
    name: "Database",
    icon: DatabaseIcon,
    description:
      "I can manage your data using SQL and NoSQL databases such as MySQL or MongoDB ",
  },
  {
    name: "Data Science",
    icon: ChipIcon,
    description:
      "I can develop machine learning algorithm using python library Scikit-Learn ",
  },
  {
    name: "Portfolio Optimization",
    icon: TrendingUpIcon,
    description:
      "I have a solid foundation in portfolio management and its application with python libraries such as numpy, pandas, seaborn, matplotlib and cvxpy ",
  },
  {
    name: "Quantitative Finance ",
    icon: CurrencyDollarIcon,
    description:
      "I have a solid knowledge about derivative product and its prcing methods",
  },
];

export default function Example() {
  return (
    <div className="relative bg-white w-screen h-screen py-16 sm:py-24 lg:py-32" id="skills">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          My skills
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to know about me
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Below, you can find a summary about my computing and quantitative
          skills that can be relevant to you
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
