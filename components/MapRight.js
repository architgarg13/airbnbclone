import { useState } from 'react'
import ReactMapGL , {Marker ,Popup} from 'react-map-gl'
import { getCenter } from 'geolib';
import { StarIcon } from '@heroicons/react/solid'


function MapRight({searchResults}) {
    

    const coordinates = searchResults.map((item) => ({
        longitude: item.long,
        latitude: item.lat,
    }) )

    const centre = getCenter(coordinates);
  

    const [viewport , setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: centre.latitude,
        longitude: centre.longitude,
        zoom: 11,
    },);


    const [selectedLocation , setSelectedLocation ] = useState({});
    return (
        <ReactMapGL
        mapStyle="mapbox://styles/architgarg13/ckt9qwbkg13eb17qwn7n79yby"
        mapboxApiAccessToken="pk.eyJ1IjoiYXJjaGl0Z2FyZzEzIiwiYSI6ImNrdDlxc2hybzA0ancydms0a253YXN0aTQifQ.H34VHdPORwU187siM24oog"
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        >
        {
            searchResults.map(item => (
                <div key={item.long}>
                    <Marker
                    longitude={item.long}
                    latitude={item.lat}
                    offsetLeft={-20}
                    offsetTop={-10}>
                        <p
                        role="img"
                        onClick={() => (setSelectedLocation(item))} 
                        className="cursor-pointer text-2xl animate-bounce">
                        📍
                        </p>
                    </Marker>
                    {   selectedLocation.long === item.long ? (
                        <Popup 
                        onClose={() => (setSelectedLocation({}))}
                        latitude={item.lat}
                        altitude="10"
                        longitude={item.long}
                        closeOnClick={true}
                        closeButton={false}
                        offsetTop={-20}
                        className=" max-h-20 max-w-sm relative   "
                        ><img className="bg-auto w-full h-full" src={item.img}/>
                        <div className=" flex flex-col  px-4 my-4 absolute bottom-4 bg-[rgba(0,0,0,0.1)]  text-white text-xl text-semibold font-bold ">
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                        <span className="flex"><StarIcon className="h-6 text-red-500" />{item.star}</span>
                       
                        </div>
                        </Popup>
                    ) : 
                        (false)
                    }
                </div>
            ))
        }
        </ReactMapGL>
    )
}

export default MapRight;
