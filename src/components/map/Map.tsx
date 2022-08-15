import React, { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Title, Paragraph } from "@ip-address/design";
import { Search } from "@ip-address/features"; 
import { Loading, ErrorContainer } from "./Map.styles";
import { Oval } from "react-loader-spinner";

function Map_() {
  const status = useSelector((state: RootState) => state.global.loading);
  const query = useSelector((state: RootState) => state.global.searchQuery);
  const error = useSelector((state: RootState) => state.global.error);
  const errorMessage = useSelector(
    (state: RootState) => state.global.errorMessage
  );
  const res = useSelector((state: RootState) => state.global.response);
  const [center, setCenter] = useState<[number, number]>([50.879, 4.6997]);
  const [zoom] = useState<number>(11);

  useEffect(() => {
    if (res !== null) {
      let lat: number = res.location.lat;
      let lng: number = res.location.lng;
      setCenter([lat, lng]);
    } else {
      setCenter([50.879, 4.6997]);
    }
  }, [res]);

  return (
    <Map center={center} zoom={zoom}>
      {status ? (
        <Loading>
          <Oval height="40" width="40" color="white" secondaryColor="#5d5c5e" />
        </Loading>
      ) : error ? (
        <Loading>
          <ErrorContainer>
            <Title>{errorMessage}</Title>
            <Paragraph onClick={() => Search(query)}>Try again?</Paragraph>
          </ErrorContainer>
        </Loading>
      ) : (
        <Marker width={50} anchor={center} />
      )}
    </Map>
  );
}

export default Map_;
