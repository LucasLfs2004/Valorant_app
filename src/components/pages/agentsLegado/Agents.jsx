import "./Agents.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardAgent from "./CardAgent";
import { changeTitle } from "../../../store/actions/title";
import { connect } from "react-redux";

const Agents = (props) => {

  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAgents();
  }, [agents]);

  const getAgents = async () => {
    try {
      const query = await axios.get(
        "https://valorant-api.com/v1/agents?language=pt-BR"
      );

      if (query.status < 300) {
        setAgents(query.data);
        props.changeTitle("Operadores")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="agents">
      {agents?.data?.length &&
        agents?.data?.map((item, key) => {
          if (item.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
            return (
              <CardAgent
                key={key}
                uuid={item.uuid}
                image={item.fullPortrait}
                bg_image={item.background}
                name={item.displayName}
                type={item.role?.displayName}
                background_color={item.backgroundGradientColors}
              ></CardAgent>
            );
          }
          return <></>;
        })}
    </div>
  );
};


function mapStateToProps(state) {
  return {
    title: state.title.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(title) {
      // action creator -> action
      const action = changeTitle(title);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agents);