import { FunctionComponent,  useState } from 'react';
import style from './style.module.css';

const UserInput:FunctionComponent = ():JSX.Element => {
        
const [adv,setAdv]=useState<string>(''), [text,setText]=useState<string>(''),
typing ='Идёт набор текста...',    

      hChange = (ev:any):void => {
        const inputText =ev.target.value;   
        setText(inputText);
        if (inputText) {if (adv!==typing) {setAdv(typing);}} else {setAdv('');}
},
      hKeyDown = (ev:any):void => {
        if (ev.key==='Enter') {
                if (text) {
                        setAdv('Вы послали вселенной: '+text);
                        ev.target.value='';
                } else {setAdv('');}               
        }        
};
  return (
<div className={style.appContainer}> 
        <input  className={style.userInput1}
                placeholder='enter text here'
                onChange={hChange}
                onKeyDown= {hKeyDown}
        />   
        <div className={style.userAdv}>
                {adv}
        </div>                    
</div>     
    );
};
export default UserInput;