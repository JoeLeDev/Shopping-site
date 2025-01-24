import Img1 from "../../assets/Women/Img-1.jpg";
import Img2 from "../../assets/Women/Img-2.jpg";
import Img3 from "../../assets/Women/Img-3.jpg";
import Img4 from "../../assets/Women/Img-4.jpg";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: `Robe Éternelle`,
    description: `Une robe de mariée élégante et intemporelle, parfaite pour sublimer votre grand jour.
     Son design raffiné en dentelle et sa coupe fluide garantissent un look majestueux.`,
  },
  {
    id: 2,
    img: Img2,
    title: "Élégance Pure",
    description: `Cette robe en dentelle ornée de délicates franges allie modernité et grâce.
     Idéale pour une cérémonie chic, elle offre une silhouette sobre et sophistiquée.`,
  },
  {
    id: 3,
    img: Img3,
    title: "Glamour Féérique",
    description: `Une robe de soirée unique avec des détails scintillants et une coupe asymétrique.
     Sa teinte prune et ses volants ajoutent une touche de magie à chaque mouvement.`,
  },
  {
    id: 4,
    img: Img4,
    title: "Ébène Majestueuse",
    description: `Cette robe noire longue est le summum de l'élégance. 
    Avec son décolleté en cœur et sa fente audacieuse, elle incarne le charme et la sophistication.`,
  },
];
const Women = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-8">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-primary">
            Best sellers
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400 py-5">
           
            Voici une selection de nos robes les plus populaires.
          </p>
        </div>
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
             gap-20 md:gap-5 md:py-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="group rounded-2xl bg-white dark:bg-gray-800
                hover:bg-black/80 dark:hover:bg-primary hover:text-white 
                shadow-xl duration-300 mb-[20px] overflow-hidden transform transition-all
                group-hover:scale-110 relative "
                     
            >
              {/* image section */}
              <div className="h-sm">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full block mx-auto dropshadow-md "
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p
                  className="text-gray-500 my-5 group-hover:text-white duration-300
                     text-sm "
                >
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white
                     py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                 
                >
                  Voir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
