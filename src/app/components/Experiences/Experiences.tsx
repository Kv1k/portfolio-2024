import React from "react";
import Image from "next/image"
import SudalysImg from "../../../../public/sudalys.png"
import AngovaImg from "../../../../public/auto-ecole.gif"
import H2NImg from "../../../../public/h2n.png"
import { useRouter } from "next/navigation";
function Experiences() {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-auto py-12 px-0 md:px-6">
      <div className="flex flex-col justify-center items-end ">
        <div><p>SUDALYS</p></div>
        <div className=" w-[200px] transform transition-transform duration-300 hover:scale-[1.13] cursor-pointer"
            onClick={() => router.push("/experience/1")} >
          <Image src={SudalysImg} alt='' className='w-[100%] h-auto' />

        </div>
        <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
      </div>

      <div className="flex flex-col justify-center items-start ">
        <div><p>H2N AUTOMOBILE</p></div>
        <div className="w-[200px] transform transition-transform duration-300 hover:scale-[1.13] cursor-pointer"
            onClick={() => router.push("/experience/2")} >
          <Image src={H2NImg} alt='' className='w-[100%] h-auto' />
        </div>
        <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
      </div>

      <div className="flex flex-col justify-center items-end ">
        <div><p>ANGOVA</p></div>
        <div className=" w-[200px] transform transition-transform duration-300 hover:scale-[1.13] cursor-pointer"
            onClick={() => router.push("/experience/3")} >
          <Image src={AngovaImg} alt='' className='w-[100%] h-auto' />
        </div>
        <div><p className="michroma-text text-[12px]">Cliquer pour voir</p></div>
      </div>

    </div>
  );
}

export default Experiences;
