/**
 * Similar al ejemplo uno pero ahora hay un parametro mas, identidad
 * 
 * Button click event
 * @param {number} status 
 *    Activity status: 1 in progress, 2 in failure, 3 out of stock, 4 in success, 5 system cancelled
 *
 * @param {string} identity: guest, master 
 */
const onButtonClick = (status,identity)=>{
    if(identity == 'guest'){
      if(status == 1){
        //do sth
      }else if(status == 2){
        //do sth
      }else if(status == 3){
        //do sth
      }else if(status == 4){
        //do sth
      }else if(status == 5){
        //do sth
      }else {
        //do sth
      }
    }else if(identity == 'master') {
      if(status == 1){
        //do sth
      }else if(status == 2){
        //do sth
      }else if(status == 3){
        //do sth
      }else if(status == 4){
        //do sth
      }else if(status == 5){
        //do sth
      }else {
        //do sth
      }
    }
  }


  /**
   * Variante 2 usando maps
   */
  const actions = new Map([
    ['guest_1', ()=>{/*do sth*/}],
    ['guest_2', ()=>{/*do sth*/}],
    ['guest_3', ()=>{/*do sth*/}],
    ['guest_4', ()=>{/*do sth*/}],
    ['guest_5', ()=>{/*do sth*/}],
    ['master_1', ()=>{/*do sth*/}],
    ['master_2', ()=>{/*do sth*/}],
    ['master_3', ()=>{/*do sth*/}],
    ['master_4', ()=>{/*do sth*/}],
    ['master_5', ()=>{/*do sth*/}],
    ['default', ()=>{/*do sth*/}],
  ])
  
  const onButtonClick = (identity,status)=>{
    let action = actions.get(`${identity}_${status}`) || actions.get('default')
    action.call(this)
  } 



  /**
   * Ultima variante con RegExp
   */

  const actions = ()=>{
    const functionA = ()=>{/*do sth*/}
    const functionB = ()=>{/*do sth*/}
    const functionC = ()=>{/*send log*/}
    return new Map([
      [/^guest_[1-4]$/,functionA],
      [/^guest_5$/,functionB],
      [/^guest_.*$/,functionC],
      //...
    ])
  }
  
  const onButtonClick = (identity,status)=>{
    let action = [...actions()].filter(([key,value])=>(key.test(`${identity}_${status}`)))
    action.forEach(([key,value])=>value.call(this))
  }


  //https://medium.com/javascript-in-plain-english/clean-up-your-code-by-removing-if-else-statements-31102fe3b083