import React, {useState} from "react";
import { Form } from "semantic-ui-react";


function PokemonForm({onAddPoke}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")



  function handleSubmit(e){
    e.preventDefault()
    const newPokemonObj = {
      name,
      hp: parseInt(hp),
      sprites: {
        front:frontUrl, 
        back: backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemonObj),
      })
      .then(response => response.json())
      .then(data => {
        onAddPoke(data)
        })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={e=>{setName(e.target.value)}} fluid label="Name" placeholder="Name" name="name" value={name} />
          <Form.Input onChange={e=>{setHp(e.target.value)}} fluid label="hp" placeholder="hp" name="hp" value={hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={e=>{setFrontUrl(e.target.value)}}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={e=>{setBackUrl(e.target.value)}}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;