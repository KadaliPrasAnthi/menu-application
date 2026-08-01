import{useParams} from 'react-router'
import {getMenuItemById} from '../../data/menuData'
//import{useEffect,useState} from 'react'
const FoodDetails=()=>{
    const{ id }=useParams()
    const menuItem = getMenuItemById(id);
    return (
        <h1>{menuItem?.name}</h1>
    )
}
export default FoodDetails