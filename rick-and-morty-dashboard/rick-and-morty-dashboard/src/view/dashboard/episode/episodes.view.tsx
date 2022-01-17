import { Row, Col } from "antd";
import { Fragment } from "react";
import Episode from "../../../models/Episode";
import { useNavigate } from "react-router-dom";

export const EpisodesView = ({ datosFromAPI }: { datosFromAPI: Episode[] }) => {
  const navigate = useNavigate();


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
                  <th scope="col">Personajes</th>
                </tr>
              </thead>
              <tbody>
                {datosFromAPI.map((episodio) => {
                  return (
                    <tr
                      key={episodio.url}
                      onClick={() => {
                        navigate("/dashboard/episodio/" + episodio.id);
                      }}
                    >
                      <th scope="row">{episodio.id}</th>
                      <th scope="row">{episodio.name}</th>
                      <th scope="row">{episodio.episode}</th>
                      <th scope="row">{episodio.air_date}</th>
                      <th scope="row">{episodio.characters.length}</th>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        </Col>
      </Row>
    </Fragment>
  );
};
