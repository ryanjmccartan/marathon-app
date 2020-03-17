import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonInput } from '@ionic/react';
import firebase from '../firebaseconfig';

class AddMiles extends Component {

    constructor(props){
        super(props);
        this.state = {
            miles: 0,
            time: 0
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('miles')
        const numRef = rootRef.child('number')
        const timeRef = rootRef.child('time')
        // numRef.on('value', mile => {
        //     this.setState({
        //         miles: mile.val()
        //     })
        // })
        // timeRef.on('value', time => {
        //     this.setState({
        //         time: time.val()
        //     })
        // })

    }

    // addMiles = () => {
    //     this.milesDatabase.on('value', mile => {
    //         this.setState({
    //             miles: mile.val()
    //         })
    //     })
    // }

    handleChange = (e) => {
        // this.setState({
        //     miles: e.target.value
        // });
        console.log(e.target.value)
    }


    render() {
        return(
            <>
            <IonButton color="secondary">Try me</IonButton>
            <IonHeader>{this.state.miles}</IonHeader>
            <IonHeader>{this.state.time}</IonHeader>

            <IonInput onIonChange={(e) => this.handleChange(e)} type="number" placeholder="miles ran"/>
            </>
        )
    }
}

export default AddMiles;