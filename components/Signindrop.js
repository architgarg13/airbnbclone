import {Dropdown} from 'react-bootstrap';
import {MenuIcon ,UserCircleIcon } from '@heroicons/react/solid'



function Signindrop() {

  return (
    <div >
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1"  className="flex items-center border-2 rounded-full space-x-2">
    <MenuIcon className="h-6 cursor-pointer" />
    <UserCircleIcon className="h-6 cursor-pointer" />
    </Dropdown.Toggle>
  <Dropdown.Menu  className="flex flex-col bg-[rgb(253,254,255)] text-gray-600 text-lg px-5 py-3 mt-4 rounded-lg border-black border-2">
      <Dropdown.Item >Sign Up</Dropdown.Item>
      <Dropdown.Item className="pb-2" >Login</Dropdown.Item>
      <Dropdown.Divider  />
      <Dropdown.Item >Host your Home</Dropdown.Item>
      <Dropdown.Item >Host your Experience</Dropdown.Item>
      <Dropdown.Item >Help</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        </div>
  )
}

export default Signindrop
