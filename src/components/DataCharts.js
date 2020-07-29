import React, { useEffect } from 'react'
//react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "../components/Heading/Heading.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Button from "../components/CustomButtons/Button";
import axios from 'axios'



  
  import styles from "../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js"



  const useStyles = makeStyles(styles);
  var Chartist = require("chartist");
  var delays = 80,
    durations = 500;

  
  

function  DataCharts () {
    const classes = useStyles();
    const[country,setCountry] = React.useState("Afghanistan")
    const[casesList,setCasesList]= React.useState([])
    const[recoveredList,setRecoveredList]= React.useState([])
    const[deathList,setDeathList]= React.useState([])
    const [chartMax,setChartMax] = React.useState(20000)

    useEffect(() => {
        axios.get(API).then((res) => {
          const caseObj=(res.data.timeline.cases)  
          const caseArry = Object.values(caseObj)
          setCasesList(caseArry)
          const recoveredObj=(res.data.timeline.recovered)  
          const  recoveredArry = Object.values( recoveredObj)
          setRecoveredList(recoveredArry)
        });
      }, [country]);
      const API = `https://disease.sh/v3/covid-19/historical/Afghanistan?lastdays=7`;
      
        const test= ()=>{
            console.log(  )
          
        }

      
            const test2= ()=>{
                setChartMax(Math.max(...casesList))

                
            }
          

     

        const dailySalesChart = {
            casesData: {
              labels: ["M", "T", "W", "T", "F", "S", "S"],
              series: [[casesList[0], casesList[1], casesList[2], casesList[3], casesList[4], casesList[5],casesList[6]]] 
            },
            recoveredData: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                series: [[recoveredList[0], recoveredList[1], recoveredList[2], recoveredList[3], recoveredList[4], recoveredList[5],recoveredList[6]]] 
              },
              deathData: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                series: [[deathList[0], deathList[1], deathList[2], deathList[3], deathList[4], deathList[5],deathList[6]]] 
              },
            casesOptions: {
              lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
              }),
              low: 0,
              high: chartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 20
              }
            },
            recoveredOptions: {
                lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0
                }),
                low: 0,
                high: chartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 20
                }
              },
              deathOptions: {
                lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0
                }),
                low: 0,
                high: chartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 20
                }
              },
            // for animation
            animation: {
              draw: function(data) {
                if (data.type === "line" || data.type === "area") {
                  data.element.animate({
                    d: {
                      begin: 600,
                      dur: 700,
                      from: data.path
                        .clone()
                        .scale(1, 0)
                        .translate(0, data.chartRect.height())
                        .stringify(),
                      to: data.path.clone().stringify(),
                      easing: Chartist.Svg.Easing.easeOutQuint
                    }
                  });
                } else if (data.type === "point") {
                  data.element.animate({
                    opacity: {
                      begin: (data.index + 1) * delays,
                      dur: durations,
                      from: 0,
                      to: 1,
                      easing: "ease"
                    }
                  });
                }
              }
            }
          };
       
        return (
            <div>
                  <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.casesData}
                type="Line"
                options={dailySalesChart.casesOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Corona Virus Cases</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in the last 24hr.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
                <button onClick={test2}>d</button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="success" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.recoveredData}
                type="Line"
                options={dailySalesChart.recoveredOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Recovered</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 15%
                </span>{" "}
                increase in the last 24hr.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.deathData}
                type="Line"
                options={dailySalesChart.deathOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Deaths</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                </span>{" "}
                increase in the last 24hr.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 2 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
            </div>
        )
    
}


export default DataCharts