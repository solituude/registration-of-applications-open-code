import React from "react";
import s from './statementEdit.module.sass';
import {useNavigate, useParams} from "react-router";

const StatementEdit = (props) => {
    const { id } = useParams();

    return(
        <div className={s.content}  aria-hidden="true">
            ты сейчас в {id} заявке
            <button onClick={props.onClose}>
                Закрыть
            </button>
        </div>
    );
}

export default StatementEdit;