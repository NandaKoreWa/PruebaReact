import { Divider, Layout, Menu, Row, Col } from "antd";
import Search from "antd/lib/input/Search";
import {
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { CharactersView } from "./character/characters.view";
import { CharacterView } from "./character/character.view";
import { EpisodesView } from "./episode/episodes.view";
import { EpisodeView } from "./episode/episode.view";
import { LocationView } from "./location/location.view";
import { LocationsView } from "./location/locations.view";
import { useState, useEffect } from "react";
import { getCharacters } from "../../services/getCharacters";
import { getEpisodes } from "../../services/getEpisodes";
import { getLocations } from "../../services/getLocations";

export function DashboardView() {
  //VARIABLES
  const navigate = useNavigate();
  const location = useLocation();
  const [datosFromAPI, setDatosFromAPI] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  var temporizador: any;

  //FUNCIONES
  const goToLogin = () => {
    localStorage.removeItem("logged");
    navigate("/login");
  };

  const searchThis = (event: any) => {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
      if (typeof event === "string") {
        setSearchText(event);
      } else {
        setSearchText(event.target.value.trim());
      }
    }, 400);
  };

  useEffect(() => {
    let url = location.pathname.split("/");

    switch (url[2]) {
      case "personajes":
        getCharacters({ searchText }).then((data: any) => {
          setDatosFromAPI(data.results);
        });

        break;
      case "episodios":
        getEpisodes({ searchText }).then((results) => {
          setDatosFromAPI(results);
        });
        break;
      case "localizaciones":
        getLocations({ searchText }).then((results) => {
          setDatosFromAPI(results);
        });
        break;
    }
  }, [location, searchText]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Sider title={"colapsar"} collapsible>
        <Menu title={"colapsar"} theme="dark" mode="inline">
          <Menu.Item key={"personajes"}>
            <Link to="/dashboard/personajes">Personajes</Link>
          </Menu.Item>
          <Menu.Item key={"episodios"}>
            <Link to="/dashboard/episodios">Episodios</Link>
          </Menu.Item>
          <Menu.Item key={"localizaciones"}>
            Localizaciones
            <Link to="/dashboard/localizaciones">Localizaciones</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={goToLogin} key={"cerrar"}>
            Cerrar sesion
          </Menu.Item>
        </Menu>
      </Layout.Sider>

      <Layout style={{ height: "100vh" }}>
        <Layout.Content style={{ padding: "20px", height: "100%" }}>
          <Row justify={"center"}>
            <Col span={12}>
              <Search
                onSearch={searchThis}
                onChange={searchThis}
                allowClear
                size={"large"}
              />
            </Col>
          </Row>
          <Divider type={"vertical"} />
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ height: "100%" }}
            gutter={[16, 40]}
          >
            <Routes>
              <Route
                path={"personajes"}
                element={<CharactersView datosFromAPI={datosFromAPI} />}
              />
              <Route path={"personaje/:id"} element={<CharacterView />} />
              <Route
                path={"episodios"}
                element={<EpisodesView datosFromAPI={datosFromAPI} />}
              />
              <Route path={"episodio/:id"} element={<EpisodeView />} />

              <Route
                path={"localizaciones"}
                element={<LocationsView datosFromAPI={datosFromAPI} />}
              />
              <Route path={"localizacion/:id"} element={<LocationView />} />
            </Routes>
          </Row>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
