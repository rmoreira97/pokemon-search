import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const handleSubmit =   (event) => {
    event.preventDefault();
    // retrieve form data and create new object
    const formData = new FormData(event.target);
    const newPokemon = {
      name: formData.get("name"),
      hp: formData.get("hp"),
      sprites: {
        front: formData.get("frontUrl"),
        back: formData.get("backUrl"),
      },
    };
    // Call the onAddPokemon function to add the new Pokémon

    onAddPokemon(newPokemon);

    // Log a message when the form is submitted
    console.log("Form Submitted!");


    //clear the form

    event.target.reset();
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
