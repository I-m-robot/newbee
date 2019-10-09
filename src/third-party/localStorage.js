export default  {
    /**
     * 
     * @param {string} key 键
     */
    getItem(key){
      const now = new Date().getTime();
      let  result = JSON.parse(localStorage.getItem(params));  
      if(now > result['endTime']){
        localStorage.removeItem(key);
        return null;
      }else{
        return result['value'];
      }
    },
    /**
     * 
     * @param {string} key 键
     * @param {string} value 值
     * @param {number} n 存储周期 单位:秒
     */
    setItem(key,value,n){
      const result = {};
      result.startTime = new Date().getTime();
      result.endTime = startTime + n*1000;
      result.value = value;

      result = JSON.stringify(result);

      localStorage.setItem(key,result);
    },
    clear(){
      localStorage.clear();
    },
    removeItem(key){
      localStorage.removeItem(key);
    }



}