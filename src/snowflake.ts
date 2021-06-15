const snowflake = require('snowflake-sdk')
const { config } = require('./config')

const querySnowflake = async (query: any) => {
  let sfclient: any
  return new Promise((resolve, reject) => {
    try {
      sfclient = snowflake.createConnection({
        account: config.SNOWFLAKE_ACCT,
        username: config.SNOWFLAKE_USER,
        password: config.SNOWFLAKE_PASS,
        role: config.SNOWFLAKE_ROLE,
        warehouse: config.SNOWFLAKE_WH
      })
    } catch (error) {
      console.log(error)
      reject(error)
    }

    sfclient.connect((error: any, conn: any) => {
      if (error) {
        console.log(`Unable to connect ${error}`)
        reject(error)
      } else {
        console.log(`Successfully connected to Snowflake. Connection ID: ${conn.getId()}`)
        try {
          return resolve(
            new Promise((resolve, reject) => {
              const statement = {
                sqlText: query,
                // eslint-disable-next-line no-unused-vars
                complete: function (err: any, stmt: any, rows: any) {
                  if (err) {
                    console.log(`Failed to execute statement due to error: ${err}`)
                    reject(err)
                  } else {
                    console.log(`Successfully executed SQL statement`)
                    resolve(rows)
                  }
                }
              }
              sfclient.execute(statement)
            })
          )
        } catch (error) {
          console.log(error)
          reject(error)
        }
      }
    })
  })
}

export default querySnowflake
