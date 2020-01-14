import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrousleItem'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'

//const API = 'http://localhost:3000/initialState'
const Home = ({mylist,trends,originals}) => {
    // const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: []});

    // useEffect(()=>{
    //     fetch('http://localhost:3000/initialState')
    //     .then(response => response.json())
    //     .then(data => setVideos(data))
    // },[])
 //const initialState = useInitialState(API)
 //console.log(initialState.trends)
    return(
    <div className="App">
       
      <Search/>
      {
         mylist.length > 0 &&
       <Categories title="Mi lista">
          <Carrousel>
          {
                  mylist.map(item =>
                    <CarrouselItem 
                    key={item.id} 
                    {...item}
                    isList
                    />
                  )
              }
              
          </Carrousel>
       </Categories>
      }
      

      <Categories  title="Tendencias">
          <Carrousel>
              {
                  trends.map(item =>
                    <CarrouselItem key={item.id} {...item}/>
                  )
              }
              
              
            
          </Carrousel>
      </Categories>

      <Categories  title="Originales de Platzi Video">
          <Carrousel>
          {
                  originals.map(item =>
                    <CarrouselItem key={item.id} {...item}/>
                  )
              }
            
          </Carrousel>
      </Categories>

      
       
    </div>
)}

const mapStateToProps = state => {
  return{
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  }

}

//export default Home
export default connect(mapStateToProps, null)(Home)