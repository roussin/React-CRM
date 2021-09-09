import React, { Component } from 'react';
import firebase from '../firebase';

class Form extends Component {

    updateData() {
        this.props.updateData();
    }

    addContact = (e) => {
        // rafraichissement automatique de la page 
        e.preventDefault();
        // initialisation d'un objet newContact contenant les données rentrées par l'utilisateur.
        let newContact = {
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.notes.value
        }

        // connection bd
        const db = firebase.firestore();
        /* const settings = {timestampsInSnapshots: true};
        db.settings(settings);  */

        // ajout du nouveau contact dans la collection contact
        db.collection('contacts').add(newContact);
        // Effacer les valeurs qui sont dans le formulaire
        document.getElementById("addContact").reset();
        // update de l'information
        this.updateData();
    }

    // Suppression d'un contact par son id (sur db)
    removeContact

    render() { 
        return ( 
            <div class="row">
                <form class="col s12" id="addContact" onSubmit={this.addContact.bind(this)}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="prenom" type="text" class="validate"/>
                            <label htmlFor="prenom">Prénom</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="nom" type="text" class="validate"/>
                            <label htmlFor="nom">Nom de famille</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="email" type="text" class="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="compagnie" type="text" class="validate"/>
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s8">
                            <input id="notes" type="text" class="validate"/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div class="input-field col s4">
                            <button className="btn waves-effect wave-light" type="submit" name="action">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>       
        );
    }
}
 
export default Form;