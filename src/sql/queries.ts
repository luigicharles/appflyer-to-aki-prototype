const queryAppsFlyerEvents = (limit: number) => {
    return `
    SELECT * FROM raw.bronze.AF_EVENTS
    LIMIT ${limit}
    `
  }

export {
    queryAppsFlyerEvents
}