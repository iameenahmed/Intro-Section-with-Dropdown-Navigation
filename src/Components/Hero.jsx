import illustrationDesktop from "../assets/image-hero-desktop.png";
import illustrationMobile from "../assets/image-hero-mobile.png";
import databizLogo from "../assets/client-databiz.svg";
import audiophileLogo from "../assets/client-audiophile.svg";
import meetLogo from "../assets/client-meet.svg";
import makerLogo from "../assets/client-maker.svg";

function Hero() {
  return (
    <main>
      <section className="mt-10 md:mx-12 md:mt-[4.5rem] md:flex md:items-end md:gap-8 xl:ml-[10.125rem] xl:mr-[8.125rem] xl:gap-36">
        <picture className="relative order-2 xl:w-[92%]">
          <source media="(min-width: 768px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="illustration" />
        </picture>
        <div className="px-4 py-10 text-center md:p-0 md:text-left ">
          <h1 className="text-3xl font-bold text-AlmostBlack md:text-5xl lg:text-6xl min-[1300px]:text-[5rem]">
            <span className="md:block">Make</span> remote work
          </h1>
          <p className="my-6 text-MediumGray md:my-8 lg:my-12 lg:mr-8 lg:text-[18px] lg:leading-[1.5em] min-[1330px]:mr-24">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="inline-block rounded-xl border border-AlmostBlack bg-AlmostBlack px-9 py-[15px] font-bold text-AlmostWhite hover:bg-AlmostWhite hover:text-AlmostBlack ">
            Learn more
          </button>
          <div className="mt-10 flex items-center justify-between md:mt-16 lg:mt-[6.5rem] lg:justify-normal lg:gap-12">
            <img
              src={databizLogo}
              alt="logo of a client databiz"
              className="w-[23%]"
            />
            <img
              src={audiophileLogo}
              alt="logo of a client audiophile"
              className="w-[15%]"
            />
            <img
              src={meetLogo}
              alt="logo of a client meet"
              className="w-[15%]"
            />
            <img
              src={makerLogo}
              alt="logo of a client maker"
              className="w-[15%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Hero;
