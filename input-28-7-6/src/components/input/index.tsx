import { FunctionComponent, ChangeEvent, useState } from 'react';
import style from './style.module.css';

const UserInput:FunctionComponent = ():JSX.Element => {
        
const [adv,setAdv]=useState<string>(''), [text,setText]=useState<string>(''),
typing ='Идёт набор текста...',    

      hChange = (ev:ChangeEvent<HTMLInputElement>):void => {
        const inputText = ev.target.value;   
        setText(inputText);
        if (inputText) {if (adv!==typing) {setAdv(typing);}} else {setAdv('');}
},
      hKeyDown = (ev:React.KeyboardEvent<HTMLInputElement>):void => {
        if (ev.key==='Enter') {
                if (text) {
                        setAdv('Вы послали вселенной: '+text);
                        /* ev.target.value=''; if ev type is 'any' else setText & value in <input */
                        setText('');
                } else {setAdv('');}               
        }        
};
  return (
<div className={style.appContainer}> 
        <input  className={style.userInput1}
                value={text}
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