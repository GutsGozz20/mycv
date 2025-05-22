import './App.css'
import MyCV from './components/MyCV'
import DownloadPDF from './components/DownloadPDF'

function App() {
  return (
    <>
      <div className='container mx-auto'>
        <MyCV/>
        <DownloadPDF />
      </div>
    </>
  )
}

export default App
