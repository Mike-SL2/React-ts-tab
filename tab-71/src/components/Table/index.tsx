import {FunctionComponent} from "react";
import {TArrayOfUsers} from "../../types";
import {IUser} from "../../types";
import User from "../User/index";
import style from './style.module.css';

interface ITableProps {
users: TArrayOfUsers
}

const Table: FunctionComponent<ITableProps> = ({users}): JSX.Element => {
    let userLine:IUser;
    const headerData:IUser={...users[0], lineColor:'', userNumer:0};
return (
   <div className={style.tableBlock}> 
   
        <div className={style.tableHeader}>  
            <User {...headerData}/> 
        </div>    
       {   
           users.map((user, index) => {
            userLine = {...user, lineColor:'', userNumer:index+1};
            if (index % 2) {userLine.lineColor='#e1e1f4';}
               return ( 
                    <div>  
                        <div className={style.blockGap}></div>                 
                        <User {...userLine} key={`user_${index}`}/>
                    </div>
               )
           })
       }     
   </div>
)
}

export default Table;