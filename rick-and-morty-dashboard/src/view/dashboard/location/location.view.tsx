import { Row, Col } from "antd";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Character from "../../../models/Character";
import { getCharactersByID } from "../../../services/getCharacters";
import { CharactersView } from "../character/characters.view";
import { getLocationById } from "../../../services/getLocations";
export const LocationView = () => {
  const navigate = useNavigate();
  const [personajes, setPersonajes]: any = useState<Character[]>([]);
  const [localizacion, setLocalizacion]: any = useState({});
  const { id } = useParams();
  useEffect(() => {
    getLocationById({ id: id }).then((data: any) => {
      getCharactersByID({ charactersIDs: data.characterNumbers }).then(
        (personajes: any) => {
          if (Array.isArray(personajes)) {
            setPersonajes(personajes);
          } else {
            setPersonajes([personajes]);
          }
        }
      );
      setLocalizacion(data.location);
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
                  <th scope="col">Tipo</th>
                  <th scope="col">Dimension</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => {
                    navigate("/dashboard/localizacion/" + localizacion.id);
                  }}
                >
                  <th scope="row">{localizacion.id}</th>
                  <th scope="row">{localizacion.name}</th>
                  <th scope="row">{localizacion.type}</th>
                  <th scope="row">{localizacion.dimension}</th>
                </tr>
              </tbody>
            </table>
          }
        </Col>
      </Row>
      {personajes.length < 1 ? (
        "No se han enconterado Personajes"
      ) : (
        <CharactersView datosFromAPI={personajes}></CharactersView>
      )}
      {/* <CharactersView datosFromAPI={personajes}></CharactersView> */}
    </Fragment>
  );
};
