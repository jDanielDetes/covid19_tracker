import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import HotelIcon from '@material-ui/icons/Hotel';

// core components
import Table from "../components/Table/Table.js";
import Heading from "../components/Heading/Heading.js";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";


import { cardTitle } from "../assets/jss/material-dashboard-pro-react.js";


const styles = {
    customCardContentClass: {
      paddingLeft: "0",
      paddingRight: "0"
    },
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px"
    }
  };

  const useStyles = makeStyles(styles);

function LiveCasesChart() {
    const classes = useStyles();
    return (
        <div>
               <Card >
          <CardHeader color="rose" icon plain>
            <CardIcon color="rose">
              <HotelIcon />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Live Cases By Country
              <small> - Here is a subtitle for this table</small>
            </h4>
          </CardHeader>
          <CardBody plain>
            <Table
              hover
              tableHead={["Country", "Number positive"]}
              tableData={[
                ["USA", "4,248,327",],
                ["Brazil", "2,348,200"],
                ["India", "1,337,022", ],
                [
                  "Russia",
                  "800,849",
               
                ],
                [
                  "Mexico",
                  "421,996",
                ],
                ["Peru", "378,285"]
              ]}
            />
          </CardBody>
        </Card>
        </div>
    )
}

export default LiveCasesChart
