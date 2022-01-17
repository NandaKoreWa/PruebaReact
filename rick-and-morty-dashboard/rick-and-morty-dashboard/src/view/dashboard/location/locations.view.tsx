import { Row, Col } from "antd";
import { Fragment } from "react";
import Location from "../../../models/Location";
import { useNavigate } from "react-router-dom";

export const LocationsView = ({
  datosFromAPI = [],
}: {
  datosFromAPI: Location[];
}) => {
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
                  <th scope="col">Tipo</th>
                  <th scope="col">Dimension</th>
                  <th scope="col">Residentes</th>
                </tr>
              </thead>
              <tbody>
                {datosFromAPI.map((location) => {
                  return (
                    <tr
                      key={location.url}
                      onClick={() => {
                        navigate("/dashboard/localizacion/" + location.id);
                      }}
                    >
                      <th scope="row">{location.id}</th>
                      <th scope="row">{location.name}</th>
                      <th scope="row">{location.type}</th>
                      <th scope="row">{location.dimension}</th>
                      <th scope="row">{location.residents.length}</th>
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
