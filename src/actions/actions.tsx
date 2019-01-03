export const FETCH_DATA = 'FETCH_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'


export const UPDATE_RECORD = 'UPDATE_RECORD'


export function getAllRecords() {
  return {
    type: FETCH_DATA,
  }
}

export function receiveRecord(records :{}) {
 
  return {
    type: RECEIVE_DATA,
    records: records,
  }
}

export function updateRecord(records:{}) {
return {
  type: UPDATE_RECORD,
  records:records,
}
}
