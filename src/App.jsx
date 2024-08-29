import Text from "./Components/Text"
import LanguageSelector from "./Components/LanguageSelector"

function App() {

  return (
    <div className="p-[100px]">
      <div>
        <LanguageSelector />
      </div>

      <div className="flex gap-40 mt-10">
        <Text />
      </div>
    </div>
  )
}

export default App
