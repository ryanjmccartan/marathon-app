import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonList, IonText } from '@ionic/react';
import firebase from '../firebaseconfig';

class AddMiles extends Component {

    constructor(props){
        super(props);
        this.rootRef = firebase.database().ref().child('tracker');
        this.milesRef = this.rootRef.child('miles');
        this.state = {
            miles: 0,
            time: 0,
            date: new Date(),
            mile: []
        }
    }

    componentDidMount() {

        this.rootRef.on('value', data => {
            data.forEach(milesnap => {
                let milekey = milesnap.key;
                let miledata = milesnap.val();
                this.state.mile.push({
                    miles: milesnap.val().miles,
                    time: milesnap.val().time,
                    date: milesnap.val().date
                })
                console.log(milekey, miledata);
                console.log(this.state.mile);
            })
    })
        // this.rootRef.on('value', data => {
        //     data.forEach(milesnap => {
        //         let milekey = milesnap.key;
        //         let miledata = milesnap.val();

        //     })
            // this.state.mile.push({
            //     mile: data.val()
            // })
            // this.setState({
            //     miles: data.val().miles,
            //     time: data.val().time,
            //     date: data.val().date
            // })
        //     console.log(milekey, miledata);
        // })
        // const numRef = rootRef.child('number')
        // const timeRef = rootRef.child('time')
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

    addMiles = () => {
        this.rootRef.push(this.state);
    }

    handleChange = (e, input) => {
        this.setState({
            ...this.state,
            [input]: e.target.value
        });
    }

    // checkData = () => {
    //     this.rootRef.on('value', data => {
    //         data.forEach(milesnap => {
    //             let milekey = milesnap.key;
    //             let miledata = milesnap.val();
    //             this.state.mile.push({
    //                 miles: milesnap.val().miles,
    //                 time: milesnap.val().time,
    //                 date: milesnap.val().date
    //             })
    //             console.log(milekey, miledata);
    //             console.log(this.state.mile);
    //         })
    // })
    // }


    render() {
        return(
            <>
                <IonItem>
                {this.state.mile.map(mile => {
                    return <IonText key={mile.key}><h1>{mile.miles}
                    {mile.time}
                    {mile.date}</h1>
                    </IonText>
                
                })}
                </IonItem>
                {/* <IonHeader>{this.state.miles}</IonHeader>
                <IonHeader>{this.state.time}</IonHeader> */}
                {/* <IonList>{this.rootRef}</IonList> */}
                {/* <IonHeader>{this.state.mile}</IonHeader> */}
           
                <IonInput onIonChange={(e) => this.handleChange(e, 'miles')} type="number" placeholder="miles ran"/>
                <IonInput onIonChange={(e) => this.handleChange(e, 'time')} type="number" placeholder="time taken"/>
                <IonInput onIonChange={(e) => this.handleChange(e, 'date')} type="date" placeholder="date"/>
                <IonButton onClick={this.addMiles} color="secondary">Add miles</IonButton>
                <IonButton onClick={this.checkData}>Check data</IonButton>
                </>
        )
    }
}

export default AddMiles;