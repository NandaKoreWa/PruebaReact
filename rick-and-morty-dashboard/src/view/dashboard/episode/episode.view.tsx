import { Row, Col } from "antd";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEpisodeByID } from "../../../services/getEpisodes";
import Character from "../../../models/Character";
import { getCharactersByID } from "../../../services/getCharacters";
import { CharactersView } from "../character/characters.view";
export const EpisodeView = () => {
  const navigate = useNavigate();
  const [personajes, setPersonaje]: any = useState<Character[]>([]);
  const [episodio, setEpidosdios]: any = useState({});
  const { id } = useParams();
  useEffect(() => {
    getEpisodeByID({ id: id }).then((data: any) => {
      getCharactersByID({ charactersIDs: data.characterNumbers }).then(
        (personajes: any) => {
          setPersonaje(personajes);
        }
      );
      setEpidosdios(data.episode);
    });
  }, []);
  return (
    <Fragment>
      <Row align={"top"} justify={"center"}>
        <Col>
          {
            <table>
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Nombre Episodio</th>
                  <th scope="col">Fecha de Salida</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  key={episodio.id}
                  onClick={() => {
                    navigate("/dashboard/episodio/" + episodio.id);
                  }}
                >
                  <th scope="row">{episodio.id}</th>
                  <th scope="row">{episodio.name}</th>
                  <th scope="row">{episodio.episode}</th>
                  <th scope="row">{episodio.air_date}</th>
                </tr>
              </tbody>
            </table>
          }
        </Col>
      </Row>

      <CharactersView datosFromAPI={personajes}></CharactersView>
    </Fragment>
  );
};
