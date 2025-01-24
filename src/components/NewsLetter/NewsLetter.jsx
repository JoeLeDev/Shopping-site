import Banner from "../../assets/General/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const NewsLetter = () => {
  return (
    <div
      data-aos="zoom-in"
      className="lg:my-20 xs:my-2 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 lg:max-w-2xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Être averti à propos des nouveautés
          </h1>
          <input
            
            type="email"
            placeholder="Entrez votre adresse email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
