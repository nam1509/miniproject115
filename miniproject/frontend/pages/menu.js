import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body >
      <div className={styles.header}>
        <Navbar />
      </div>
      <div >
        <h1 className="text-7xl items-center">seafood</h1>
      </div>


  <div className=" flex flex-row items-center left-5">
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="sf2.jpg"

            alt="Sample image"

          />
          <br></br><br></br><br></br><br></br>
          <div className={styles.p}>
          
              <p className="text-xl items-center font-bold"> Grilled Shrimp  </p>
          
            <h2>500 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div>

        
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="sf3.jpg"

            alt="Sample image"

          />
        
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> Tom Yum Kung  </p>
            </a>
            <h2>300 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div>

       
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="sf4.jpg"

            alt="Sample image"

          />
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> oyster </p>
            </a>
            <h2>200 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
      
          <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="sf5.jpg"

            alt="Sample image"

          />
        
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> Deep-Fried Sea Bass with Mango Salad  </p>
            </a>
            <h2>300 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div>

       
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="sf6.jpg"

            alt="Sample image"

          />
        
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> 
box set  </p>
            </a>
            <h2>600 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div> 



      
      </div>
</div>
      
    </body>
  );
}