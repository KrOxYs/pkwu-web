import { Navbar } from 'flowbite-react/lib/esm/components';
const Navigation = () => {
    return (
        <Navbar
    fluid={true}
    rounded={true}
    
  >
    <Navbar.Brand href="https://flowbite.com/" >
      {/* <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
  
      /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Pekawu banh edi 
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/home"
      >
      <p>Home</p>
      </Navbar.Link>
      <Navbar.Link href="/about" >
      <p>About</p>
      </Navbar.Link>
      <Navbar.Link href="/product">
        <p>Product </p>
      </Navbar.Link>
      <Navbar.Link href="/contact">
        <p>Contact</p>
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
    )
}
export default Navigation