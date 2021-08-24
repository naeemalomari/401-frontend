import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ApiData from './ApiData'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      showDataComponent: false,
    };
  }
  componentDidMount = async () => {
    const url = `http://localhost:3022/flower`;
    const request = await axios.get(url);
    this.setState({
      apiData: request.data,
      showDataComponent: true,
    })
  }
  favFlower =async (obj)=>{
    console.log(obj);
    await axios.post(`http://localhost:3022/flower/favorite`, obj)
  }
  render() {

    return (
      <>
        {
          this.state.showDataComponent &&
          <ApiData
            apiData={this.state.apiData}
            favFlower={this.favFlower}
          />
        }
      </>
    )
  }
}

export default Home;
