import Button from "../UI/Button";
import RoundedPhoto from "../UI/RoundedPhoto";

import manLogo from "../../assets/manLogo.png";

const headButtonsClass = "text-gray-700 hover:text-gray-900 font-bold";

export default function Header() {
  return (
    <>
      <div className="px-24 py-8" >

        <nav className="flex justify-end gap-8">
          <button className={headButtonsClass}>Blog</button>
          <button className={headButtonsClass}>Works</button>
          <button className={headButtonsClass}>Contact</button>
        </nav>

        <div className="mt-36 flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-5">

            <h1 className="text-4xl font-bold text-gray-800">
              Hi, I am John, Creative Technologist
            </h1>

            <p className="text-lg text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <Button className="self-start bg-red-400 text-white px-5 py-2 rounded mt-4 w-auto">
              Download Resume
            </Button>
          </div>

          <RoundedPhoto photoName={manLogo} photoAlt="A man logo" />

        </div>
      </div>




    </>
  );
}
