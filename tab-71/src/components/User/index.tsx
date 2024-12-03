import { FunctionComponent, useState } from 'react';
import { IUser } from '../../types';
import style from './style.module.css';

/* тип компонента - "FunctionComponent", тип вх. данных компонента - интерфейс типа "IUser" */
const User:FunctionComponent<IUser> = 
/*  паттерн деструктуризации вх. данных - ({a,b,c}); тип возвращаемого значения - JSX.Element  */
                ({name, secondName, age, rank, gender, lineColor, userNumer}):JSX.Element => {
const [rankState, setRank]=useState<IUser['rank']>(rank),                    
/* обработчики управления значением рейтинга */
handlerRankUp=():void =>{setRank(rankState+1);},  handlerRankDown=():void =>{setRank(rankState-1);};

  return (
<div>                           
           {
        userNumer ? <div className={style.userRecord}  style={{background:lineColor}}>  
                        <div className={style.userNumer}> 
                                {`${userNumer}.`}
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.userNameField}> 
                                {`${name} ${secondName}`}
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.userAgeField}> 
                                {`Возраст: ${age}`}
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.userSexField}> 
                                {`Секс: ${gender}`}
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.userRankField}> 
                                {`Рейтинг: ${rankState}`}
                            <div className={style.userRankCntrlBtnBlock}> 
                                <button onClick={handlerRankUp}   className={style.userRankCntrlBtnPls}>+</button>
                                <button onClick={handlerRankDown} className={style.userRankCntrlBtnMns}>-</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={style.tableHead}>  
                        <div className={style.blankHeadItem}>                         
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.tableHeadName}> 
                                Фамилия, Имя, Отчество пользователя
                        </div>                                      <div className={style.userRecGap}></div>
                        <div className={style.tableHeadAge}> 
                                Возраст
                        </div>                                     <div className={style.userRecGap}></div>
                        <div className={style.tableHeadSex}> 
                                Пол
                        </div>                                     <div className={style.userRecGap}></div> 
                        <div className={style.tableHeadRank}> 
                                Рейтинг
                        </div>  
                    </div>                       
            }  
</div>     
    );
};
export default User;