import React, { useEffect } from 'react'
//react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl, Select} from "@material-ui/core";
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
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Button from "../components/CustomButtons/Button";
import axios from 'axios'
import {getCurrentDate} from './grabDate'
import{getPercentageChange} from './getPercentageChange'
import numeral from "numeral"; // to format numbers in a certain way



  
  import styles from "../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js"
import { control } from 'leaflet';



  const useStyles = makeStyles(styles);
  var Chartist = require("chartist");
  var delays = 80,
    durations = 500;

  
  

function  DataCharts (props) {
    const classes = useStyles();
    const[country,setCountry] = React.useState("Afghanistan")
    const[casesList,setCasesList]= React.useState([])
    const[recoveredList,setRecoveredList]= React.useState([])
    const[deathList,setDeathList]= React.useState([])
    const [caseChartMax,setCaseChartMax] = React.useState(20000)
    const [recoveredChartMax,setRecoveredChartMax] = React.useState(20000)
    const [deathChartMax,setDeathChartMax] = React.useState(20000)
    const[percent,setpercent] =React.useState()


    useEffect(() => {
        axios.get(API).then((res) => {
          const caseObj=(res.data.timeline.cases)  
          const caseArry = Object.values(caseObj)
          setCasesList(caseArry)
          const recoveredObj=(res.data.timeline.recovered)  
          const  recoveredArry = Object.values( recoveredObj)
          setRecoveredList(recoveredArry)
          const deathObj=(res.data.timeline.deaths)  
          const  deathArry = Object.values( deathObj)
          setDeathList(deathArry)
         
            setCaseChartMax(Math.max(...caseArry))
            setRecoveredChartMax(Math.max(...recoveredArry))
            setDeathChartMax(Math.max(...deathArry))
            
        });
      }, [country]);
      const API = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
      
        const test= ()=>{

            console.log(casesList.slice(-31)[0])
            console.log(casesList)
        }

      
            const test2= ()=>{
                setCaseChartMax(Math.max(...casesList))
                setRecoveredChartMax(Math.max(...recoveredList))
                setDeathChartMax(Math.max(...deathList))
                
                
            }
         

        const dailySalesChart = {
            casesData: {
              labels: ["Jan", "Feb", "March", "April", "May", "June", "July",],
              series: [[casesList.slice(-181)[0],casesList.slice(-151)[0],casesList.slice(-121)[0], casesList.slice(-91)[0],casesList.slice(-61)[0], casesList.slice(-31)[0],casesList.slice(-1)[0]]] 
            },
            recoveredData: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July",],
                series: [[ recoveredList.slice(-181)[0], recoveredList.slice(-151)[0], recoveredList.slice(-121)[0], recoveredList.slice(-91)[0], recoveredList.slice(-61)[0], recoveredList.slice(-31)[0], recoveredList.slice(-1)[0]]] 
              },
              deathData: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July",],
                series: [[deathList.slice(-181)[0], deathList.slice(-151)[0],deathList.slice(-121)[0], deathList.slice(-91)[0],deathList.slice(-61)[0],  deathList.slice(-31)[0],deathList.slice(-1)[0]]] 
              },
            casesOptions: {
              lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
              }),
              low: 0,
              high: caseChartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
                high: recoveredChartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
                high: deathChartMax, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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

            let casePercentage;
          if (Math.sign(getPercentageChange(casesList.slice(-31)[0],casesList.slice(-1)[0])) ===1) {
            casePercentage =    <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> {getPercentageChange(casesList.slice(-31)[0],casesList.slice(-1)[0])}%
            </span>{" "}
            increase in the last month.
            
          </p>
          } else {
            casePercentage = <p className={classes.cardCategory}>
            <span className={classes.dangerText}>
              < ArrowDownward  className={classes.downArrowCardCategory} /> {getPercentageChange(casesList.slice(-31)[0],casesList.slice(-1)[0])}%
          
            </span>{" "}
            decrease in the last Month.
         
          </p>
          }

          let recoveredPercentage;
          if (Math.sign(getPercentageChange( recoveredList.slice(-31)[0], recoveredList.slice(-1)[0])) ===1) {
            recoveredPercentage =    <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> {getPercentageChange( recoveredList.slice(-31)[0], recoveredList.slice(-1)[0])}%
            </span>{" "}
            increase in the last month.
            
          </p>
          } else {
            recoveredPercentage = <p className={classes.cardCategory}>
            <span className={classes.dangerText}>
              < ArrowDownward  className={classes.downArrowCardCategory} /> {getPercentageChange(recoveredList.slice(-31)[0], recoveredList.slice(-1)[0])}%
            </span>{" "}
            decrease in the last Month.
        
          </p>
          }

          let deathPercentage;
          if (Math.sign(getPercentageChange( deathList.slice(-31)[0],deathList.slice(-1)[0])) ===1) {
            deathPercentage =    <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> {getPercentageChange( deathList.slice(-31)[0],deathList.slice(-1)[0])}%
            </span>{" "}
            increase in the last month.
            
          </p>
          } else {
            deathPercentage = <p className={classes.cardCategory}>
            <span className={classes.dangerText}>
              < ArrowDownward  className={classes.downArrowCardCategory} /> {getPercentageChange(  deathList.slice(-31)[0],deathList.slice(-1)[0])}%
            </span>{" "}
            decrease in the last Month.
        
          </p>
          }

          const onCountryChange= (e) =>{
              console.log(e.target.value)
              setCountry(e.target.value)
          }
            
            const countrySelect= (
             
                    <div>
                        <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              {props.data.map((country) => (
                <MenuItem value={country.country}>{country.country}</MenuItem>
              ))}
            </Select>
        
          </FormControl>
                    </div>
            )
            

        return (
            
            <div>
              <div className="header__">
                    <h1 className="title">COVID-19 TRACKER</h1>
                    {countrySelect}
              </div>
                  <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart >
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.casesData}
                type="Line"
                options={dailySalesChart.casesOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
     
              <h4 className={classes.cardTitle}>Corona Virus Cases</h4>
              <p>A total of <span className={classes.warningText}>{numeral(casesList.slice(-1)[0]).format("0,0")}</span> as of {getCurrentDate()}</p>
           { casePercentage}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
                <button onClick={test}>d</button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success" >
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.recoveredData}
                type="Line"
                options={dailySalesChart.recoveredOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
             
              <h4 className={classes.cardTitle}>Recovered</h4>
              <p>A total of <span className={classes.successText}>{numeral(recoveredList.slice(-1)[0]).format("0,0")}</span> as of {getCurrentDate()}</p>
             {recoveredPercentage}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
           
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger" >
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.deathData}
                type="Line"
                options={dailySalesChart.deathOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
   
              <h4 className={classes.cardTitle}>Deaths</h4>
              <p>A total of <span  className={classes.dangerText}>{numeral(deathList.slice(-1)[0]).format("0,0")}</span> as of {getCurrentDate()}</p>
              {deathPercentage}
     
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