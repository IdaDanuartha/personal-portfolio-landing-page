import Image from "next/image";

export default function AppNavbar() {
  return (
    <div className="navbar container mx-auto py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a href="#">Home</a>
            </li> 
            <li>
              <a href="#about-us">About Me</a>
            </li> 
            <li>
              <a href="#services">Services</a>
            </li> 
            <li>
              <a href="#my-projects">Projects</a>
            </li> 
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> 
          </ul>
        </div>
        <a href="/">
          <Image className="dark:hidden block" src="/images/logo-light.png" width={150} height={150} alt="Logo Mumair" />
          <Image className="dark:block hidden" src="/images/logo-dark.png" width={150} height={150} alt="Logo Mumair" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li> 
          <li>
            <a href="#about-us">About Me</a>
          </li> 
          <li>
            <a href="#services">Services</a>
          </li> 
          <li>
            <a href="#my-projects">Projects</a>
          </li> 
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> 
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/files/my_curriculum_vitae.pdf" className="btn bg-main text-white font-normal" download="my_curriculum_vitae">Download CV</a>
      </div>
    </div>
  );
}
