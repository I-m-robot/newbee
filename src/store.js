import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'third-party/axios'

function getMatter(params) {
  const url = '/api/matter/get'
  axios.post(url)
       .then((res)=>{

         params.state.err = res.err;
         params.state.msg = res.msg;

         if(res.err!==0){
           return 
         }else{
          params.all = res.list;
          params.finish = res.list.filter((currentValue)=>{
            return  currentValue.state === 'true';
          })
          params.unfinish = res.list.filter((currentValue)=>{
            return  currentValue.state === 'false';
          })
         }
       })
}


Vue.use(Vuex)
/**
 *  
 */
export default new Vuex.Store({
  state: {
    finish:[],
    unfinish:[],
    all:[],
    msg:'',
    err:0,
  },
  mutations: {
   
  },
  actions: {
    /**
     * 
     * @param {*} context 
     * @param {string} n Matter 
     */
    addMatter(context,n){
      const url = '/api/matter/get';
      axios.post(url,{
            matter:n
          })
          .then(res=>{
            context.state.err = res.err;
            context.state.msg = msg;
            
            if(res.err!==0){
              return 
            }else{
              getMatter(context);
            }
          })
    },
    /**
     * 
     * @param {*} context 
     * @param {sting}} n _id
     */
    updateMatter(context,n){
      const url = '/api/matter/update'
      axios.post(url,{
              _id:n,
            })
           .then(res=>{
            context.state.err = res.err;
            context.state.msg = msg;
            
            if(res.err!==0){
              return 
            }else{
              getMatter(context);
            }

           })
    },
    /**
     * 
     * @param {*} context 
     * @param {string} n _id 
     */
    delectMatter(context,n){
      const url = '/api/matter/del'
      axios.post(url,{
              _id:n,
            })
           .then(res=>{
            context.state.err = res.err;
            context.state.msg = msg;
            
            if(res.err!==0){
              return 
            }else{
              getMatter(context);
            }

           })
    }
  },
  getters:{
    getMatter(state){
      return  state;
    }
  }
})
