const env = require('env-var')

const config = {
    SNOWFLAKE_USER: env.get('SNOWFLAKE_USER').asString(),
    SNOWFLAKE_PASS: env.get('SNOWFLAKE_PASS').asString(),
    SNOWFLAKE_ROLE: env.get('SNOWFLAKE_ROLE').asString(),
    SNOWFLAKE_ACCT: env.get('SNOWFLAKE_ACCT').asString(),
    SNOWFLAKE_WH: env.get('SNOWFLAKE_WH').asString()}

export { config }