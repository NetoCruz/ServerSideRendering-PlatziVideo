import React from 'react'
import {connect} from 'react-redux'
import {setFavorite, deleteFavorite} from '../actions'
import {Link} from 'react-router-dom'
import '../assets/styles/components/CarrouselItem.scss'
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'
import PropTypes from 'prop-types'
import removeIcon from '../assets/static/remove-icon.png'
const CarrouselItem = (props)=> {
  const {id,cover,title,year,contentRating, duration, isList} = props
  
  const handleSetFavorite = ()=>{
    props.setFavorite(
      {
        id,cover,title,year,contentRating, duration
      }
    )
  }

  const handleDeleteFavorite = (itemId)=>{
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img 
                className="carousel-item__details--img" 
                src={play} 
                alt="Play Icon"

              /> 
            </Link>
            
            {
              isList ?
               <img  className="carousel-item__details--img" src={removeIcon} onClick={()=>handleDeleteFavorite(id)} alt="Remove Icon"/>
              :
              <img className="carousel-item__details--img" src={plus} onClick={handleSetFavorite} alt="Plus Icon"/> 
            }
            
            
          </div>
          <p className="carousel-item__details--title"> {title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}  </p>
        </div>
      </div>

)
  }

CarrouselItem.propTypes ={
    cover:PropTypes.string,
    title:PropTypes.string,
    year:PropTypes.number,
    contentRating:PropTypes.string,
    duration:PropTypes.number,
}

const mapDispatchToProps ={
  setFavorite,
  deleteFavorite,
}
//export default CarrouselItem
export default connect(null, mapDispatchToProps)(CarrouselItem)