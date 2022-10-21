
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
  
function App() {
    return (
        <div className="">
            <h4>
                
            </h4>
            <Dropdown style={{backgroundColor:'blueviolet'}} className='dropdown' title="quick links">
                <Dropdown.Item as="a" href=
                "/teachers">
                   <p className="text">Teachers</p> 
                </Dropdown.Item>
  
                <Dropdown.Item as="a" href=
                "/students">
                 <p className="text"> Students</p>  
                </Dropdown.Item>
  
                <Dropdown.Item as="a" href=
                "/stuffs">
                   <p className="text"> Stuffs</p>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}
  
export default App;