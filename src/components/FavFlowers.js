import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ApiCrudData from './ApiCrudData';
import UpdateForm from './UpdateForm';
class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCrudData: [],
      showCrudDataComponent: false,
      instructions:'',
      photo:'',
      name:'',
      showUpdateForm:'',
      _id:'',
    };
  }
  componentDidMount = async () => {
    const url = `http://localhost:3022/flower/favorite`;
    const request = await axios.get(url);
    this.setState({
      apiCrudData: request.data,
      showCrudDataComponent: true,
    })
  }
  deleteFlower =async (id) => {
      await axios
      .delete(`http://localhost:3022/flower/favorite/${id}`)
    const deletedItems= this.state.apiCrudData.filter(obj => obj._id !== id)
    this.setState({ 
      apiCrudData: deletedItems,
    })
  }
  showUpdateForm=(instructions,id)=>{
      this.setState({ 
        showUpdateForm:true,
        instructions:instructions,
        _id:id
      })
  }
  instructionsState=(e)=>{
    this.setState({ 
      instructions:e.target.input.value
    })
  }
  updateFlower= async (e,id)=>{
    e.preventDefault();
    await axios.put(`http://localhost:3022/flower/favorite/${id}`)
  }
  render() {
    return (
      <>
      {this.state.showUpdateForm &&
      <UpdateForm
      updateFlower={this.state.updateFlower}
      instructions={this.state.instructions}
      instructionsState={this.state.instructionsState}
      />
      }
        {
          this.state.showCrudDataComponent &&
          <ApiCrudData
            apiCrudData={this.state.apiCrudData}
            deleteFlower={this.deleteFlower}
          />
        }
      </>
    )
  }
}

export default FavFlowers;
