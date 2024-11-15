/* eslint-disable react/prop-types */
export default function HeaderDocs({ title, description, icon: Icon }) {

    return (
        <>
        <div className="bg-gradient-to-b from-gray-900 from-10% to-gray-800">
        <div className="mx-auto w-10/12 py-8 sm:px-6 sm:py-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0  mt-16">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              {description}
              </p>
            </div>
            <div className="text-white w-full max-w-full m-auto">
            {Icon && <Icon className="h-full w-full"/>}
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
