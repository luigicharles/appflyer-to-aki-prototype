import SnowFlakeClient from './src/snowflake'
import { queryAppsFlyerEvents } from './src/sql/queries'

SnowFlakeClient(queryAppsFlyerEvents(75)).then(response => {
    console.log(response)
})