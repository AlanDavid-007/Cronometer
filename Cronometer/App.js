import React, { Component, useStat, SetStateAction } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Image, SafeAreaView } from 'react-native';


class Clock extends Component {
   constructor(props){
     super(props);
    this.state = {
       registro: 0,
       horas: 0,
       minutos: 0,
       segundos: 0,
       ativo: false,
       voltas: [],
       id: [],
       clock: 0
     },
    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaRelogio = this.iniciaRelogio.bind(this);
    this.pararRelogio = this.pararRelogio.bind(this);
    this.marcarVolta = this.marcarVolta.bind(this);
    this.zerarRelogio = this.zerarRelogio.bind(this);
    }

  iniciaRelogio(){
    if(!this.state.ativo){
       this.setState({clock : setInterval(this.pulsoDeClock,100)});
      this.setState({ativo: true})
     }
  }
  pulsoDeClock(){
    var h = this.state.horas;
    var m = this.state.minutos;
     var s = this.state.segundos;
     var r = this.state.registro;
    if(s<59){
       s++;
     } else {
       s = 0;
      if(m < 59){
        m++;
      }else{
        m=0;
         h++
      }
    } 
    this.setState({segundos: s, minutos: m, horas: h})
  }

  pararRelogio(){
    if(this.state.ativo){
      clearInterval(this.state.clock);
      this.setState({ativo:false});
    }
  }

  marcarVolta(){
  //Arrumar numero de registro para ser automatico e testar app
  var r = this.state.registro;
  if(r<1000000000000000){
    r++;
    var registros = "Nº Registro:" + this.formatar(r) +"\n";
    this.state.id.push(registros);
    this.forceUpdate();
  }
  this.setState({registro:r})
    var txt = this.formatar(this.state.horas) + ":" + this.formatar(this.state.minutos) + ":" + this.formatar(this.state.segundos)+"\n";
    this.state.voltas.push(txt);
    this.forceUpdate();
  }

  formatar(t){
    return (t<10) ? "0"+t.toString() : t.toString();
  }

  zerarRelogio(){
    this.pararRelogio();
    this.setState({segundos:0,minutos:0, horas:0});

    // if(this.state.voltas.length>0){
    //   this.state.voltas.push('-------------- \n');
    // }
}

  trocarTempo(){
  }
render()
{
  var txtHoras = this.formatar(this.state.horas);
    var txtMinutos = this.formatar(this.state.minutos);
    var txtSegundos = this.formatar(this.state.segundos);
    var cronometerText = txtHoras + "h" + txtMinutos + "min" + txtSegundos + "s";
    // Arrumar ScrollView para aumentar conforme aumenta caixa
  return(
    <SafeAreaView>
    <ScrollView>
    <View style={styles.body}>
            <Text style={styles.text}>AngelsForce</Text>
      {/* <Image source={require('./images/relogio.png')} /> */}
      <Text style={styles.clock}>{cronometerText}</Text>
        <View style={styles.button_area}>
          <TouchableOpacity style={styles.button} onPress={(this.state.ativo ? this.pararRelogio : this.iniciaRelogio)}>
              <Text style={styles.button_text}>{(this.state.ativo ? 'Pausar' : 'Começar')}</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.button} onPress={() => { this.zerarRelogio(); this.marcarVolta();}}>
          <Text style={styles.button_text}>Limpar e Salvar</Text>
          </TouchableOpacity>

      </View>
      <View style={styles.saveBox}>
      <Text style={styles.saveRegister}>
          {this.state.id}
        </Text>
        <Text style={styles.saveText}>
          {this.state.voltas}
        </Text>
      </View>
  </View>
  
  
  </ScrollView>
  </SafeAreaView>
  )
}
}
export default Clock;
  


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
    paddingTop:100,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000'
  }, 
  clock:{
    color:'#FFFFFF',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop: 40
  },
  button_area:{
    flexDirection:'row',
    height:50,
    marginTop:80
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#9000FA',
    width: 300,
    height:40,
    margin:10,
    borderRadius:5
  },
  button_text:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
    color:'#FF23A6',
    paddingBottom: 25,
    marginTop: -50
  },
  saveText:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#FF23A6',
    marginLeft: 30
  },
  saveRegister:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#FF23A6',
    marginLeft: 0
  },
  saveBox:{
    marginTop: 50,
    flexDirection:'row',
    height:248,
    color:"#FFFFFF"
  }
});