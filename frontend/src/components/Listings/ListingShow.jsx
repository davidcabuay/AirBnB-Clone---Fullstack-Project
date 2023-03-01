import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import placeholderImg from './bruno.png';

export default function ListingShow(){
    const dispatch = useDispatch();
    const tempImg = placeholderImg;
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])

    return(
        <>
        <div><img src={tempImg}/></div>
        <div>
            <div>{listing.title}</div>
            <div>{listing.description}</div>
            <div>{listing.price}</div>
        </div>
        <div>
            <div>{listing.num_of_guests} guests</div>
            <div>{listing.num_of_bedrooms} bedrooms</div>
            <div>{listing.num_of_beds} beds</div>
            <div>{listing.num_of_baths} baths</div>
        </div>
        </>
    )
}