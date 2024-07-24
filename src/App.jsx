import './App.css'
import toast from 'react-hot-toast'

function App() 
{
  return (
    <>
      <button onClick={() => toast('Hello World')}>Toast</button>
      <button onClick={() => toast.success('Hello World')}>Toast Success</button>
      <button onClick={() => toast.error('Hello World')}>Toast Error</button>
      <button onClick={() => toast.loading('Loading...' , {duration: 1000})}>Toast Loading</button>
      <button onClick={() => toast("This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.")}>Toast Large</button>
      <button onClick={() => toast('Welcome', {icon: '👋'})}>Toast Welcome</button>
      <button onClick={() => toast((t) => (<span> Custom Toast <b>Bold Text</b> <button onClick={() => toast.dismiss(t.id)}> Dismiss</button></span>))}>JSX Toast</button>
      <button onClick={() => toast('Hello World', {style: { borderRadius: '10px', background: '#333', color: '#fff',},})}>Dark Toast</button>
      <button onClick={() => toast.success('Custom Style.', {style: {border: '1px solid #713200',padding: '16px',color: '#713200',},iconTheme: {primary: '#713200',secondary: '#FFFAEE',},})}>Themed Toast</button>
    </>
  )
}

export default App
