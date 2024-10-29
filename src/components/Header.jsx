import { Button, Typography, Input } from "@material-tailwind/react";

function Header() {

  return (
    <>
      <header className="p-8 bg-gradient-to-t from-gray-900 from-10% via-gray-800 via-50% to-gray-900 to-90%">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto my-auto px-4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Get ready to experience a new level of{" "}
              <span className="text-purple-600 leading-snug ">performance</span>{" "}
              and{" "}
              <span className="leading-snug text-blue-700">functionality</span>.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-white lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
