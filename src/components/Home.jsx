import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div className="home">
     
        
        <p>
          <ul>Nirmala cancer foundation
          <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio" id = '01'>
          <label>
            <input type="radio" value="Cancer Health camp" />
           <li>Cancer health camp</li>
          </label>
        </div>
        <div className="radio" id = '02'>
          <label>
            <input type="radio" value="Free Medicine for one day" />
            <li>Free medicine for one day</li>
          </label>
        </div>
        <div className="radio" id = '03'>
          <label>
            <input type="radio" value="building cancer Hospital" />
            <li>Building cancer cure hospitals</li>
          </label>
        </div>
        <label>
             Amount:
    <        input type="number" name="Amount" />
             </label>
             <input type="submit" value="Contribute" />
      </form>

    </div>
  </div>
</div>

          
          </ul>

          <ul>Children welfare association
          <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio" id = '04'>
          <label>
            <input type="radio" value="Education for children" />
           <li>Scholarship for students</li>
          </label>
        </div>
        <div className="radio" id = '05'>
          <label>
            <input type="radio" value="mid day meal" />
            <li>Mid-day meal scheme</li>
          </label>
        </div>
        <div className="radio" id = '06'>
          <label>
            <input type="radio" value="building orphanage for childrens" />
            <li>Building orphanage for childrens</li>
          </label>
          
          <label>
             Amount:
    <        input type="number" name="Amount" />
             </label>
             <input type="submit" value="Contribute" />
        </div>
      </form>

    </div>
  </div>
</div>
          
          </ul>       
          <ul>Red cross NGO
          <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio" id = '07'>
          <label>
            <input type="radio" value="Flood relief" />
           <li>Flood relief</li>
          </label>
        </div>
        <div className="radio" id = '08'>
          <label>
            <input type="radio" value="donation for handicapped" />
            <li>Donation for handicapped</li>
          </label>
        </div>
        <div className="radio" id = '09'>
          <label>
            <input type="radio" value="contribute" />
            <li>Contribute</li>
          </label>
          <label>
             Amount:
    <        input type="number" name="Amount" />
             </label>
             <input type="submit" value="Contribute" />
        </div>
      </form>

    </div>
  </div>
</div>
          </ul>
          <ul>woman welfare association
          <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio" id = '10'>
          <label>
            <input type="radio" value="Education for women" />
           <li> Scholarship for women </li>
          </label>
        </div>
        <div className="radio" id = '11'>
          <label>
            <input type="radio" value="basic requirements" />
            <li>basic requirements</li>
          </label>
        </div>
        <div className="radio" id = '12'>
          <label>
            <input type="radio" value="fund for undisputed cases against women" />
            <li>fund for undisputed cases against women</li>
          </label>
          
          <label>
             Amount:
         <   input type="number" name="Amount" />
             </label>
             <input type="submit" value="Contribute" />

        </div>

      </form>

    </div>
  </div>
</div>
          
          </ul>
          <ul>Senior citizen organisation
          <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio" id = '13'>
          <label>
            <input type="radio" value="constructing old age home" />
           <li>constructing old age home</li>
          </label>
        </div>
        <div className="radio" id = '14'>
          <label>
            <input type="radio" value="Food for senior citizens" />
            <li>Food for senior citizens</li>
          </label>
          <label>
             Amount:
    <        input type="number" name="Amount" />
             </label>
             <input type="submit" value="Contribute" /> 
        </div>
        
      </form>

    </div>
  </div>
</div>
          
          </ul>
           </p>
      </div>
    );
  }
}

export default Home;
