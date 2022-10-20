import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Cronometer extends Component {
   constructor (props){
     super (props);
    This.state = {
       horas: 0,
       minutos: 0,
       segundos: 0,
       ativo: false,
       voltas: []
     },
    pulsoDeClock = this.pulsoDeClock.bind(this);
    iniciaRelogio = this.iniciaRelogio.bind(this);
    pararRelogio = this.pararRelogio.bind(this);
    marcarVolta - this.marcarVolta. bind(this);
     zerarRelogio = this.zerarRelogio.bind(this);
    }

  iniciaRelogio(){
    if(!this.state.ativo){
       this. setState({clock : setInterval(this.pulsoDeClock,1000)});
      this. setState({ativo: true})
    }
  }
  pulsoDeClock(){
    var h = this.state.horas;
    var m = this.state.minutos;
     var s = this.state.segundos;
    if(s<59){
       s++;
     } else {
       s = 0;
                 I
      if(m < 59) {
        m++;
      }else{
        m=0;
         h++
      }
    }
  }
}

  


// import React, {Component} from 'react';
// import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

// export default class Cronometro extends Component {

//   constructor(props){
//     super(props);
//     this.state = {n:0, botao:'Vai', voltas: []};
//     this.timer = null;

//     this.vai = this.vai.bind(this);
//     this.limpar = this.limpar.bind(this);
//     this.salvar = this.salvar.bind(this);
//   }

//   vai(){
//     let s = this.state;

//     if(this.timer != null){
//      this.pararTimer();
//       s.botao = "Vai"       
//     }      
//     else{
//       this.timer = setInterval(() => {        
//         s.n += 0.1;
//         this.setState(s);
//       },100);   
//       s.botao = "Parar"   
//     }

//     this.setState(s);
//   }

//   limpar(){
//     if(this.timer != null)
    
//       this.pararTimer();

//     let s = this.state;
//     s.n = 0;
//     s.botao = 'Vai';
//     this.setState(s);    
//   }

//   pararTimer(){    
//     clearInterval(this.timer);
//     this.timer = null;
//   }

//   salvar(){
//     var txt = this.formatar(this.state.timer);
//     this.state.voltas.push(txt);
//     this.forceUpdate();
//   }

//   formatar(t){
//     return (t<10) ? "0"+t.toString() : t.toString();
//   }

//   render() {
//     return (
//       <View style={styles.body}>
//           <Image source={require('./images/relogio.png')} />
//           <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>

//           <View style={styles.botaoArea}>
//             <TouchableOpacity style={styles.botao} onPress={this.vai}>
//               <Text style={styles.botaoText}>{this.state.botao}</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.botao} onPress={this.limpar} >
//               <Text style={styles.botaoText}>Limpar</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.botao} onPress={this.salvar} >
//               <Text style={styles.botaoText}>Salvar</Text>
//             </TouchableOpacity>

//           </View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  body:{
    paddingTop:25,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8E48FF'
  }, 
  timer:{
    color:'#00FCFF',
    fontSize:80,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop: -150
  },
  botaoArea:{
    flexDirection:'row',
    height:40,
    marginTop:80
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00FCFF',
    width: 300,
    height:40,
    margin:10,
    borderRadius:5
  },
  botaoText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFFFFF'
  }
});