import React, {Component} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ProgressBar from '../components/ProgressBar';
import firebase from '../firebaseconfig';


class Tab2 extends Component {

  constructor(props) {
    super(props)
    this.totalRef = firebase.database().ref().child('total_miles');
    this.state = {
      goal: 0
    }
  }

  componentDidMount() {
    this.getTotal();
  }
  

  getTotal = () => {
        this.totalRef.on('value', total => {
          this.setState({
            goal: Number(total.val())
          })
        })
    }

  checkTotal = () => {
    console.log('miles total', this.props.total)
}


  render(){
    const total = this.props.total;
    const goal = this.state.goal
    const progress = total / goal
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Progress</IonTitle>
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
        <IonProgressBar value={progress} type="determinate"></IonProgressBar>
        <IonButton onClick={this.checkTotal}>Check total miles</IonButton>

      </IonContent>
    </IonPage>
    );
  };
}

export default Tab2;
