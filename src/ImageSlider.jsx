import Slider from "./Slider";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://envato-shoebox-0.imgix.net/af04/f67a-d638-4df3-bbe8-0410dd4e456c/479-mk-0479-c.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=b0ddba7c67fdc858777660a0c6ee27bd",
      title: "beach",
    },
    {
      url: "https://envato-shoebox-0.imgix.net/twenty20/production/uploads/items/6e5b9697-75e4-41fb-90d6-6ae99f2e4d1c/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=6cccc582fac740c606237084700ae678",
      title: "boat",
    },
    {
      url: "https://elements-cover-images-0.imgix.net/e8cd4804-cf2d-4607-be50-da93c847dc4b?auto=compress%2Cformat&fit=max&w=1370&s=5c76dcf86c5baf3ed528673a1fd881b9",
      title: "forest",
    },
    {
      url: "https://elements-cover-images-0.imgix.net/bc99dc64-2496-4ea0-955a-bea0b9820878?auto=compress%2Cformat&fit=max&w=1370&s=007784d7e40f479811c4438ea269f298",
      title: "city",
    },
    {
      url: "./CYBERPUNK.png",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "97%",
    height: "100%",
    margin: "0 auto",
  };
  return (
    <div className="w-[95%] h-[50%]">
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default ImageSlider;
