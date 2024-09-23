import Entry from './components/Entry'
import OutputText from './components/OutputText'

function App() {
    const lines = [
      "[2024-07-14][IBP Cresus & Cesar-- 8970g] (Néri, -5000) (Hita, -1000) (Raliz, -7000)"
    ];
    const lines2 = [
      "[2024-07-14][IBP Cresus & Cesar-- 8970g] (Néri, -5000) (Hita, -1000) (Raliz, -7000)",
      "[2024-07-14][IBP Cresus & Cesar-- 8970g] (Néri, -5000) (Hita, -1000) (Raliz, -7000)",
      "[2024-07-14][IBP Cresus & Cesar-- 8970g] (Néri, -5000) (Hita, -1000) (Raliz, -7000)",
      "[2024-07-14][IBP Cresus & Cesar-- 8970g] (Néri, -5000) (Hita, -1000) (Raliz, -7000)"
    ];

  return (
    <>
    <div style={{border: "none", backgroundColor: "	#E8E8E8", maxWidth:"510px", padding:"5px", marginTop:"-10px", marginLeft:"-10px"}}>
      <Entry />

      <div style={{border: "1px solid grey", backgroundColor: "white", maxWidth:"500px", height:"200px", marginBottom:"5px" }}>
        <OutputText title={"FLUX IMPOSSIBLES"} lines={lines} />
      </div>

      <div style={{border: "1px solid grey", backgroundColor: "white", maxWidth:"500px", height:"400px" }}>
        <OutputText title={"FLUX JOURNALIERS"} lines={lines2} />
      </div>
    </div>
    </>
  )
}

export default App
