import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonList, IonText, IonCard, IonProgressBar } from '@ionic/react';
import firebase from '../firebaseconfig';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
        this.rootRef = firebase.database().ref().child('tracker');
        this.state = {
            total: []
        }
    }

    checkTotal = () => {
        this.setState({
            total: [...this.state.total, this.props.miles]
        })
        console.log('miles total', this.state.total)
    }

    render() {
        
        return(
            <IonItem>
                {/* <h1>This is progress bar</h1> */}
                <IonProgressBar type="determinate"></IonProgressBar>
                <IonButton onClick={this.checkTotal}>Check total miles</IonButton>
            </IonItem>
        )
    }
}

export default ProgressBar;