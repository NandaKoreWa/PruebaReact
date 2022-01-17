import { Card, Avatar } from "antd";
import { Fragment } from "react";
import Character from "../../../models/Character";
import deadIco from "../../../assets/img/dead.png";
import aliveIco from "../../../assets/img/alive.png";
import { Link } from "react-router-dom";
const { Meta } = Card;
export const CharactersView = ({
  datosFromAPI = [],
}: {
  datosFromAPI: Character[];
}) => {
  return (
    <Fragment>
      {datosFromAPI.map((personaje: Character) => (
        <Card
          hoverable
          style={{ width: "15%" }}
          cover={<img alt={personaje.name} src={personaje.image} />}
          key={personaje.url}
        >
          <Meta
            title={
              <Link to={"/dashboard/personaje/" + personaje.id}>
                {personaje.name}
              </Link>
            }
            avatar={
              <Avatar src={personaje.status !== "Alive" ? deadIco : aliveIco} />
            }
            description={personaje.species}
          />
          <div>
            <Link
              to={
                "/dashboard/episodio/" +
                personaje.episode[0].split("episode/")[1]
              }
            >
              Primer episodio
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to={
                "/dashboard/localizacion/" +
                personaje.location.url.split("location/")[1]
              }
            >
              Ultima localizacion
            </Link>
          </div>
        </Card>
      ))}
    </Fragment>
  );
};
