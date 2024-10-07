import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect, useRef } from "react";

export default function Map({school}: any) {
  console.log('Map')
  console.log('school:', school)

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [school.longitude, school.latitude],
        zoom: 1.8,
      })

      mapRef.current.addControl(new mapboxgl.NavigationControl());

      new mapboxgl.Marker()
        .setLngLat([school.longitude, school.latitude])
        .addTo(mapRef.current);
    
      return () => {
        mapRef.current.remove()
      }
  }, [])

  return (
    <>
        <div className="rounded-t-xl min-h-64" id="map-container" ref={mapContainerRef} />
        <div className="rounded-b-xl p-4 bg-slate-900 text-center text-gray-600">
            {school.longitude}, {school.latitude}
        </div>
    </>
  )
}
