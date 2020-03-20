const sendLog = (log) => console.log(log); 
const jumpTo = (page) => console.log(`Jump to ${page}`); 
/**
 * Button click event
 * @param {number} status
 *  Activity status: 1 in progress, 2 in failure, 3 out of stock, 4 in success, 5 system cancelled
 */
const onButtonClick = (status) => {
    if(status === 1) {
        sendLog('processing');
        jumpTo('IndexPage')
    } else if(status === 2) {
        sendLog('fail');
        jumpTo('FailPage')
    } else if(status === 3) {
        sendLog('fail');
        jumpTo('FailPage')
    } else if(status === 4) {
        sendLog('success');
        jumpTo('SuccessPage')
    } else if(status === 5) {
        sendLog('cancel');
        jumpTo('CancelPage')
    } else {
        sendLog('other');
        jumpTo('Index')
    }
}


/**
 * Segunda variante usando switch
 */
const onButtonClick2 = (status) => {
    switch (status){
        case 1:
          sendLog('processing')
          jumpTo('IndexPage')
          break
        case 2:
        case 3:
          sendLog('fail')
          jumpTo('FailPage')
          break  
        case 4:
          sendLog('success')
          jumpTo('SuccessPage')
          break
        case 5:
          sendLog('cancel')
          jumpTo('CancelPage')
          break
        default:
          sendLog('other')
          jumpTo('Index')
          break
      }
}

/**
 * Tercera variante
 */
const actions = {
    '1': ['processing','IndexPage'],
    '2': ['fail','FailPage'],
    '3': ['fail','FailPage'],
    '4': ['success','SuccessPage'],
    '5': ['cancel','CancelPage'],
    'default': ['other','Index'],
  }
  
  const onButtonClick3 = (status)=>{ debugger;
    let action = actions[status] || actions['default'],
        logName = action[0],
        pageName = action[1]
    sendLog(logName)
    jumpTo(pageName)
  }


/**
 * Cuarta variante: Map
 */
const actions4 = new Map([
    [1, ['processing','IndexPage']],
    [2, ['fail','FailPage']],
    [3, ['fail','FailPage']],
    [4, ['success','SuccessPage']],
    [5, ['cancel','CancelPage']],
    ['default', ['other','Index']]
  ])
  
  const onButtonClick4 = (status)=>{
    let action = actions4.get(status) || actions.get('default'),        
        logName = action[0],
        pageName = action[1]
    sendLog(logName)
    jumpTo(pageName)
  }


const btnOperation1 = document.querySelector('#btnOperation1');
btnOperation1.onclick = (event) => {
    //onButtonClick(1);
    onButtonClick4(1);
}

const btnOperation2 = document.querySelector('#btnOperation2');
btnOperation2.onclick = (event) => {
    onButtonClick(2);
}

const btnOperation3 = document.querySelector('#btnOperation3');
btnOperation3.onclick = (event) => {
    onButtonClick(3);
}

const btnOperation4 = document.querySelector('#btnOperation4');
btnOperation4.onclick = (event) => {
    onButtonClick(4);
}

const btnOperation5 = document.querySelector('#btnOperation5');
btnOperation5.onclick = (event) => {
    onButtonClick(5);
}

const btnOperation = document.querySelector('#btnOperation');
btnOperation.onclick = (event) => {
    onButtonClick(12);
}

//https://medium.com/javascript-in-plain-english/clean-up-your-code-by-removing-if-else-statements-31102fe3b083