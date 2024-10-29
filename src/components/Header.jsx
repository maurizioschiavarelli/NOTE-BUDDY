import { Button, Typography,} from "@material-tailwind/react";

function Header() {

  return (
    <>
      <header className="p-8 bg-gradient-to-t from-gray-900 from-10% via-gray-800 via-50% to-gray-900 to-90%">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto my-auto px-4 text-center bg-gray-900 rounded-lg shadow-2xl shadow-black bg-opacity-60">
            <Typography
              variant="h1"
              color="white"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl">
              Tutte le note di sviluppo web in un unico posto con 
              <span className="text-purple-600 leading-snug "> noteBuddy</span>
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-white lg:text-lg text-base">
              <span className="text-purple-600 leading-snug">noteBuddy</span> é una web app in cui puoi iniziare a familiarizzare con i tuoi primi linguaggi di sviluppo web
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Button color="gray-900" className="w-full px-4 md:w-[12rem]">
                  Get started
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
