import SoldesImg from "../../assets/General/SoldesImg.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Soldes = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xs:gap-10 sm:gap-10 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={SoldesImg}
              alt=""
              className="max-w-[500px] h-full w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                 object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Soldes d&apos;hiver 30% sur nos produits
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
              Ne ratez pas l&apos;ocassion de profiter de nos soldes d&apos;hiver.
              préparez-vous pour vos mariages, vos fêtes et vos sorties de cet
              été.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <GrSecure 
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                <p>Produits de Qualité</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                <p>Livraison rapide</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"/>
                <p>Multiples méthodes de paiement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soldes;
