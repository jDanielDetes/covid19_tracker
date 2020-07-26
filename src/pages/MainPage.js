import React, { Component } from 'react'
import DataCharts from '../components/DataCharts'
import '../mainPage.css'
import LiveCasesChart from '../components/LiveCasesChart'
import MapCases from '../components/MapCases'

export default class MainPage extends Component {
    render() {
        return (
            <div>
               <MapCases/>
            </div>
        )
    }
}
