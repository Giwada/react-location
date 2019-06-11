import React, { Component } from 'react';

//import components
import Segment from '../components/Grid/Segment';
import Marker from '../components/Map/Marker';

// import Google Map
import GoogleMapReact from 'google-map-react';

// import CSS
import '../styles/Dashboard.css';


class Dashboard extends Component {
  //this is a class conscructor that assigns the initial this.state
  constructor(props) {
    super(props);
    this.state = {
      segments: [],
      allSegments: [],
      selectedSegment: null,
      search: ""
    }
  }
  // The componentDidMount() methods runs 
  // after the component output has been rendered to the DOM.
  componentDidMount(){
    const url = "https://raw.githubusercontent.com/Giwada/Giwada.github.io-/master/host.json"; //the URL where JSON file is located
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          segments: data,
          allSegments: data
        });
      })
  }

  selectSegment = (segment) => {
    this.setState({
      selectedSegment: segment
    })
  }

  //debugger
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      segments: this.state.allSegments.filter((segment) =>
        new RegExp(event.target.value, "i").exec(segment.name))
    });
  }
  render() {
    // The center position is Vienna, Austria
    let center = {
      lat: 48.210033,
      lng: 16.363449 
     }
    
    if (this.state.selectedSegment){
      center = {
        lat: this.state.selectedSegment.lat,
        lng: this.state.selectedSegment.lng
      }
    }

    return (
      <div className="Dashboard">
        <div className="Main">
            <div className="Search">
              <input 
                type="text"
                placeholder="Type something..."
                value={this.state.search}
                onChange={this.handleSearch}/>
            </div>
            <div className="Segments">
              {this.state.segments.map((segment)=>{
                return <Segment 
                  key={segment.id} 
                  segment={segment}
                  selectSegment={this.selectSegment}/>
              })}
            </div>
        </div> 

        <div className="Map">
          <GoogleMapReact
            center={center}
            zoom={12}>

            {this.state.segments.map((segment)=>{
                return  <Marker 
                            key={segment.id}
                            lat={segment.lat} 
                            lng={segment.lng}
                            text={segment.price}
                            selected={segment === this.state.selectedSegment}/>
              })}
              
          </GoogleMapReact>
        </div>        
      </div>
    );
  }
}

export default Dashboard;