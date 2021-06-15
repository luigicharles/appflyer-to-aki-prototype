import SnowFlakeClient from './src/snowflake'
import { queryAppsFlyerEvents } from './src/sql/queries'

SnowFlakeClient(queryAppsFlyerEvents(25)).then(response => {
    console.log(response)
})