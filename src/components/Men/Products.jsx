import Product1 from "../../assets/Products/Product-1.jpg";
import Product2 from "../../assets/Products/Product 2.jpg";
import Product3 from "../../assets/Products/Product 3.jpg";
import Product4 from "../../assets/Products/Product 4.jpg";
import Product5 from "../../assets/Products/Product 5.jpg";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Product1,
      title: "Èbène Royale",
      price: 100,
      color: "Noir",
      aosDelay: 100,
    },
    {
      id: 2,
      img: Product2,
      title: "Océan Profond",
      price: 100,
      color: "Bleu",
      aosDelay: 300,
    },
    {
      id: 3,
      img: Product3,
      title: "Brume Élégante",
      price: 100,
      color: "Gris",
      aosDelay: 500,
    },
    {
      id: 4,
      img: Product4,
      title: "Ombre Luxe",
      price: 100,
      color: "Noir",
      aosDelay: 700,
    },
    {
      id: 5,
      img: Product5,
      title: "Beige Prestige",
      price: 170,
      color: "Beige",
      aosDelay: 1000,
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/*  Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-primary">
            Best sellers
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400 py-5">
            {" "}
            Voici une selection de nos costumes les plus populaires.
          </p>
        </div>
        {/*  Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5
         place-items-center gap-5"
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-1"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[370px] w-[350px] object-cover rounded-md"
                />
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-xl text-gray-500">{data.color}</p>
                <p className="text-sm0 text-primary">{data.price} €</p>
              </div>
            ))}
          </div>
          {/* voir plus button */}
          <div>
            <button>
                Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
