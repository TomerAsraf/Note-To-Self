import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Note from './components/Note'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const cookie_key = 'NOTES';

const App = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    setState(read_cookie(cookie_key))
  }, [])

  return (
    <React.Fragment>
      <Header />
      <main>
        <Input state={state} setState={setState} bake_cookie={bake_cookie} cookie_key={cookie_key} />
        {state.map((note, i) => {
          return <Note note={note} key={i} />
        })}

        <hr />
        <div className='clear-btn'>
          <button onClick={() => {
            setState(delete_cookie(cookie_key))
            setState([])
          }}>Clear Notes</button>
        </div>

      </main>
    </React.Fragment>
  )
}

export default App
