import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import HotelIcon from "@material-ui/icons/Hotel";

// core components
import Table from "../components/Table/Table.js";
import Heading from "../components/Heading/Heading.js";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CovidContext from "../CovidContext";
import "../liveCases.css";
import numeral from "numeral";
import { cardTitle } from "../assets/jss/material-dashboard-pro-react.js";

const styles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  scroll: {
    height: "100px",
  },
};

const useStyles = makeStyles(styles);

function LiveCasesChart(props) {
  const classes = useStyles();

  const test = () => {
    console.log();
  };



  return (
    <div>
      <CovidContext.Consumer>
        {(Data) => {
          console.log(Data);

          const testonClick= () =>{
    
          }
          return (
            <Card>
              <CardHeader color="rose" icon plain>
                <CardIcon color="rose">
                  <HotelIcon />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Live Cases By Country
                  <small> </small>
                </h4>
              </CardHeader>
              <CardBody plain>
             <div className="table">
                    <Table
                      hover
                      tableHead={["Country", "Number positive"]}
                      tableData={[
                        ...Data.globalData.map((data) => [
                          data.country,
                          numeral(data.cases).format("0,0"),
                        ]),
                      ]}
                    ></Table>
             </div>
              </CardBody>
            </Card>
          );
        }}
      </CovidContext.Consumer>
    </div>
  );
}

export default LiveCasesChart;
