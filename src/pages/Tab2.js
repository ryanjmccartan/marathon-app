import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ProgressBar from '../components/ProgressBar';
import firebase from '../firebaseconfig';


class Tab2 extends Component {

  constructor(props) {
    super(props)
    this.rootRef = firebase.database().ref().child('tracker');
    this.totalRef = firebase.database().ref().child('total_miles');
    this.state = {
      miles: []
    }
  }

  componentDidMount() {
    this.getMiles();
  }
  

  getMiles = () => {
    this.rootRef.on('value', data => {
        data.forEach(milesnap => {
            this.setState({
              miles: [...this.state.miles, Number(milesnap.val().miles)]
            })
          
        })
    })
}

  checkTotal = () => {
    console.log('miles total', this.state.miles)
}


  render(){
    let total = 0;
    this.state.miles.map(mile => {
      total += mile;

    })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        {/* <ProgressBar miles={this.state.miles}/> */}
        <IonProgressBar type="determinate"></IonProgressBar>
        <IonButton onClick={this.checkTotal}>Check total miles</IonButton>

      </IonContent>
    </IonPage>
    );
  };
}

export default Tab2;
