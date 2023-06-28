import './App.css'
import { CssBaseline } from '@mui/material'
import { GlobalStyles } from 'tss-react'
import MUIDataTable from 'mui-datatables'

function App() {
  return (
    <>
        <CssBaseline />
          <MUIDataTable title="Test" data={[]} columns={[]} />
        <GlobalStyles styles={{}} />
    </>
  )
}

export default App
