// import Title from "./components/Title";
// import Page from "./components/Page";
// import Projects from "./components/Projects";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import Mountains from './images/mountains.png'

function App() {
  return (
    // <div className="bg-black">
    //   <Page element={<Title />} boxColor="bg-stone-200" />
    //   <Page element={<Projects />} boxColor="bg-vupdate" />
    // </div>
    <div className="flex flex-col min-h-screen bg-amber-200">
      {/* Title box */}
      <div className="flex justify-end p-6">
        <a href='/' className='text-white flex justify-center w-24 h-24 relative'>
          <div className='flex items-center'>
            <div className='z-10 leading-[1.1] console-bold text-xl'>
              Let's
              <br />
              Chat
            </div>
          </div>
          <div className='absolute left-0 top-0 right-0 bottom-0 bg-black rounded-full'></div>
        </a>
      </div>
      <div className="flex justify-center">
        <img alt="Mountains" className="absolute bottom-0 left-0 non w-fit h-fit" src={Mountains} />
        <div className="leading-snug flex flex-col p-6 z-10 relative md:backdrop-blur-xl md:border-4 md:border-black w-fit h-fit rounded-lg">
          <div className="bg-black h-32 w-32 self-center m-2 rounded-full" />
          <div className="text-4xl console-bold self-center">
            Vaibhav Sharma
          </div>
          <div className="text-xl console-regular self-center">
            Software Developer
          </div>
          <div className="flex justify-center gap-3 m-2">
            {/* Social Media Icons */}
            <a href="/">
              <FaLinkedin size={'1.75em'} />
            </a>
            <a href="/">
              <FaGithub size={'1.75em'} />
            </a>
            <a href="/">
              <MdEmail size={'1.75em'} />
            </a>
            <a href="/">
              <TbBrandFiverr size={'1.75em'} />
            </a>
          </div>
          <a href="/" className="bg-black text-white p-2 text-lg console-bold-italic rounded-full px-4 mt-4 self-center">
            ABOUT ME
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
