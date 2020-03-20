import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText, IonItem, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AddMiles from '../components/AddMiles';
import './Tab1.css';
import firebase from '../firebaseconfig';

class Tab1 extends Component {

  constructor(props) {
    super(props);
    this.rootRef = firebase.database().ref().child('tracker');
    this.state = {
      data: []
    }
  }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     this.rootRef.on('value', data => {
//         data.forEach(milesnap => {
//             const milekey = milesnap.key;
//             const miledata = milesnap.val();
//             this.setState({
//               data: [...this.state.data, {
//                 id: milesnap.key,
//                 miles: miledata.miles,
//                 time: miledata.time,
//                 date: miledata.date
//               }]
//             })
//         console.log(milekey, miledata);
//         })
//         console.log('this is tracker data', this.state.data)
//     })
// }

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
        <IonList>
          {this.props.data.map(data => (
            <IonItem>
              <IonText>
                <h1>Miles: {data.miles}</h1>
              </IonText>
              <IonText>
                <h1>Time: {data.time}</h1>
              </IonText>
              <IonText slot="end">
                <h1>Date:{data.date}</h1>
              </IonText>
            </IonItem>
          ))}
          </IonList>

        <AddMiles getData={this.props.getData}/>
      </IonContent>
    </IonPage>
  );
  }
};

export default Tab1;
