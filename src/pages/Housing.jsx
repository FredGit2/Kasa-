import React from 'react';
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import listAppartements from '../datas/logements.json'
import Rate from '../components/Rate';
import Host from '../components/Host';
import Tag from '../components/Tag';

function Housing () {
   
    const { id } = useParams()
    const display = listAppartements.find((house) => house.id === id)

    if(!display) {
        return <Navigate to="/*" /> //renvoie à la page d'erreur si adresse differente de l'id des appartements
    }

   
    return (
        <div className='container'>
            <Slideshow images={display.pictures} />

            <div className="housing__container">
                <div className="housing__description">
                    <h1 className='housing__title'>{display.title}</h1>
                    <h2 className='housing__location'>{display.location}</h2>
                    <Tag tag ={display.tags.map((tag)=>(
                        <p key={tag}>
                        {tag}
                    </p>
                    ))} />
                </div>
                <div className="housing__host--rating">
                    <Host name={display.host.name} img={display.host.picture} />
                   <Rate rating ={display.rating} />
                </div>

            </div>
            
            <div className="housing__collapse">
                
                <Collapse title="Description" content={display.description} />
                <Collapse title="Equipements" content={display.equipments.map((equipments) => (
                                <p key={equipments}>
                                    {equipments}
                                </p>
                            ))} />
                
            </div>
        </div>
    );
};



export default Housing;