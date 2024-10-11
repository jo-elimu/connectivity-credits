import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export default function Map({school}: any) {
  console.log('Map')

  const mapContainerRef = useRef(null)

  useEffect(() => {
      mapboxgl.accessToken = String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN)

      if (mapContainerRef.current) {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/satellite-streets-v12',
          center: [school.longitude, school.latitude],
          zoom: 6,
        })

        map.addControl(new mapboxgl.NavigationControl());

        new mapboxgl.Marker()
          .setLngLat([school.longitude, school.latitude])
          .addTo(map);
      
        return () => {
          map.remove()
        }
      }
  }, [])

  return (
    <>
        <div className="rounded-t-xl min-h-64"
            id="map-container"
            ref={mapContainerRef}>
        </div>
        <div className="rounded-b-xl p-4 bg-slate-900 text-center text-gray-600">
            {school.longitude}, {school.latitude}
        </div>
    </>
  )
}
