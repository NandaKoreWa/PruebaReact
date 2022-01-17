import { Avatar, Descriptions, Col, Row } from "antd";
import { Fragment } from "react";
import { Image } from "antd";

import deadIco from "../../../assets/img/dead.png";
import aliveIco from "../../../assets/img/alive.png";
import { useParams } from "react-router-dom";
import { getCharacterByID } from "../../../services/getCharacters";
import { useState, useEffect } from "react";
import { getEpisodesByID } from "../../../services/getEpisodes";
import Episode from "../../../models/Episode";
import { getLocationById } from "../../../services/getLocations";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import { EpisodesView } from "../episode/episodes.view";
export const CharacterView = () => {
  const [location, setLocation]: any = useState({});
  const [personaje, setPersonaje]: any = useState({});
  const [episodios, setEpidosdios] = useState<Episode[]>([]);
  const { id } = useParams();

  useEffect(() => {
    getCharacterByID({ id: id }).then((data: any) => {
      getLocationById({
        id: data.personaje.location.url.split("location/")[1],
      }).then((lugar: any) => {

        setLocation(lugar.location);
      });
      getEpisodesByID({ EpisodesIDs: data.episodesNumbers }).then(
        (episodios: any) => {
          if (Array.isArray(episodios)) {
            setEpidosdios(episodios);
          } else {
            setEpidosdios([episodios]);
          }
        }
      );
      setPersonaje(data.personaje);
    });
  }, []);
  return (
    <Fragment>
      <Row justify={"center"}>
        <Col>
          <Image width={200} src={personaje.image} />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={12}>
          <Descriptions title={personaje.name}>
            <Descriptions.Item label="Especie">
              {personaje.species}
            </Descriptions.Item>
            <Descriptions.Item label="genero">
              {personaje.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              <Avatar
                size="large"
                src={personaje.status !== "Alive" ? deadIco : aliveIco}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Localizacion">
              <Link to={"/dashboard/localizacion/" + location.id}>
                {" "}
                {location.name}
              </Link>
            </Descriptions.Item>
          </Descriptions>
          <Divider orientation="left">Episodios</Divider>

          <EpisodesView datosFromAPI={episodios}></EpisodesView>
        </Col>
      </Row>
    </Fragment>
  );
};
