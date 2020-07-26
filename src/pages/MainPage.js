import React, { Component } from 'react'
import DataCharts from '../components/DataCharts'
import '../mainPage.css'
import LiveCasesChart from '../components/LiveCasesChart'

export default class MainPage extends Component {
    render() {
        return (
            <div>
               <LiveCasesChart/>
            </div>
        )
    }
}
