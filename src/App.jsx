import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import younoScreenshot from './assets/youno_screenshot.JPG';
import nightrunnerScreenshot from './assets/nightrunner_screenshot.JPG';
import me from './assets/me.png'

function App() {

  return (
    <>
      <div className="flex flex-col items-center pt-15 absolute inset-0 -z-10 min-h-[140vh] w-full bg-black 
      bg-[radial-gradient(#292929_2px,transparent_1px)] [background-size:36px_36px] px-4 sm:px-0 overflow-x-hidden">

        {/* Profile Section */}
        <div className='flex flex-col sm:flex-row w-full sm:w-120 h-auto sm:h-45 gap-5 items-center sm:items-start text-center sm:text-left'>
          <div className='bg-gray-600 h-15 w-15 rounded-full flex justify-center mx-auto sm:mx-0'>
            <div className='bg-gray-300 h-14 w-14 rounded-full self-center'>
              <img src={me} alt="profile picture" className="rounded-full"/>
            </div>
          </div>

          <div>
            <div className='text-white font-semibold text-lg sm:text-xl'>Dixit Regmi</div>
            <div className='text-gray-300 text-sm sm:text-base'>
              Frontend developer focused on building responsive,
              dynamic websites and exploring 3D web design.
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-5">
              {/* Email button */}
              <a
                href="mailto:mailbox.dixit@gmail.com"
                className="flex items-center justify-center bg-black text-gray-200 
                border-gray-400 rounded-md px-2 py-2 border-2 hover:bg-gray-700 
                transition-colors delay-40 ease-in cursor-pointer"
                aria-label="Send Email"
              >
                <MdOutlineEmail size={20} />
              </a>

              {/* LinkedIn button */}
              <a
                href="https://www.linkedin.com/in/dixitregmi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-gray-200 
                border-gray-400 rounded-md px-2 py-2 border-2 hover:bg-gray-700 
                transition-colors delay-40 ease-in cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* Download CV button */}
              <a
                href="/dixit_cv.pdf"
                download
                className="flex justify-center items-center bg-black text-gray-200 
                border-gray-400 rounded-md px-2 py-1 border-2 text-[0.9rem] hover:bg-gray-700 
                transition-colors gap-2 delay-40 ease-in cursor-pointer"
              >
                <IoMdDownload size={18} /> Download CV
              </a>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='flex-row w-full sm:w-120 text-white mt-5'>
          <h2 className='text-lg sm:text-xl font-semibold text-center sm:text-left'>Skills:</h2>
          <div className='flex flex-wrap justify-center sm:justify-start gap-2 pt-2 text-[0.9rem] sm:text-[1rem]'>
            <button className='bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              JavaScript
            </button>
            <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              React JS
            </button>
            <button className='bg-teal-500 hover:bg-teal-600 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              TailwindCSS
            </button>
            <button className='bg-lime-600 hover:bg-lime-700 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              Zustand
            </button>
            <button className='bg-purple-500 hover:bg-purple-600 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              R3F
            </button>
            <button className='bg-gray-500 hover:bg-gray-600 text-white rounded-full px-4 py-1 transition-colors delay-40 ease-in'>
              Git/Github
            </button>
          </div>
        </div>

        {/* Projects Section */}
        <div className='flex-row w-full sm:w-120 text-white pt-5'>
          <h2 className='text-lg sm:text-xl font-semibold text-center sm:text-left'>Projects:</h2>
          <div className='flex flex-col gap-5 pt-5'>

            {/* Project 1 */}
            <div className="relative bg-gray-700 w-full sm:w-100 h-[200px] sm:h-50 rounded-2xl overflow-hidden shadow-lg
              hover:scale-105 transition-transform duration-300">
              <img 
                src={younoScreenshot} alt="Project screenshot"
                className="absolute object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-80"></div>
              <div className="relative z-10 flex justify-around items-end pb-2 h-full text-white text-[0.8rem] sm:text-[1rem]">
                <div className='text-left'>
                  <h3 className="text-[1rem] font-semibold">youno</h3>
                  <p className="opacity-90 text-[0.9rem]">YouTube Video Organizer & <br/>Timestamp Notes Taker</p>
                </div>
                <a target='blank' href='https://youno.vercel.app/' className='underline rounded-2xl hover:text-blue-200 
                  transition-colors delay-40 ease-in text-[0.9rem]'>Live Demo</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative bg-gray-700 w-full sm:w-100 h-[200px] sm:h-50 rounded-2xl overflow-hidden shadow-lg
              hover:scale-105 transition-transform duration-300">
              <img 
                src={nightrunnerScreenshot} alt="Project screenshot"
                className="absolute object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-60"></div>
              <div className="relative z-10 flex justify-around items-end pb-2 h-full text-white text-[0.8rem] sm:text-[1rem]">
                <div className='text-left'>
                  <h3 className="text-[1rem] font-semibold">Nightrunner</h3>
                  <p className="opacity-90 text-[0.9rem]">Casual shooting game inspired <br /> by annoying game ads</p>
                </div>
                <a target='blank' href='https://nightrunner.vercel.app/' className='underline rounded-2xl hover:text-blue-200 
                  transition-colors delay-40 ease-in text-[0.9rem]'>Live Demo</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='text-gray-400 text-[0.8rem] sm:text-[0.9rem] underline justify-center sm:justify-start pt-5 flex gap-2 flex-wrap w-full sm:w-120 text-center sm:text-left'>
          <a href='mailto:mailbox.dixit@gmail.com' className='hover:text-gray-50 transition-colors delay-40 ease-in'>mailbox.dixit@gmail.com</a>
          <a href='https://dixitportfolio.vercel.app/' target='blank' className='hover:text-gray-50 transition-colors delay-40 ease-in'>portfolio.dixit</a>
          <a href="https://www.linkedin.com/in/dixitregmi/"  target='blank'  className='hover:text-gray-50 transition-colors delay-40 ease-in'>linkedin.com/in/dixitregmi</a>
        </div>
      </div>
    </>
  )
}

export default App;
