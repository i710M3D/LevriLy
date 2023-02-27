import googleMapReact from "google-map-react";

export default function map(params) {
  const coords = { long: 0, lat: 0 };
  return (
    <div>
      <googleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo" }}
        defaultCenter={coords}
        center={coords}
        options={''}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={""}
        onChildClick={""}
      ></googleMapReact>
    </div>
  );
}
