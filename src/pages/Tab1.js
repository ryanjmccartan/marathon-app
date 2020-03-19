import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AddMiles from '../components/AddMiles';
import './Tab1.css';
import firebase from '../firebaseconfig';

class Tab1 extends Component {

  constructor(props) {
    super(props);
    this.rootRef = firebase.database().ref().child('tracker');
    this.state = {
      key: '',
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.rootRef.on('value', data => {
        data.forEach(milesnap => {
            let milekey = milesnap.key;
            let miledata = milesnap.val();
            this.setState({
              key: milesnap.key,
              data: [...this.state.data, miledata]
                // id: milekey,
                // miles: milesnap.val().miles,
                // time: milesnap.val().time,
                // date: milesnap.val().date
            })
        console.log(milekey, miledata);
        console.log('this is tracker data', this.state)
        })
    })
}

  render() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>{this.state.data.map(data => {
          return <h1>Miles:
            {data.miles}
            Time:
          {data.time}
          Date: 
          {data.date}</h1>
        })}</IonText>
        {/* <IonCard>
                    <IonText>
                {this.state.data.map(mile => {
                    return <h1 key={mile.id}>{mile.miles}
                    {mile.time}
                    {mile.date}</h1>
                    
                
                })}
                </IonText>
                </IonCard> */}
              
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <AddMiles/>
      </IonContent>
    </IonPage>
  );
  }
};

export default Tab1;
